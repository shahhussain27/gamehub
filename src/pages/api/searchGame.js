import Product from "../../../lib/models/Product";
import { connectToDB } from "../../../lib/mongodb/mongoose";

export default async function handler(req, res) {
  if (req.method === "GET") {
    try {
      const { searchQuery } = req.query;
      //http://localhost:3000/api/searchGame?searchQuery=your_query
      
      await connectToDB();

      let games;

      if (searchQuery) {
        const searchRegex = new RegExp(searchQuery, "i");
        games = await Product.find({
          $or: [{ productName: searchRegex }, { productTitle: searchRegex }],
        });
      } else {
        games = await Product.find({});
      }

      res.status(200).json({ games });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  } else {
    res.status(405).json({ error: "Method Not Allowed" });
  }
}
