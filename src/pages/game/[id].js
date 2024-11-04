import Game from "@/components/Game";
import { useRouter } from "next/router";
import { connectToDB } from "../../../lib/mongodb/mongoose";
import Product from "../../../lib/models/Product";
import Error from "next/error";

export default function Page({ game, error }) {
  const router = useRouter();
  //   {router.query.id}

  if (error == 404) {
    return <Error statusCode={404} />;
  }
  return (
    <div>
      <Game game={game} />
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
