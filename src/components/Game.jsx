import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useSelector, useDispatch } from "react-redux";
import { addToWishlist, removeToWishlist } from "@/redux/slices/wishlist";
import { addToCart } from "@/redux/slices/cart";
import { FaWindows, FaAndroid } from "react-icons/fa";
import { CiGrid41 } from "react-icons/ci";
import StarRatings from "react-star-ratings";
import ColorThief from "colorthief";
import { getBrightness, getVibrantColor } from "@/lib/colorExtraction";

const Game = ({ game }) => {
  const { data: session, status } = useSession();
  const [rating, setRating] = useState(2.4);
  const [buttonColor, setButtonColor] = useState("#fff1f2");
  const [textColor, setTextColor] = useState("#000000");
  const imageRef = useRef(null);
  const router = useRouter();
  const wishlist = useSelector((state) => state.wishlist);
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const isInWishlist = wishlist.some((item) => item.id === game._id);
  const isInCart = cart.some((item) => item.id === game._id);

  const buyGame = async (id, userEmail) => {
    try {
      const response = await fetch("/api/buyGame", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id, userEmail }),
      });
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const json = response.json();
    } catch (error) {
      console.error(error);
    }
  };

  const onDownload = (id) => {
    if (status !== "authenticated") {
      router.push("/login");
    }

    buyGame(id, session.user?.email);
  };

  const handleWishlistToggle = () => {
    if (isInWishlist) {
      dispatch(removeToWishlist(game._id));
    } else {
      dispatch(
        addToWishlist({
          id: game._id,
          productImage: game.productFrontPoster,
          productName: game.productName,
          productPrice: game.productPrice,
          productPlatform: game.productPlatform,
        })
      );
    }
  };

  const handleCartToggle = () => {
    if (isInCart) {
      router.push("/cart");
    } else {
      dispatch(
        addToCart({
          id: game._id,
          productImage: game.productFrontPoster,
          productName: game.productName,
          productPrice: game.productPrice,
          productPlatform: game.productPlatform,
        })
      );
    }
  };

  useEffect(() => {
    const image = imageRef.current;
    const colorThief = new ColorThief();

    if (image) {
      image.onload = () => {
        const palette = colorThief.getPalette(image, 5);
        const vibrantColor = getVibrantColor(palette);
        setButtonColor(`rgb(${vibrantColor.join(",")})`);

        const [r, g, b] = vibrantColor;
        const brightness = getBrightness(r, g, b);

        if (brightness < 128) {
          setTextColor("#ffffff");
        } else {
          setTextColor("#000000");
        }
      };
    }
  }, [game.productImage]);

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
            numberOfStars={5}
            name="rating"
          />
          <h2 className="">{rating}</h2>
        </div>
      </div>
      <section className="flex flex-row-reverse max-sm:flex-col items-start gap-16 px-32 max-sm:px-0">
        <div className="flex flex-col justify-center gap-4 w-2/4 max-sm:w-full">
          <div className="flex justify-center items-center w-full h-[250px] rounded-xl">
            {game.productImage && (
              <Image
                ref={imageRef}
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

          {game.productFileURL && (
            <button
              className="disabled:opacity-80 disabled:cursor-not-allowed flex justify-center items-center gap-2 font-semibold text-center  py-3 rounded-lg hover:opacity-90 cursor-pointer"
              disabled={game.productDownloads.includes(session.user?.email)}
              onClick={() => onDownload(game._id)}
              style={{ backgroundColor: buttonColor, color: textColor }}
            >
              {game.productDownloads.includes(session.user?.email) ? (
                <>
                  <CiGrid41 className="text-lg" /> In Libaray
                </>
              ) : (
                `${game.productPrice > 0 ? "Buy Now" : "Get"}`
              )}
            </button>
          )}
          {!game.productFileURL && (
            <button className="font-medium text-center text-slate-500 border border-slate-600  py-3 rounded-lg hover:opacity-95 cursor-not-allowed">
              Coming Soon
            </button>
          )}

          {game.productDownloads.includes(session.user?.email) ? (
            ""
          ) : (
            <>
              {" "}
              <button
                onClick={handleCartToggle}
                className={`${
                  game.productFileURL
                    ? "font-medium bg-slate-700 py-3 rounded-lg hover:bg-slate-600"
                    : "hidden"
                }`}
              >
                {isInCart ? "View In Cart" : "Add To Cart "}
              </button>
              <button
                onClick={handleWishlistToggle}
                className="font-medium bg-slate-700 py-3 rounded-lg hover:bg-slate-600"
              >
                {isInWishlist ? "In Wishlist" : "Add to Wishlist"}
              </button>
            </>
          )}

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
      </section>
    </>
  );
};

export default Game;
