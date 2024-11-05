import React from "react";
import Link from "next/link";
import Image from "next/image";
import { IoHeartOutline, IoHeartSharp } from "react-icons/io5";


const Card = ({
  id,
  productFrontPoster,
  productPlatform,
  productName,
  productPrice,
}) => {
  return (
    <>
      <Link
        href={`/game/${id}`}
        key={id}
        className="max-w-sm  rounded-lg overflow-hidden shadow-x-lg transition-all scale-90 "
      >
        <div className="relative w-[282px] h-[400px] hover:opacity-80 transition-opacity duration-300 cursor-pointer group">
          {productFrontPoster && (
            <Image
              src={productFrontPoster}
              alt="Game Poster"
              loading="lazy"
              height={400}
              width={282}
              className="w-full h-[400px]  object-cover rounded-lg"
            />
          )}

          {!productFrontPoster && (
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
          <h5 className="text-sm text-gray-400">{productPlatform}</h5>
          <h3 className="font-semibold text-lg text-white">{productName}</h3>
          <h2 className="text-white">
            {productPrice > 0 ? `₹${productPrice}` : "Free"}
          </h2>
        </div>
      </Link>
    </>
  );
};

export default Card;
