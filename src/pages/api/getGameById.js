import Product from "../../../lib/models/Product";
import { connectToDB } from "../../../lib/mongodb/mongoose";

export default async function handler(req, res) {
  if (req.method === "GET") {
    try {
      const { id } = req.query;

      await connectToDB();

      const game = await Product.findById(id);

      res.status(200).json({ gameData: game });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  } else {
    res.status(500).json({ error: "Method Not Allowed" });
  }
}
