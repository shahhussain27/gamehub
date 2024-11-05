import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import Card from "../gameCards/Card";
import { FaGift } from "react-icons/fa";

const FreeGames = () => {
  const [gameData, setGameData] = useState([]);
  useEffect(() => {
    fetch("/api/getFreeGames")
      .then((response) => response.json())
      .then((data) => {
        setGameData(data.game);
      })
      .catch((error) => {
        console.error("Error fetching game:", error);
      });
  }, []);

  return (
    <section className="bg-slate-900 py-12 my-16 scale-75 rounded-lg">
      <h3 className="flex gap-4 items-center font-bold text-3xl mb-8 mx-36">
        <FaGift />
        <span>Free Games</span>
      </h3>
      <Swiper
        spaceBetween={0}
        breakpoints={{
          640: {
            slidesPerView: 1, 
          },
          768: {
            slidesPerView: 4, 
          },
        }}
        // navigation
        modules={[Navigation, Pagination]}
        allowTouchMove
        style={{ width: "80%", maxWidth: "100vw" }}
        className=""
      >
        {gameData.map((game, index) => (
          <SwiperSlide>
            <Card
              id={game._id}
              productFrontPoster={game.productFrontPoster}
              productPlatform={game.productPlatform}
              productName={game.productName}
              productPrice={game.productPrice}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default FreeGames;
