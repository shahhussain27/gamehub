import fs from "fs";
import path from "path";

export default function handler(req, res) {
  const filePath = path.join(process.cwd(), "/data", "game.json");

  try {
    const fileContent = fs.readFileSync(filePath, "utf-8");
    res.status(200).json(JSON.parse(fileContent));
  } catch (error) {
    res.status(500).json({ error: "Error reading file" });
  }
}
