import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useSession } from "next-auth/react";
import { IoHeartOutline, IoHeartSharp } from "react-icons/io5";
import Loader from "./Loader";
import SearchNotFound from "../../public/search-not-found.png";
import Link from "next/link";

const Main = () => {
  const [isLoaded, setIsLoaded] = useState(true);
  const [gameData, setGameData] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const { data: session } = useSession();

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
      <div className="flex items-start justify-start w-full max-w-md bg-slate-800 rounded-full shadow-sm mb-4">
        <input
          type="search"
          placeholder="Search..."
          className="flex-1 px-4 py-2 text-white  bg-transparent outline-none"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      <div className="flex flex-wrap items-center justify-center overflow-y-scroll">
        {gameData.filter((game) =>
          game.productName.toLowerCase().includes(searchQuery.toLowerCase())
        ).length === 0 && (
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
                Unfortunately I could not find any results matching your search.
              </h4>
            </div>
          </div>
        )}

        {gameData
          .filter((game) =>
            game.productName.toLowerCase().includes(searchQuery.toLowerCase())
          )
          .map((game, index) => (
            <Link
              href={`/game/${game._id}`}
              key={game._id}
              className="max-w-sm  rounded-lg overflow-hidden shadow-x-lg transition-all scale-90 "
            >
              <div className="relative w-[282px] h-[400px] hover:opacity-80 transition-opacity duration-300 cursor-pointer group">
                {game.productFrontPoster && (
                  <Image
                    src={game.productFrontPoster}
                    alt="Game Poster"
                    loading="lazy"
                    height={400}
                    width={282}
                    className="w-full h-[400px]  object-cover rounded-lg"
                  />
                )}

                {!game.productFrontPoster && (
                  <div className="flex justify-center items-center w-full h-[400px] text-white text-3xl font-bold bg-slate-800">
                    Not available
                  </div>
                )}

                <div className="flex justify-center items-center opacity-0 group-hover:opacity-100 absolute inset-0 w-8 h-8 ml-auto m-2 p-1 text-white bg-black text-2xl border-2 border-white rounded-full cursor-pointer">
                  <IoHeartOutline />
                  {/* <IoHeartSharp  />  fill */}
                </div>
              </div>
              <div className="mt-4 mx-1">
                <h5 className="text-sm text-gray-400">
                  {game.productPlatform}
                </h5>
                <h3 className="font-semibold text-lg text-white">
                  {game.productName}
                </h3>
                <h2 className="text-white">
                  {game.productPrice > 0 ? `₹${game.productPrice}` : "Free"}
                </h2>
              </div>
            </Link>
          ))}
      </div>
    </>
  );
};

export default Main;
