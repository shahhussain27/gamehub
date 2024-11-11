import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useSession } from "next-auth/react";
import { useSelector } from "react-redux";
import Loader from "./Loader";
import SearchNotFound from "../../public/search-not-found.png";
import Card from "./gameCards/Card";
import FreeGames from "./filters/FreeGames";
import { GiShoppingBag } from "react-icons/gi";
import { MdShoppingCart } from "react-icons/md";

const Main = () => {
  const [isLoaded, setIsLoaded] = useState(true);
  const [gameData, setGameData] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const { data: session } = useSession();

  const wishlist = useSelector((state) => state.wishlist);
  const cart = useSelector((state) => state.cart);

  useEffect(() => {
    fetch("/api/getGame")
      .then((response) => response.json())
      .then((data) => {
        setGameData(data.game);
        setIsLoaded(false);
      })
      .catch((error) => {
        console.error("Error fetching file:", error);
      });
  }, []);

  return isLoaded ? (
    <Loader />
  ) : (
    <>
      <div className="flex items-start justify-around w-full max-sm:flex-col max-sm:items-center">
        <div className="flex  justify-start w-full max-w-md bg-slate-800 rounded-full shadow-sm mb-4">
          <input
            type="search"
            placeholder="Search..."
            className="flex-1 px-4 py-2.5 text-white  bg-transparent outline-none"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <div className="flex gap-4 text-lg text-slate-300 ">
          <Link href={"wishlist"}>
            <button className="flex items-center gap-2 hover:text-white">
              <GiShoppingBag />
              <h5>Wishlist</h5>
              {wishlist.length === 0 ? (
                ""
              ) : (
                <span className="text-sm font-semibold text-black bg-slate-200 py-0 px-3 rounded-full">
                  {wishlist.length}
                </span>
              )}
            </button>
          </Link>
          <Link href={"/cart"}>
            <button className="flex items-center gap-2 hover:text-white">
              <MdShoppingCart />
              <h5>Cart</h5>
              {cart.length === 0 ? (
                ""
              ) : (
                <span className="text-sm font-semibold text-black bg-slate-200 py-0 px-3 rounded-full">
                  {cart.length}
                </span>
              )}
            </button>
          </Link>
        </div>
      </div>

      <div className="flex flex-wrap items-center justify-center overflow-y-scroll">
        {gameData.length === 0 ? (
          <div className="flex flex-col justify-start items-center gap-12 my-8">
            <Image
              src={"/no-data.svg"}
              alt="empty cart"
              height={200}
              width={200}
              className=" mix-blend-lighten"
            />
            <h2 className="font-extrabold text-4xl text-center">
              GameHub has no content available right now.
            </h2>
          </div>
        ) : (
          <>
            {gameData.filter((game) =>
              game.productName.toLowerCase().includes(searchQuery.toLowerCase())
            ).length === 0 ? (
              <div className="flex flex-col justify-start max-sm:justify-center items-center w-full mt-12">
                <Image
                  src={SearchNotFound}
                  alt="not found"
                  width={200}
                  height={200}
                  className=" object-cover"
                />
                <div className="flex flex-col justify-center items-center gap-3 mt-4">
                  <h3 className="text-white text-4xl font-semibol text-nowrap">
                    No results found
                  </h3>
                  <h4 className="text-gray-400 text-center">
                    Unfortunately I could not find any results matching your
                    search.
                  </h4>
                </div>
              </div>
            ) : (
              <>
                {gameData
                  .filter((game) =>
                    game.productName
                      .toLowerCase()
                      .includes(searchQuery.toLowerCase())
                  )
                  .map((game, index) => (
                    <>
                      <Card
                        id={game._id}
                        productFrontPoster={game.productFrontPoster}
                        productPlatform={game.productPlatform}
                        productName={game.productName}
                        productPrice={game.productPrice}
                        productDiscount={game.productDiscount}
                      />
                    </>
                  ))}
                <FreeGames />
              </>
            )}
          </>
        )}
      </div>
    </>
  );
};

export default Main;
