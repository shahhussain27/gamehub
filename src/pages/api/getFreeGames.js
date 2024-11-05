import Product from "../../../lib/models/Product";
import { connectToDB } from "../../../lib/mongodb/mongoose";

export default async function handler(req, res) {
  if (req.method === "GET") {
    try {
      await connectToDB();

      const product = await Product.find({ productPrice: 0 }).exec();

      res.status(200).json({ game: product });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  } else {
    res.status(500).json({ error: "Method Not Allowed" });
  }
}
