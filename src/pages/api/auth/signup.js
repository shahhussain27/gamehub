import { hash } from "bcrypt";
import { connectToDB } from "../../../../lib/mongodb/mongoose";
import User from "../../../../lib/models/User";

export default async (req, res) => {
  if (req.method === "POST") {
    const { name, email, password } = req.body;

    await connectToDB();

    const existingUser = await User.findOne({ email });

    if (existingUser) {
      res.status(422).json({ message: "User already exists" });
      return;
    }

    const hashedPassword = await hash(password, 12);

    const result = await User.create({
      name,
      email,
      password: hashedPassword,
    });

    res.status(201).json({ message: "User created" });
  } else {
    res.status(500).json({ message: "Route not valid" });
  }
};
