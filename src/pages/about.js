import React from "react";
import Link from "next/link";

const about = () => {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Welcome to GameHub
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    GameHub is a premier gaming platform that offers a wide
                    range of games, features, and services to enhance your
                    gaming experience.
                  </p>
                </div>
              </div>
              <img
                src="https://images.unsplash.com/photo-1719145177916-1b19e965af72?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNnx8fGVufDB8fHx8fA%3D%3D"
                width="550"
                height="550"
                alt="GameHub"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last lg:aspect-square"
              />
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">
                  Our Team
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Meet the Minds Behind GameHub
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Our team of passionate gamers and experienced developers are
                  dedicated to creating the ultimate gaming platform.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
              <div className="flex flex-col items-center space-y-2">
                <img
                  src="https://images.unsplash.com/photo-1488371934083-edb7857977df?q=80&w=1929&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  width="120"
                  height="120"
                  alt="Team Member"
                  className="h-40 w-40 rounded-full object-cover"
                />
                <div className="text-center">
                  <h3 className="text-xl font-bold">Mirza Shah Hussain</h3>
                  <p className="text-muted-foreground">Web,Game and Software Developer</p>
                </div>
              </div>
              <div className="flex flex-col items-center space-y-2">
                <img
                  src="https://images.unsplash.com/photo-1488371934083-edb7857977df?q=80&w=1929&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  width="120"
                  height="120"
                  alt="Team Member"
                  className="h-40 w-40 rounded-full object-cover"
                />
                <div className="text-center">
                  <h3 className="text-xl font-bold">Md Runna Sheikh</h3>
                  <p className="text-muted-foreground">Web,App and Software Developer</p>
                </div>
              </div>
              <div className="flex flex-col items-center space-y-2">
                <img
                  src="https://images.unsplash.com/photo-1488371934083-edb7857977df?q=80&w=1929&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  width="120"
                  height="120"
                  alt="Team Member"
                  className="h-40 w-40 rounded-full object-cover"
                />
                <div className="text-center">
                  <h3 className="text-xl font-bold">Md Shahnawaz Sheikh</h3>
                  <p className="text-muted-foreground">Web,App and Software Developer</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default about;
