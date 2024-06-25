import React, { useState, useEffect } from "react";
import Link from "next/link";
import gameImg from "../../public/gamePoster/carrotHunter.jpg";
import Image from "next/image";
import { IoLogoAndroid, IoLogoApple } from "react-icons/io";
import { FaWindows } from "react-icons/fa";
import { BsBrowserChrome } from "react-icons/bs";

const Main = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [gameData, setGameData] = useState([]);

  useEffect(() => {
    fetch("/api/getGames")
      .then((response) => response.json())
      .then((data) => {
        setGameData(data.game);
      })
      .catch((error) => {
        console.error("Error fetching file:", error);
      });
  }, []);

  // console.log(gameData);

  return (
    <>
      {gameData.map((game, index) => (
        <div
          key={game.id}
          className="max-w-sm rounded-lg overflow-hidden shadow-lg transition-all"
        >
          <div
            className="relative"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <Image
              src={game.gamePoster}
              alt="Game Poster"
              width={600}
              height={600}
              className="w-full h-[400px] object-fit hover:obacity-0"
            />

            <div
              className={`absolute inset-0 bg-black opacity-0 ${
                isHovered ? "opacity-50" : ""
              } transition-opacity duration-300`}
            />
            <div
              className={`absolute flex flex-col justify-around inset-0  bg-background px-6 py-2 ${
                isHovered ? "opacity-100 " : "opacity-0"
              }  transition-opacity duration-300`}
            >
              <div className="flex flex-col items-center justify-between text-white mb-4">
                <h2 className="text-xl font-bold">CarrotHunter</h2>
                <div className="text-2xl font-bold text-primary">Free</div>
              </div>
              <div className="grid gap-4 text-white">
                <div>
                  <div className="flex gap-2 justify-center text-white">
                    <span className="bg-black rounded-full p-2">
                      <FaWindows />
                    </span>
                    <span className="bg-black rounded-full p-2">
                      <IoLogoAndroid />
                    </span>
                    <span className="bg-black rounded-full p-2">
                      <IoLogoApple />
                    </span>
                    <span className="bg-black rounded-full p-2">
                      <BsBrowserChrome />
                    </span>
                  </div>
                </div>
                <a href="" download>
                  <button className="w-full bg-black hover:bg-white text-white hover:text-black py-1.5 rounded-full">
                    DOWNLOAD (29 MB)
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      ))} 
    </>
  );
};

export default Main;
