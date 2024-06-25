import React from "react";
import Link from "next/link";
import Image from "next/image";
import tech from "../../public/tech.webp";

const Tech = () => {
  return (
    <main className="flex-1">
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                  Unleash Your Gaming Potential with GameHub{" "}
                </h1>
                <p className="max-w-[700px] text-muted-foreground md:text-lg">
                  GameHub, created by Mirza Shah Hussain, is a revolutionary
                  platform that allows you to download amazing mobile and PC
                  games for free. Whether you're a developer or a gamer, GameHub
                  is designed to elevate your gaming experience.
                </p>
              </div>
            </div>
            <Image
              src={tech}
              width={550}
              height={550}
              alt="Hero"
              className="mx-auto aspect-video overflow-hidden rounded-xl object-bottom sm:w-full lg:order-last lg:aspect-square"
            />
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                Cutting-Edge Game Technologies
              </h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                GameHub is powered by the latest game development technologies,
                ensuring your games are built with performance, scalability, and
                visual fidelity in mind.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
            <div className="flex flex-col justify-center space-y-4">
              <div className="grid gap-6">
                <div className="grid grid-cols-[auto_1fr] items-center gap-4">
                  <div className="rounded-full bg-primary p-3 text-primary-foreground"></div>
                  <div>
                    <h3 className="text-xl font-bold">Unity Game Engine</h3>
                    <p className="text-muted-foreground">
                      Leverage the power of the industry-leading Unity game
                      engine to create stunning 3D and 2D games.
                    </p>
                  </div>
                </div>
                <div className="grid grid-cols-[auto_1fr] items-center gap-4">
                  <div className="rounded-full bg-primary p-3 text-primary-foreground">
                    {/* <CodeIcon className="h-6 w-6" /> */}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">C# Programming</h3>
                    <p className="text-muted-foreground">
                      Leverage the power of C#, a modern and versatile
                      programming language, to build robust game logic.
                    </p>
                  </div>
                </div>
                <div className="grid grid-cols-[auto_1fr] items-center gap-4">
                  <div className="rounded-full bg-primary p-3 text-primary-foreground">
                    {/* <ComputerIcon className="h-6 w-6" /> */}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">Visual Studio</h3>
                    <p className="text-muted-foreground">
                      Utilize the powerful IDE of Visual Studio to streamline
                      your game development workflow.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <Image
              src={tech}
              width={550}
              height={310}
              alt="Image"
              className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
            />
          </div>
        </div>
      </section>
    </main>
  );
};

export default Tech;
