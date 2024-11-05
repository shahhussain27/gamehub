import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import Image from "next/image";

const AboutTheGame = ({ game }) => {
  return (
    <section className="flex max-sm:flex-col items-start gap-16 px-32 max-sm:px-0">
      <div className=" w-3/5 max-sm:w-full  h-[400px] rounded-xl">
        {game.productCarouselImages.length > 0 && (
          <Carousel
            showArrows={true}
            showStatus={false}
            showIndicators={false}
            infiniteLoop={true}
            showThumbs={true}
          >
            {game.productCarouselImages.map((item, index) => (
              <Image
                src={item.fileUrl}
                alt="Game Image"
                height={400}
                width={100}
                className="w-full h-[400px] rounded-lg object-cover bg-slate-400"
              />
            ))}
          </Carousel>
        )}
        {game.productCarouselImages.length <= 0 && (
          <div className="flex justify-center items-center w-full h-[400px] text-white text-3xl font-bold bg-slate-800">
            Not available
          </div>
        )}
      </div>
    </section>
  );
};

export default AboutTheGame;
