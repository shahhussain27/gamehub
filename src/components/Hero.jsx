import React from "react";
import Link from "next/link";
import { useSession } from "next-auth/react";

const Hero = () => {
  const { data: session } = useSession();

  return (
    <section
      className="w-full relative h-[80vh] flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage: `url('https://unity.com/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2Ffuvbjjlp%2Fproduction%2F21719743a156dfdd4165f16e5db1447901ff3e6a-1920x1080.jpg&w=1920&q=100')`,
      }}
    >
      <div className="container px-4 md:px-6 text-center z-10">
        <div className="max-w-3xl mx-auto space-y-6">
          <h1 className="text-4xl text-white font-bold tracking-tight sm:text-5xl md:text-6xl">
            GameHub Your Ultimate Destination for All Things Gaming{" "}
          </h1>
          <p className="text-lg text-gray-200 text-muted-foreground md:text-xl">
            Stay Ahead with the Latest News, Reviews, and Community Updates
          </p>
          {!session && (
            <div className="flex justify-center items-start  gap-4">
              <button>
                <Link
                  href={"/login"}
                  className="inline-flex h-10 items-center justify-center rounded-full bg-slate-100 hover:bg-slate-200 px-8 text-sm font-medium text-black shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                  prefetch={false}
                >
                  Login
                </Link>
              </button>
              <button>
                <Link
                  href={"/signup"}
                  className="inline-flex h-10 items-center justify-center rounded-full bg-slate-950 hover:bg-slate-900 px-8 text-sm font-medium text-white shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                  prefetch={false}
                >
                  Sign Up
                </Link>
              </button>
            </div>
          )}
          {session && (
            <div className="flex justify-center items-start  gap-4">
              {session.user?.email === "gamerxpro786@gmail.com" && (
                <button>
                  <Link
                    href={"/dashboard"}
                    className="inline-flex uppercase h-10 items-center justify-center rounded-full bg-slate-100 hover:bg-slate-200 px-8 text-sm font-medium text-black shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                    prefetch={false}
                  >
                    Dashboard
                  </Link>
                </button>
              )}
              <button>
                <Link
                  href={"/home"}
                  className="inline-flex uppercase h-10 items-center justify-center rounded-full bg-slate-950 hover:bg-slate-900 px-8 text-sm font-medium text-white shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                  prefetch={false}
                >
                  Download
                </Link>
              </button>
            </div>
          )}
        </div>
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-90 z-0" />
    </section>
  );
};

export default Hero;
