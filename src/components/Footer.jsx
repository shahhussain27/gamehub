import React from "react";
import Link from "next/link";
import logo from "../../public/gamehub.png";
import Image from "next/image";
import { FaGithub, FaLinkedin, FaInstagram, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className=" text-white  py-8 sm:py-12 ">
      <div className=" mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        <div className="flex flex-col gap-4">
          <Link href="/" className="flex items-center gap-6" prefetch={false}>
            <Image
              src={logo}
              alt="gamehub"
              height={50}
              width={50}
              className=""
            />
            <span className="text-2xl font-bold">STORE</span>
          </Link>
          <p className="text-sm text-gray-400">
            Experience the ultimate gaming destination, where passion and
            innovation collide.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="grid gap-2">
            <h3 className="text-lg font-semibold">Pages</h3>
            <nav className="grid gap-1">
              <Link href={"/"} className="hover:text-gray-300" prefetch={false}>
                Home
              </Link>
              <Link
                href={"/home"}
                className="hover:text-gray-300"
                prefetch={false}
              >
                Games
              </Link>
              <Link href="#" className="hover:text-gray-300" prefetch={false}>
                Leaderboard
              </Link>
              <Link href="#" className="hover:text-gray-300" prefetch={false}>
                Contact
              </Link>
            </nav>
          </div>
          <div className="grid gap-2">
            <h3 className="text-lg font-semibold">Resources</h3>
            <nav className="grid gap-1">
              <Link href="#" className="hover:text-gray-300" prefetch={false}>
                Blog
              </Link>
              <Link href="#" className="hover:text-gray-300" prefetch={false}>
                FAQ
              </Link>
              <Link href="#" className="hover:text-gray-300" prefetch={false}>
                Support
              </Link>
              <Link href="#" className="hover:text-gray-300" prefetch={false}>
                Terms of Service
              </Link>
            </nav>
          </div>
        </div>
        <div className="grid gap-2">
          <h3 className="text-lg font-semibold">Follow Us</h3>
          <div className="flex gap-4">
            <Link
              href="https://github.com/shahhussain27"
              className="hover:text-gray-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="w-6 h-6" />
            </Link>
            <Link
              href="https://linkedin.com/in/mirza-shah-hussain-a18269247"
              className="hover:text-gray-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="w-6 h-6" />
            </Link>
            <Link
              href="https://www.instagram.com/shah_hussain27/"
              className="hover:text-gray-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram className="w-6 h-6" />
            </Link>
            <Link
              href="https://api.whatsapp.com/send/?phone=7827917162&"
              target="_blank"
              className="hover:text-gray-300"
              prefetch={false}
            >
              <FaWhatsapp className="w-6 h-6" />
            </Link>
          </div>
        </div>
        <div className="grid gap-2">
          <h3 className="text-lg font-semibold">Contact</h3>
          <div className="grid gap-1 text-sm">
            <div>
              <MailIcon className="w-4 h-4 inline-block mr-2" />
              <span>mirzashahhussain63@gmail.com</span>
              {/* <span>support@gamehub.com</span> */}
            </div>
            <div>
              <PhoneIcon className="w-4 h-4 inline-block mr-2" />
              <span>+91 7827917162</span>
            </div>
            <div>
              <MapPinIcon className="w-4 h-4 inline-block mr-2" />
              <span>New Delhi, India</span>
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 mt-8 sm:mt-12 text-center text-sm text-gray-400">
        &copy; 2024 GameHub. All rights reserved.
      </div>
    </footer>
  );
};



function MailIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
}

function MapPinIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

function PhoneIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}



export default Footer;
