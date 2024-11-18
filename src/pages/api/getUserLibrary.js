import UserLibrary from "../../../lib/models/UserLibrary";
import { connectToDB } from "../../../lib/mongodb/mongoose";

export default async function handler(req, res) {
  if (req.method === "GET") {
    try {
      const { userEmail } = req.query;

      await connectToDB();

      const library = await UserLibrary.find({
        userEmail: userEmail,
      })
        .populate("gameId")
        .exec();

      res.status(200).json({ libraryData: library });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  } else {
    res.status(500).json({ error: "Method Not Allowed" });
  }
}
