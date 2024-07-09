import React, { useState, useEffect } from "react";
import Image from "next/image";
import { IoLogoAndroid, IoLogoApple, IoIosSearch } from "react-icons/io";
import { FaWindows, FaRegEdit } from "react-icons/fa";
import { BsBrowserChrome } from "react-icons/bs";
import { MdDelete } from "react-icons/md";
import { useSession } from "next-auth/react";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import Form from "./Form";
import Loader from "./Loader";
import SearchNotFound from "../../public/search-not-found.png";

const Main = () => {
  const [hoveredGameId, setHoveredGameId] = useState(null);
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

  const removeGame = async (id) => {
    try {
      const response = await fetch("/api/removeGame", {
        method: "DELETE",
        body: JSON.stringify(id),
      });

      if (!response.ok) {
        throw new Error("Failed to delete game");
      }
      const newGame = gameData.filter((game) => {
        return game._id !== id;
      });
      setGameData(newGame);
    } catch (error) {
      console.error(error);
    }
  };

  return isLoaded ? (
    <Loader />
  ) : (
    <>
      <div className="flex items-center w-full max-w-md bg-background rounded-full border border-input shadow-sm mb-4">
        <input
          type="search"
          placeholder="Search..."
          className="flex-1 px-4 py-2  bg-transparent outline-none"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button
          type="submit"
          className="px-4 py-2 rounded-r-full text-2xl bg-black text-white"
        >
          <IoIosSearch />
        </button>
      </div>
      <div className="flex flex-wrap items-center max-sm:justify-center gap-4">
        {gameData.filter((game) =>
          game.title.toLowerCase().includes(searchQuery.toLowerCase())
        ).length === 0 && (
          <div className="flex justify-start max-sm:justify-center items-start w-full">
            <Image
              src={SearchNotFound}
              alt="not found"
              width={300}
              height={300}
              className=" object-cover"
            />
          </div>
        )}

        {gameData
          .filter((game) =>
            game.title.toLowerCase().includes(searchQuery.toLowerCase())
          )
          .map((game, index) => (
            <Dialog defaultClose key={game._id}>
              <div className="max-w-sm rounded-lg overflow-hidden shadow-lg transition-all">
                <div
                  className="relative"
                  onMouseEnter={() => setHoveredGameId(game._id)}
                  onMouseLeave={() => setHoveredGameId(null)}
                >
                  <Image
                    src={game.posterUrl}
                    alt="Game Poster"
                    loading="lazy"
                    width={600}
                    height={600}
                    className="w-full h-[400px] object-fit hover:obacity-0"
                  />

                  <div
                    className={`absolute inset-0 bg-black opacity-0 ${
                      hoveredGameId === game._id ? "opacity-50" : ""
                    } transition-opacity duration-300`}
                  />
                  <div
                    className={`absolute flex flex-col justify-around inset-0  bg-background px-6 py-2 ${
                      hoveredGameId === game._id ? "opacity-100 " : "opacity-0"
                    }  transition-opacity duration-300`}
                  >
                    <div className="flex flex-col items-center justify-between text-white mb-4">
                      <h2 className="text-xl font-bold">{game.title}</h2>
                      <div className="text-2xl font-bold text-primary">
                        {game.price}
                      </div>
                    </div>
                    {session.user?.email === "gamerxpro786@gmail.com" && (
                      <div className="flex justify-center items-start gap-4">
                        <DialogTrigger asChild>
                          <button className="bg-black text-white hover:bg-white hover:text-black rounded-full p-3 text-xl text-center">
                            <FaRegEdit />
                          </button>
                        </DialogTrigger>

                        <button
                          onClick={() => {
                            removeGame(game._id);
                          }}
                          className="bg-black text-white hover:bg-rose-500 rounded-full p-3 text-xl text-center"
                        >
                          <MdDelete />
                        </button>
                      </div>
                    )}

                    <div className="grid gap-4 text-white">
                      <div>
                        <div className="flex gap-2 justify-center text-white">
                          {game.platforms.windows && (
                            <span className="bg-black rounded-full p-2">
                              <FaWindows />
                            </span>
                          )}
                          {game.platforms.android && (
                            <span className="bg-black rounded-full p-2">
                              <IoLogoAndroid />
                            </span>
                          )}
                          {game.platforms.ios && (
                            <span className="bg-black rounded-full p-2">
                              <IoLogoApple />
                            </span>
                          )}
                          {game.platforms.browser && (
                            <span className="bg-black rounded-full p-2">
                              <BsBrowserChrome />
                            </span>
                          )}
                        </div>
                      </div>
                      <a href={game.gameUrl} download>
                        <button className="w-full bg-black hover:bg-white text-white hover:text-black py-1.5 rounded-full">
                          DOWNLOAD ({game.gameSize})
                        </button>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <DialogContent className="sm:max-w-[825px] bg-white">
                <DialogHeader>
                  <DialogTitle>Edit {game.title}</DialogTitle>
                </DialogHeader>
                <DialogDescription className="py-4">
                  <Form
                    gameId={game.gameId}
                    posterUrl={game.posterUrl}
                    title={game.title}
                    price={game.price}
                    gameUrl={game.gameUrl}
                    gameSize={game.gameSize}
                    platforms={game.platforms}
                  />
                </DialogDescription>
              </DialogContent>
            </Dialog>
          ))}
      </div>
    </>
  );
};

export default Main;
