import React, { useState } from "react";
import Image from "next/image";
import { FaWindows, FaAndroid } from "react-icons/fa";
import StarRatings from "react-star-ratings";

const Game = ({ game }) => {
  const [rating, setRating] = useState(2.4);

  const changeRating = (newRating, name) => {
    setRating(newRating);
  };

  return (
    <>
      <div className="flex flex-col max-sm:justify-center max-sm:items-center px-32 my-8 max-sm:px-0">
        <h1 className="font-extrabold text-4xl max-sm:text-center mb-2">
          {game.productName}
        </h1>
        <div className="flex gap-2 items-end">
          <StarRatings
            rating={rating}
            starRatedColor="white"
            starEmptyColor="#64748b"
            starDimension="20px"
            starSpacing="2px"
            //   changeRating={changeRating}
            numberOfStars={5}
            name="rating"
          />
          <h2 className="">{rating}</h2>
        </div>
      </div>
      <div className="flex flex-row-reverse max-sm:flex-col items-start gap-16 px-32 max-sm:px-0">
        <div className="flex flex-col justify-center gap-4 w-2/4 max-sm:w-full">
          <div className="flex justify-center items-center w-full h-[250px] rounded-xl">
            {game.productImage && (
              <Image
                src={game.productImage}
                alt="Image"
                height={100}
                width={100}
                loading="lazy"
                className="w-[250px] h-[250px] rounded-lg object-fit"
              />
            )}
            {!game.productImage && (
              <div className="flex justify-center items-center w-full h-[250px] text-white text-3xl font-bold bg-slate-800">
                Not available
              </div>
            )}
          </div>

          <h2 className="font-bold text-lg">
            {game.productPrice > 0 ? `₹${game.productPrice}` : "Free"}
          </h2>
          <a
            className="font-medium text-center text-black bg-white  py-3 rounded-lg hover:opacity-95 cursor-pointer"
            href={game.productFileURL}
            download
          >
            <button className="">
              {game.productPrice > 0 ? "Buy Now" : "Download"}
            </button>
          </a>

          <button className="font-medium bg-slate-700 py-3 rounded-lg hover:bg-slate-600">
            Add To Cart
          </button>
          <button className="font-medium bg-slate-700 py-3 rounded-lg hover:bg-slate-600">
            Add to Wishlist
          </button>

          <div className=" w-full h-1/4 ">
            <table className="w-full">
              <tr className="flex justify-between items-center font-medium py-2 border-b border-slate-700">
                <td className="">Developer</td>
                <td className="text-dark dark:text-white">
                  {game.productDeveloper || "GameHub"}
                </td>
              </tr>
              <tr className="flex justify-between items-center font-medium py-2 border-b border-slate-700">
                <td className="">Publisher</td>
                <td className="text-dark dark:text-white">
                  {" "}
                  {game.productPublisher || "GameHub"}
                </td>
              </tr>
              <tr className="flex justify-between items-center font-medium py-2 border-b border-slate-700">
                <td className="">Publish Date</td>
                <td className="text-dark dark:text-white">
                  {" "}
                  {game.createdAt
                    ? new Date(game.createdAt).toLocaleDateString("en-US")
                    : "Date not available"}
                </td>
              </tr>
              <tr className="flex justify-between items-center font-medium py-2 border-b border-slate-700">
                <td className="">Platform</td>
                <td className="text-dark dark:text-white">
                  {game.productPlatform == "Windows" && <FaWindows />}
                  {game.productPlatform == "Android" && <FaAndroid />}
                </td>
              </tr>
            </table>
           
          </div>
        </div>
        <div className="flex flex-col gap-4 w-full">
          <div className="bg-slate-400 w-full h-[400px] rounded-xl">
            {game.productBackPoster && (
              <Image
                src={game.productBackPoster}
                alt="Image"
                height={100}
                width={100}
                loading="lazy"
                className="w-full h-[400px] rounded-xl object-cover"
              />
            )}
            {!game.productBackPoster && (
              <div className="flex justify-center items-center w-full h-[400px] text-white text-3xl font-bold bg-slate-800">
                Not available
              </div>
            )}
          </div>
          <div className="w-full text-dark-2 dark:text-white font-medium text-wrap">
            {game.productTitle || "No Title to display"}
          </div>
        </div>
      </div>
    </>
  );
};

export default Game;
