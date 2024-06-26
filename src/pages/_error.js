import Link from "next/link";

function Error({ statusCode }) {
  return (
    <div className="flex flex-col items-center justify-center min-h-[100dvh] bg-background text-card-foreground">
      <div className="text-center space-y-4">
        {statusCode ? (
          <>
            <h1 className="text-9xl font-bold">{statusCode}</h1>
            <p className="text-xl text-muted-foreground">
              Oops! The page you're looking for could not be found.
            </p>
          </>
        ) : (
          <p className="text-xl text-muted-foreground">
            An error occurred on client
          </p>
        )}

        <Link
          href={"/"}
          className="inline-flex bg-black hover:bg-slate-900 text-white h-10 items-center justify-center rounded-md px-6 text-sm font-medium "
          prefetch={false}
        >
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
