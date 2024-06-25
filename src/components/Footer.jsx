import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-[#1b1b1b] text-white py-8 sm:py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        <div className="flex flex-col gap-4">
          <Link href="#" className="flex items-center gap-2" prefetch={false}>
            <GamepadIcon className="w-8 h-8" />
            <span className="text-2xl font-bold">GameHub</span>
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
              <Link href="#" className="hover:text-gray-300" prefetch={false}>
                Home
              </Link>
              <Link href="#" className="hover:text-gray-300" prefetch={false}>
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
            <Link href="#" className="hover:text-gray-300" prefetch={false}>
              <TwitterIcon className="w-6 h-6" />
            </Link>
            <Link href="#" className="hover:text-gray-300" prefetch={false}>
              <FacebookIcon className="w-6 h-6" />
            </Link>
            <Link href="#" className="hover:text-gray-300" prefetch={false}>
              <InstagramIcon className="w-6 h-6" />
            </Link>
            <Link href="#" className="hover:text-gray-300" prefetch={false}>
              <YoutubeIcon className="w-6 h-6" />
            </Link>
          </div>
        </div>
        <div className="grid gap-2">
          <h3 className="text-lg font-semibold">Contact</h3>
          <div className="grid gap-1 text-sm">
            <div>
              <MailIcon className="w-4 h-4 inline-block mr-2" />
              <span>support@gamehub.com</span>
            </div>
            <div>
              <PhoneIcon className="w-4 h-4 inline-block mr-2" />
              <span>+91 7827917162</span>
            </div>
            <div>
              <MapPinIcon className="w-4 h-4 inline-block mr-2" />
              <span>Laxmi Nagar, Delhi India</span>
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

function FacebookIcon(props) {
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
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

function GamepadIcon(props) {
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
      <line x1="6" x2="10" y1="12" y2="12" />
      <line x1="8" x2="8" y1="10" y2="14" />
      <line x1="15" x2="15.01" y1="13" y2="13" />
      <line x1="18" x2="18.01" y1="11" y2="11" />
      <rect width="20" height="12" x="2" y="6" rx="2" />
    </svg>
  );
}

function InstagramIcon(props) {
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
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

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

function TwitterIcon(props) {
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
      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
    </svg>
  );
}

function YoutubeIcon(props) {
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
      <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
      <path d="m10 15 5-3-5-3z" />
    </svg>
  );
}

export default Footer;
