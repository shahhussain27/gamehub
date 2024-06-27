import Game from "../../../lib/models/Game";
import { connectToDB } from "../../../lib/mongodb/mongoose";

export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      await connectToDB();
      const { gameId, posterUrl, title, price, gameUrl, gameSize, platforms } =
        JSON.parse(req.body);

      const platformObj = {};

      platforms.forEach((platform) => {
        platformObj[platform] = true;
      });

      const newGame = await Game.findOneAndUpdate(
        { gameId: gameId },
        {
          $set: {
            gameId: gameId,
            posterUrl: posterUrl,
            title: title,
            price: price,
            gameUrl: gameUrl,
            gameSize: gameSize,
            platforms: platformObj,
          },
        },
        { upsert: true, new: true, runValidators: true }
      );

      res.status(200).json(newGame);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Error reading file" });
    }
  } else {
    res.status(500).json({ error: "Method Not Allowed" });
  }
}
