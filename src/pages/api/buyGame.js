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

      user.library = user.library || [];
      product.productDownloads = product.productDownloads || [];

      user.library.push(id);
      product.productDownloads.push(userEmail);

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
