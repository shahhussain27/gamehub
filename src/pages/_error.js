import Link from "next/link";
import Img404 from "../../public/404.jpg";
import Image from "next/image";

function Error({ statusCode }) {
  return (
    <div className="flex flex-col items-center justify-center min-h-[80dvh] bg-background ">
      <div className="text-center space-y-4">
        {statusCode ? (
          <>
            {statusCode === 404 ? (
              <div className="flex flex-col justify-center items-center gap-4 mb-4">
                <Image
                  src={Img404}
                  alt="404"
                  height={150}
                  width={150}
                  className="invert mix-blend-lighten"
                />
                <h2 className="font-extrabold text-4xl">404  - Page Not Found</h2>
              </div>
            ) : (
              <>
                <h1 className="font-extrabold text-4xl">{statusCode}</h1>
                <p className="text-xl">
                  Oops! The page you're looking for could not be found.
                </p>
              </>
            )}
          </>
        ) : (
          <p className="text-xl">
            An error occurred on client
          </p>
        )}

        <Link href={"/"} className="btn-primary  py-2.5 px-3" prefetch={false}>
          Go back home
        </Link>
      </div>
    </div>
  );
}

Error.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};

export default Error;
