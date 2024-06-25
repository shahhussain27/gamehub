import Image from "next/image";
import React from "react";
import Link from "next/link";
import logo from "../../public/gamehub.png";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";
import { RxCross1 } from "react-icons/rx";
import { HiBars4 } from "react-icons/hi2";

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <>
      <nav className="flex justify-between items-center bg-black text-gray-200 h-[40px] px-36 max-sm:px-4">
        <ul className="flex items-center  gap-6 text-xs ">
          <Link href={"/"}>
            <Image
              src={logo}
              alt="game-hub"
              width={30}
              height={30}
              className=""
            />
          </Link>
          <li className="cursor-pointer hover:text-white max-sm:hidden">
            <Link href={"/home"}>Games</Link>
          </li>
          <li className="cursor-pointer hover:text-white max-sm:hidden">
            Community{" "}
          </li>
          <li className="cursor-pointer hover:text-white max-sm:hidden">
            News{" "}
          </li>
          <li className="cursor-pointer hover:text-white max-sm:hidden">
            <Link href={"/about"}>About</Link>
          </li>
          <li className="cursor-pointer hover:text-white max-sm:hidden">
            Contact
          </li>
        </ul>
        <button>
          <Link
            href={"/login"}
            className="max-sm:hidden inline-flex h-7 items-center justify-center rounded-full bg-slate-100 hover:bg-slate-200 px-5 text-xs font-medium text-black shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
            prefetch={false}
          >
            Login
          </Link>
        </button>
        <button onClick={toggleDrawer} className="hidden max-sm:block  text-xl">
          <HiBars4 />
        </button>
      </nav>
      <Drawer
        open={isOpen}
        onClose={toggleDrawer}
        direction="right"
        className="custom-drawer"
      >
        <div className="bg-black text-white h-screen p-4 ">
          <div className="flex justify-end">
            <button
              onClick={toggleDrawer}
              className="hover:bg-gray-800 p-2 rounded-md"
            >
              <RxCross1 />
            </button>
          </div>
          <ul className="flex flex-col items-center justify-center gap-6 text-xs ">
            <Link href={"/"} onClick={toggleDrawer}>
              <Image
                src={logo}
                alt="game-hub"
                width={30}
                height={30}
                className=""
              />
            </Link>
            <li className="cursor-pointer hover:text-white ">
              {" "}
              <Link href={"/home"} onClick={toggleDrawer}>
                Games
              </Link>
            </li>
            <li className="cursor-pointer hover:text-white ">Community</li>
            <li className="cursor-pointer hover:text-white ">News </li>
            <li className="cursor-pointer hover:text-white ">
              {" "}
              <Link href={"/about"} onClick={toggleDrawer}>
                About
              </Link>
            </li>
            <li className="cursor-pointer hover:text-white">Contact</li>
            <button>
              <Link
                href={"/login"}
                className="inline-flex h-7 items-center justify-center rounded-full bg-slate-100 hover:bg-slate-200 px-12 text-xs font-medium text-black shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                prefetch={false}
                onClick={toggleDrawer}
              >
                Login
              </Link>
            </button>
          </ul>
        </div>
      </Drawer>
    </>
  );
};

export default Navbar;
