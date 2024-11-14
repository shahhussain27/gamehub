import mongoose, { Schema } from "mongoose";

const ProductSchema = new mongoose.Schema(
  {
    userEmail: {
      type: String,
      ref: "UserDev",
      required: true,
      ref: "DevUser",
    },
    productImage: {
      type: String,
      required: false,
      default: null,
    },
    productImageKey: {
      type: String,
      required: false,
      default: null,
    },
    productName: {
      type: String,
      required: true,
    },
    productPrice: {
      type: Number,
      required: false,
      default: 0,
    },
    productPublisher: {
      type: String,
      required: true,
    },
    productDeveloper: {
      type: String,
      required: true,
    },
    productPlatform: {
      type: String,
      required: false,
      default: "Windows",
    },
    productGameEngine: {
      type: String,
      required: false,
      default: undefined,
    },
    productFrontPoster: {
      type: String,
      required: false,
      default: null,
    },
    productFrontPosterKey: {
      type: String,
      required: false,
      default: null,
    },
    productBackPoster: {
      type: String,
      required: false,
      default: null,
    },
    productBackPosterKey: {
      type: String,
      required: false,
      default: null,
    },
    productTitle: {
      type: String,
      required: false,
      default: null,
    },
    productFileURL: {
      type: String,
      required: false,
      default: null,
    },
    productFileURLKey: {
      type: String,
      required: false,
      default: null,
    },
    productFileName: {
      type: String,
      required: false,
      default: null,
    },
    productFileSize: {
      type: Number,
      required: false,
      default: null,
    },
    productFileType: {
      type: String,
      required: false,
      default: null,
    },
    productCarouselImages: {
      type: [Object],
      required: false,
      default: null,
    },
    productRatings: {
      type: [Object],
      required: false,
      default: null,
      ref: "User",
    },
    productDownloads: {
      type: [Object],
      required: false,
      default: null,
    },
    productTotalDownloads: {
      type: Number,
      required: false,
      default: 0,
    },
    productTotalRevenueAmount: {
      type: Number,
      required: false,
      default: 0,
    },
    storyHeading: {
      type: String,
      required: false,
      default: null,
    },
    storyContext: {
      type: String,
      required: false,
      default: null,
    },
    genres: {
      type: [Array],
      required: false,
      default: null,
    },
    features: {
      type: [Array],
      required: false,
      default: null,
    },
  },
  { timestamps: true }
);

const Product =
  mongoose.models.Product || mongoose.model("Product", ProductSchema);
export default Product;
