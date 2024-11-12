import mongoose from "mongoose";

const UserLibrarySchema = new mongoose.Schema(
  {
    userEmail: {
      type: String,
      required: true,
      ref: "User",
    },
    gameId: {
      type: String,
      required: true,
      ref: "Product",
    },
    purchaseDate: {
      type: Date,
      required: true,
      default: Date.now,
    },
    playtime: {
      type: Number,
      default: 0,
    },
    lastPlayed: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: true }
);

const UserLibrary =
  mongoose.models.UserLibrary ||
  mongoose.model("UserLibrary", UserLibrarySchema);
export default UserLibrary;
