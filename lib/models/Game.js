import mongoose, { Schema } from "mongoose";

const GameSchema = new mongoose.Schema(
  {
    gameId: {
      type: Number,
      required: true,
      unique: true,
    },
    posterUrl: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    price: {
      type: Schema.Types.Mixed,
      required: true,
    },
    gameUrl: {
      type: String,
      required: true,
    },
    gameSize: {
      type: String,
      required: true,
    },
    platforms: {
      type: Map,
      of: Boolean,
      default: {},
    },
  },
  { timestamps: true }
);

const Game = mongoose.models.Game || mongoose.model("Game", GameSchema);
export default Game;
