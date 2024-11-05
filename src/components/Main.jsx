import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useSession } from "next-auth/react";
import Loader from "./Loader";
import SearchNotFound from "../../public/search-not-found.png";
import Card from "./gameCards/Card";
import FreeGames from "./filters/FreeGames";

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
            <Card
              id={game._id}
              productFrontPoster={game.productFrontPoster}
              productPlatform={game.productPlatform}
              productName={game.productName}
              productPrice={game.productPrice}
            />
          ))}
          <FreeGames />
      </div>
      
    </>
  );
};

export default Main;
