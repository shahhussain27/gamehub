import Game from "../../../lib/models/Game";
import { connectToDB } from "../../../lib/mongodb/mongoose";

export default async function handler(req, res) {
  if (req.method === "GET") {
    try {
      await connectToDB();
      const game = await Game.find();

      res.status(200).json({game: game});
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Error reading file" });
    }
  } else {
    res.status(500).json({ error: "Method Not Allowed" });
  }
}
