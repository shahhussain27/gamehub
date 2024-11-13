import Product from "../../../lib/models/Product";
import UserLibrary from "../../../lib/models/UserLibrary";
import { connectToDB } from "../../../lib/mongodb/mongoose";

export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      const { id, userEmail } = req.body;

      await connectToDB();

      const product = await Product.findById(id);
      if (!product) {
        return res.status(404).json({ error: "Product not found" });
      }

      const libraryEntry = await UserLibrary.findOne({ userEmail, gameId: id });
      if (libraryEntry) {
        return res
          .status(422)
          .json({ error: "This game is already in your library" });
      }

      let downloadDate = new Date();
      let paymentAmount = product.productPrice;

      if (product.productPrice > 0 && product.productDiscount > 0) {
        let discount = product.productPrice * (product.productDiscount / 100);
        return paymentAmount = product.productPrice - discount;
      }

      let ip = req.headers["x-forwarded-for"] || req.socket.remoteAddress;
      if (ip.startsWith("::ffff:")) {
        ip = ip.split("::ffff:")[1];
      }

      let userDownloadLocation = {
        country: "unknown",
        city: "unknown",
        countryCode: "unknown",
      };
      try {
        const geoLocationAPI = `http://ip-api.com/json/${ip}`;
        const response = await fetch(geoLocationAPI);
        if (response.ok) {
          const locationData = await response.json();
          userDownloadLocation = {
            country: locationData.country || "unknown",
            city: locationData.city || "unknown",
            countryCode: locationData.countryCode || "unknown",
          };
        }
      } catch (fetchError) {
        console.error("Failed to fetch geolocation data:", fetchError);
      }

      await UserLibrary.create({
        userEmail: userEmail,
        gameId: id,
        purchaseDate: downloadDate,
      });

      product.productDownloads.push({
        userEmail: userEmail,
        userDownloandDate: downloadDate,
        userDonwloadLocation: userDownloadLocation,
        userPayment: paymentAmount,
      });

      await Product.findByIdAndUpdate(
        id,
        {
          $inc: {
            productTotalDownloads: 1,
            productTotalRevenueAmount: paymentAmount,
          },
        },
        { new: true }
      );

      await product.save();

      res.status(200).json({ game: product });
    } catch (error) {
      console.error("Internal server error:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  } else {
    res.status(405).json({ error: "Method Not Allowed" });
  }
}
