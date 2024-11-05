import React, { useState } from "react";
import StarRatings from "react-star-ratings";

const Ratings = () => {
  const [rating, setRating] = useState(0);

  const changeRating = (newRating, name) => {
    setRating(newRating);
  };
  return (
    <section className="w-3/5 flex flex-col items-center gap-8 px-32 my-14 max-sm:px-0 max-sm:w-full">
      <h3 className="font-bold text-xl max-sm:text-lg">
        GameHub Player Ratings
      </h3>
      {/* productRatings.include(userEmail) */}
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
        disabled={rating !== 0 ? false : true}
      >
        Submit
      </button>
    </section>
  );
};

export default Ratings;
