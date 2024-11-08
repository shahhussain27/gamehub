import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeToWishlist } from "@/redux/slices/wishlist";
import Image from "next/image";

const wishlist = () => {
  const wishlist = useSelector((state) => state.wishlist);
  const dispatch = useDispatch();

  return (
    <>
      <div className="font-extrabold text-4xl mb-8">Your Wishlist</div>
      {wishlist.length <= 0 && (
        <>
          <div className="flex flex-col justify-start items-center gap-12 h-screen">
            <Image
              src={"/empty_wishlist.svg"}
              alt="empty wishlist"
              height={300}
              width={300}
              className="opacity-60"
            />
            <h2 className="font-extrabold text-4xl text-center text-wrap">
              You haven't added anything to your wishlist yet.
            </h2>
          </div>
        </>
      )}
      <div className="w-full">
        {wishlist.map((items, index) => (
          <div
            className="flex justify-between border border-slate-600 p-4 my-4 rounded-lg"
            key={items.id}
          >
            <div className="flex gap-4">
              <div className="w-[131px] h-[175px] bg-slate-900 rounded">
                {items.productImage && (
                  <Image
                    src={items.productImage}
                    alt="image"
                    height={175}
                    width={131}
                    className="w-[131px] h-[175px] object-cover rounded"
                  />
                )}
                {!items.productImage && (
                  <div className="flex justify-center items-center w-full h-[175px] text-white text-xl font-bold bg-slate-900">
                    Not available
                  </div>
                )}
              </div>
              <div className="flex flex-col">
                <h3 className="text-sm text-slate-500">
                  {items.productPlatform}
                </h3>
                <h2 className="font-bold text-xl">{items.productName}</h2>
              </div>
            </div>
            <div className="flex flex-col justify-between items-end h-[175px]">
              <div className="font-bold text-xl">
                {" "}
                {items.productPrice > 0 ? `₹${items.productPrice}` : "Free"}
              </div>
              <div className="flex gap-4">
                <button
                  onClick={() => dispatch(removeToWishlist(items.id))}
                  className=" text-lg text-slate-400 hover:text-white"
                >
                  Remove
                </button>
                <button className="btn-primary py-1.5 px-2">Add To Cart</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default wishlist;
