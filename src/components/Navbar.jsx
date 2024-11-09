import Image from "next/image";
import React from "react";
import Link from "next/link";
import logo from "../../public/gamehub.png";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";
import { RxCross1 } from "react-icons/rx";
import { HiBars4 } from "react-icons/hi2";
import { FaRegUserCircle } from "react-icons/fa";
import { useSession, signOut } from "next-auth/react";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from "@nextui-org/dropdown";
import { useSelector } from "react-redux";

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const { data: session } = useSession();

  const wishlist = useSelector((state) => state.wishlist);
  const cart = useSelector((state) => state.cart);

  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <>
      <nav className="sticky top-0 z-50 flex justify-between items-center w-full bg-gradient-to-r from-[#020D1A]  to-[#05162a] text-gray-200 h-[40px] px-36 py-8 max-sm:px-4 mb-6">
        <ul className="flex items-center  gap-6 text-sm text-semibold ">
          <Link href={"/"}>
            <Image
              src={logo}
              alt="game-hub"
              width={50}
              height={50}
              className=""
            />
          </Link>
          <li className="cursor-pointer hover:text-white max-sm:hidden">
            <Link href={"/"} className="font-bold text-2xl">
              STORE
            </Link>
          </li>
          <li className="cursor-pointer hover:text-white max-sm:hidden">
            <Link href={"/community"}>Community</Link>{" "}
          </li>
          <li className="cursor-pointer hover:text-white max-sm:hidden">
            <Link href={"https://devgamehub.vercel.app/"} target="_blank">
              Publisher
            </Link>{" "}
          </li>
        </ul>
        {!session && (
          <button>
            <Link
              href={"/login"}
              className="max-sm:hidden inline-flex h-7 items-center justify-center rounded-full bg-slate-100 hover:bg-slate-200 px-5 text-xs font-medium text-black shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
              prefetch={false}
            >
              Login
            </Link>
          </button>
        )}
        {/* desktop view */}
        {session && (
          <Dropdown>
            <DropdownTrigger>
              <div className="flex items-center gap-2 max-sm:hidden">
                <button className="text-xl">
                  <FaRegUserCircle />
                </button>
                <h2 className="">{session.user?.name}</h2>
                <button
                  className="disabled:opacity-80 disabled:cursor-not-allowed btn-primary py-1.5 px-3 text-2xl ml-4"
                  disabled={true}
                >
                  Coming Soon
                </button>
              </div>
            </DropdownTrigger>
            <DropdownMenu
              aria-label="Static Actions"
              className="bg-gradient-to-r from-slate-800/80 to-gray-800/95 backdrop-blur rounded-lg py-2 px-2 text-white shadow-lg"
            >
              <DropdownItem
                key="cart"
                className="rounded-lg pr-32 hover:bg-slate-600"
              >
                Account
              </DropdownItem>
              <DropdownItem
                key="wishlist"
                className="rounded-lg pr-32 hover:bg-slate-600"
              >
                <Link href={"/wishlist"}>
                  Wishlist
                  {wishlist.length <= 0 ? (
                    ""
                  ) : (
                    <span className="text-xs font-semibold text-black bg-slate-200 py-0 px-3 mx-2 rounded-full">
                      {wishlist.length}
                    </span>
                  )}
                </Link>
              </DropdownItem>
              <DropdownItem
                key="account"
                className="rounded-lg pr-32 hover:bg-slate-600"
              >
                <Link href={"/cart"}>
                  Cart
                  {cart.length <= 0 ? (
                    ""
                  ) : (
                    <span className="text-xs font-semibold text-black bg-slate-200 py-0 px-3 mx-2 rounded-full">
                      {cart.length}
                    </span>
                  )}
                </Link>
              </DropdownItem>
              <DropdownItem
                key="logout"
                onClick={() => signOut({ callbackUrl: "/login" })}
                className="rounded-lg pr-32 hover:bg-slate-600 "
                prefetch={false}
              >
                Sign Out
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
        )}

        <button onClick={toggleDrawer} className="hidden max-sm:block text-2xl">
          <HiBars4 />
        </button>
      </nav>
      {/* mobile view */}
      <Drawer
        open={isOpen}
        onClose={toggleDrawer}
        direction="right"
        className="custom-drawer"
      >
        <div className="flex flex-col gap-6 bg-black text-white h-screen p-4">
          <div className="flex justify-between px-3">
            <Link href={"/"} onClick={toggleDrawer}>
              <Image
                src={logo}
                alt="game-hub"
                width={30}
                height={30}
                className=""
              />
            </Link>
            <button
              onClick={toggleDrawer}
              className="hover:bg-gray-800 p-2 rounded-md"
            >
              <RxCross1 />
            </button>
          </div>
          <ul className="flex flex-col items-start justify-center gap-1 text-md px-3">
            <li className="w-full cursor-pointer hover:text-white border-b py-3 border-slate-800">
              {" "}
              <Link href={"/home"} onClick={toggleDrawer}>
                Games
              </Link>
            </li>
            <li className="w-full cursor-pointer hover:text-white border-b py-3 border-slate-800">
              <Link href={"/community"}>Community</Link>
            </li>
            <li className="w-full cursor-pointer hover:text-white border-b py-3 border-slate-800">
              <Link href={"https://devgamehub.vercel.app/"} target="_blank">
                Publisher
              </Link>
            </li>

            {!session && (
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
            )}
            {session && (
              <Dropdown>
                <DropdownTrigger>
                  <div className="flex items-center gap-2 my-4">
                    <button className=" text-white text-xl">
                      <FaRegUserCircle />
                    </button>
                    <h2 className="text-md">{session.user?.name}</h2>
                  </div>
                </DropdownTrigger>
                <DropdownMenu
                  aria-label="Static Actions"
                  className="bg-black rounded-md w-full py-1 px-2 text-white"
                >
                  <DropdownItem key="email" className="text-gray-300">
                    {session.user?.email}
                  </DropdownItem>
                  <DropdownItem key="logout" className="text-danger">
                    <button
                      onClick={() => {
                        signOut({ callbackUrl: "/login" }), toggleDrawer;
                      }}
                      className=" inline-flex  w-full h-7 items-center justify-center rounded-full bg-slate-100 hover:bg-slate-200 px-5 text-xs font-medium text-black shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                      prefetch={false}
                    >
                      Logout
                    </button>
                  </DropdownItem>
                </DropdownMenu>
              </Dropdown>
            )}
          </ul>
        </div>
      </Drawer>
    </>
  );
};

export default Navbar;
