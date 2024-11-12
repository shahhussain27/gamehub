import Product from "../../../lib/models/Product";
import { connectToDB } from "../../../lib/mongodb/mongoose";

export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      const { id, userEmail, ratings } = req.body;
      await connectToDB();

      const product = await Product.findById(id);

      if (!product) {
        return res.status(404).json({ error: "Product not found" });
      }

      product.productRatings.push({
        userEmail: userEmail,
        userRating: ratings,
      });

      await product.save();

      res.status(200).json({ game: product });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  } else {
    res.status(405).json({ error: "Method Not Allowed" });
  }
}
