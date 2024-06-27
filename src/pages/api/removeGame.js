import Game from "../../../lib/models/Game";
import { connectToDB } from "../../../lib/mongodb/mongoose";

export default async function handler(req, res) {
  if (req.method === "DELETE") {
    try {
      await connectToDB();
      await Game.findByIdAndDelete(JSON.parse(req.body));
      res.status(200).json({ msg: "Game Delete Successfully" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Error Remove Game" });
    }
  } else {
    res.status(500).json({ error: "Method Not Allowed" });
  }
}
