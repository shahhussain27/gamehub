import React, { useState, useEffect } from "react";
import Game from "@/components/Game";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";
import { connectToDB } from "../../../lib/mongodb/mongoose";
import Product from "../../../lib/models/Product";
import Error from "next/error";
import AboutTheGame from "@/components/AboutTheGame";
import Ratings from "@/components/Ratings";

export default function Page({ game, error }) {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  //   {router.query.id}

  useEffect(() => {
    if (status !== "authenticated") {
      router.push("/login");
    }
  }, [status]);

  useEffect(() => {
    if (game) {
      setLoading(false);
    }
  }, [game]);

  if (error == 404) {
    return <Error statusCode={404} />;
  }

  return loading ? (
    <>
      <div role="status" className="animate-pulse w-full">
        <div className="flex flex-col max-sm:justify-center max-sm:items-center px-32 my-8 max-sm:px-0">
          <div className="h-10 w-2/5  rounded bg-gray-700 mb-4 max-sm:w-full"></div>
          <div className="h-10 w-1/5  rounded bg-gray-700 mb-4 max-sm:w-2/4"></div>
        </div>
        <div className="flex items-start gap-16 px-32 max-sm:px-0 max-sm:flex-col-reverse">
          <div className="h-[400px] w-3/4  rounded bg-gray-700 mb-4 max-sm:w-full"></div>
          <div className="flex flex-col">
            <div className=" h-[250px] w-[350px]  rounded bg-gray-700 mb-4"></div>
            <div className=" h-6 w-2/5 rounded bg-gray-700 mb-4"></div>
            <div className=" h-14 rounded bg-gray-700 mb-4"></div>
            <div className=" h-14 rounded bg-gray-700 mb-4"></div>
            <div className=" h-14 rounded bg-gray-700 mb-4"></div>
          </div>
        </div>
        <span class="sr-only">Loading...</span>
      </div>
    </>
  ) : (
    <div>
      <Game game={game} />
      <AboutTheGame game={game} />
      <Ratings game={game} />
    </div>
  );
}

export async function getServerSideProps(context) {
  let error = null;

  await connectToDB();

  let game = await Product.findById(context.query.id);
  if (!game) {
    return {
      props: {
        error: 404,
      },
    };
  }
  return {
    props: {
      error: error,
      game: JSON.parse(JSON.stringify(game)),
    },
  };
}
