import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeToCart } from "@/redux/slices/cart";
import Image from "next/image";

const cart = () => {
  const [price, setPrice] = useState(0);
  const [discount, setDiscount] = useState(0);

  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    const totalPrice = cart.reduce((acc, item) => acc + item.productPrice, 0);
    const totalDiscount = cart.reduce(
      (acc, item) =>
        acc +
        item.productPrice -
        item.productPrice * (item.productDiscount / 100),
      0
    );
    setPrice(totalPrice);
    setDiscount(totalDiscount);
  }, [cart]);

  return (
    <>
      <div className="font-extrabold text-4xl mb-8">Your Cart</div>
      {cart.length === 0 ? (
        <>
          <div className="flex flex-col justify-start items-center gap-12 h-screen">
            <Image
              src={"/empty_wishlist.svg"}
              alt="empty cart"
              height={300}
              width={300}
              className="opacity-60"
            />
            <h2 className="font-extrabold text-4xl text-center text-wrap">
              Your cart is empty.
            </h2>
          </div>
        </>
      ) : (
        <div className="w-full flex justify-between items-start gap-12 max-sm:flex-col">
          <div className="w-full">
            {cart.map((items, index) => (
              <div
                className="flex  justify-between border border-slate-600 p-4 my-4 rounded-lg max-sm:flex-col"
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
                    <h2 className="font-bold text-xl max-sm:text-lg">
                      {items.productName}
                    </h2>
                    <div className="invisible max-sm:visible">
                    {" "}
                    {items.productPrice > 0 ? (
                      <>
                        {items.productDiscount > 0 ? (
                          <h5 className="flex  gap-3">
                            <span className="text-xs font-semibold text-black bg-slate-200 py-1 px-1.5 rounded-full">
                              -{items.productDiscount}%
                            </span>
                            <p className="line-through text-gray-400">
                              ₹{items.productPrice}
                            </p>
                            <p className="font-bold">
                              ₹
                              {items.productPrice -
                                items.productPrice *
                                  (items.productDiscount / 100)}
                            </p>
                          </h5>
                        ) : (
                          <p className="font-bold text-lg">
                            ₹{items.productPrice}
                          </p>
                        )}
                      </>
                    ) : (
                      "Free"
                    )}
                  </div>
                  </div>
                </div>
                <div className="flex flex-col justify-between items-end h-[175px]">
                  <div className="max-sm:hidden">
                    {" "}
                    {items.productPrice > 0 ? (
                      <>
                        {items.productDiscount > 0 ? (
                          <h5 className="flex  gap-3">
                            <span className="text-xs font-semibold text-black bg-slate-200 py-1 px-1.5 rounded-full">
                              -{items.productDiscount}%
                            </span>
                            <p className="line-through text-gray-400">
                              ₹{items.productPrice}
                            </p>
                            <p className="font-bold">
                              ₹
                              {items.productPrice -
                                items.productPrice *
                                  (items.productDiscount / 100)}
                            </p>
                          </h5>
                        ) : (
                          <p className="font-bold text-lg">
                            ₹{items.productPrice}
                          </p>
                        )}
                      </>
                    ) : (
                      "Free"
                    )}
                  </div>
                  <div className="flex gap-4">
                    <button
                      onClick={() => dispatch(removeToCart(items.id))}
                      className=" text-lg text-slate-400 hover:text-white"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="w-full max-w-md text-white">
            <h2 className="text-3xl font-bold mb-6">Games and Apps Summary</h2>

            <div>
              <table className="text-lg">
                <tbody>
                  <tr>
                    <td className="font-normal">Price</td>
                    <td className="text-right font-medium ">
                      ₹{price.toLocaleString()}
                    </td>
                  </tr>
                  <tr>
                    <td className="font-normal ">Sale Discount</td>
                    <td className="text-right font-medium text-red-500 ">
                      -₹{(price - discount).toLocaleString()}
                    </td>
                  </tr>
                  <tr className="border-b border-gray-800">
                    <td className="font-normal pb-4">Taxes</td>
                    <td className="text-right text-gray-400 pb-4">
                      Calculated at Checkout
                    </td>
                  </tr>
                  <tr className="font-bold text-white">
                    <td className="pt-4">Subtotal</td>
                    <td className="text-right  pt-4">
                      ₹{discount.toLocaleString()}
                    </td>
                  </tr>
                  <tr className="">
                    <button className=" btn-primary py-2.5 px-12 mt-6" disabled={true}>
                      Check Out
                    </button>
                  </tr>
                </tbody>
                <div className="my-2 p-2 border border-slate-100 rounded">
                  <p className="font-medium text-sm">
                    Checkout functionality is coming soon! We are working hard
                    to implement this feature and will have it ready in the
                    coming days. Stay tuned for updates!
                  </p>
                </div>
              </table>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default cart;
