import React, { useState, useEffect, useRef, useCallback } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import Card from "../gameCards/Card";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

const FreeGames = () => {
  const sliderRef = useRef(null);
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

  const handlePrev = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slidePrev();
  }, []);

  const handleNext = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slideNext();
  }, []);

  return (
    <section className="scale-75 rounded-lg border-t border-slate-700 py-4">
      <div className="flex justify-between text-3xl mb-8 mx-28 max-sm:mx-4">
        <div className="flex gap-4 items-center font-bold ">
          <h3>Free Games</h3>
        </div>
        <div className="flex gap-3 max-sm:hidden">
          <button
            className="bg-slate-700 rounded-full p-1 hover:bg-slate-600"
            onClick={handlePrev}
          >
            <MdKeyboardArrowLeft />
          </button>
          <button
            className="bg-slate-700 rounded-full p-1 hover:bg-slate-600"
            onClick={handleNext}
          >
            <MdKeyboardArrowRight />
          </button>
        </div>
      </div>

      <Swiper
        ref={sliderRef}
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
        style={{ width: "90%", maxWidth: "100vw" }}
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
