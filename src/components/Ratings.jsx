import React, { useState } from "react";
import StarRatings from "react-star-ratings";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { CiCircleCheck } from "react-icons/ci";
import Link from "next/link";
import Spinner from "./Spinner";

const Ratings = ({ game }) => {
  const { data: session } = useSession();
  const [rating, setRating] = useState(0);
  const [loading, setLoading] = useState(false);
  const [isSucess, setIsSuccess] = useState(false);
  const router = useRouter();

  const changeRating = (newRating, name) => {
    setRating(newRating);
  };

  const giveRatings = async () => {
    setLoading(true);
    try {
      const response = await fetch("/api/giveRating", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id: game._id,
          userEmail: session.user?.email,
          ratings: rating,
        }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const json = response.json();
      setLoading(false);
      setIsSuccess(true);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <section className="w-3/5 flex flex-col items-center gap-8 px-32 my-14 max-sm:px-0 max-sm:w-full">
      {isSucess ? (
        <div className="flex flex-col justify-center items-center gap-4 p-6 bg-gray-800 rounded-lg shadow-lg text-white">
          <CiCircleCheck className="text-green-400 text-5xl mb-4" />
          <h2 className="font-semibold">
            Thank you for your feedback! We truly appreciate your support.
          </h2>
          <Link href="/" className="text-blue-400 hover:text-blue-600 mt-4">
            Explore More Games
          </Link>
        </div>
      ) : (
        <>
          {game.productDownloads.some(
            (download) => download.userEmail === session.user?.email
          ) &&
            !game.productRatings.some(
              (rating) => rating.userEmail === session.user?.email
            ) && (
              <>
                <h3 className="font-bold text-xl max-sm:text-lg">
                  GameHub Player Ratings
                </h3>
                <StarRatings
                  rating={rating}
                  starRatedColor="white"
                  starEmptyColor="#64748b"
                  starHoverColor="white"
                  starDimension="35px"
                  starSpacing="2px"
                  changeRating={changeRating}
                  numberOfStars={5}
                  name="rating"
                />
                <button
                  className="disabled:opacity-80 disabled:cursor-not-allowed btn-primary py-1.5 px-12"
                  disabled={rating === 0 || loading}
                  onClick={giveRatings}
                >
                  {loading ? <Spinner color="#ffffff" /> : "Submit"}
                </button>
              </>
            )}
        </>
      )}
    </section>
  );
};

export default Ratings;
