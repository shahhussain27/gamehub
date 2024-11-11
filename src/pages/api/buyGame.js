import Product from "../../../lib/models/Product";
import User from "../../../lib/models/User";
import { connectToDB } from "../../../lib/mongodb/mongoose";

export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      const { id, userEmail } = req.body;

      await connectToDB();

      const product = await Product.findById(id);
      const user = await User.findOne({ email: userEmail });

      if (!product || !user) {
        return res.status(404).json({ error: "Not Found" });
      }

      let downloadDate = new Date();
      let paymentAmount = product.productPrice;
      let ip = req.headers["x-forwarded-for"] || req.socket.remoteAddress;

      if (product.productPrice > 0 && product.productDiscount > 0) {
        let discount = product.productPrice * (product.productDiscount / 100);
        paymentAmount = product.productPrice - discount;
      }

      if (ip.startsWith("::ffff:")) {
        ip = ip.split("::ffff:")[1];
      }

      const geoLocationAPI = `http://ip-api.com/json/${ip}`;
      const response = await fetch(geoLocationAPI);
      const locationData = await response.json();
      const userDownloadLocation = `${locationData.country || "unknown"}, ${
        locationData.city || "unknown "
      }`;

      user.library = user.library || [];
      product.productDownloads = product.productDownloads || [];

      user.library.push(id);
      product.productDownloads.push({
        userEmail: userEmail,
        userDownloandDate: downloadDate,
        userDonwloadLocation: userDownloadLocation,
        userPayment: paymentAmount,
      });

      await user.save();
      await product.save();

      res.status(200).json({ game: product });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal server error" });
    }
  } else {
    res.status(500).json({ error: "Method Not Allowed" });
  }
}
