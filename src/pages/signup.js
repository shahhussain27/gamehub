import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import googleIcon from "../../public/google.svg";
import logo from "../../public/gamehub.png";
import Image from "next/image";
import { FaRegEyeSlash } from "react-icons/fa";
import { signIn, useSession } from "next-auth/react";

const signup = () => {
  const [showPass, setShowPass] = useState(false);
  const togglePass = () => setShowPass((prevState) => !prevState);
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "authenticated") {
      router.push("/");
    }
  }, [status]);

  return (
    <div className="flex min-h-[100dvh] items-center justify-center bg-background px-4 py-12 sm:px-6 lg:px-8">
      <div className="w-full max-w-md space-y-8">
        <div>
          <div className="flex justify-center">
            <Image
              src={logo}
              alt="gamehub"
              width={100}
              height={100}
              className="h-12 w-12 text-primary"
            />
          </div>
          <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-foreground">
            Sign up to your account
          </h2>
          <p className="mt-2 text-center text-sm text-muted-foreground">
            Or{" "}
            <Link
              href={"/login"}
              className="font-medium text-primary hover:text-primary/80"
              prefetch={false}
            >
              already have a account?
            </Link>
          </p>
        </div>
        <div className="mt-8 space-y-6">
          <button
            onClick={() => signIn("google")}
            className="w-full flex justify-center rounded-md border border-transparent bg-gray-100 py-2 px-4 text-sm font-medium text-foreground shadow-sm hover:bg-gray-50"
          >
            <Image
              src={googleIcon}
              alt="google"
              width={100}
              height={100}
              className="mr-2 h-5 w-5"
            />
            <span>Sign in with Google</span>
          </button>
          <div className="space-y-4">
            <div>
              <label htmlFor="name">Name</label>
              <input
                id="name"
                type="text"
                placeholder="name"
                required
                className="border border-gray-300 rounded-md w-full py-1.5 px-2"
              />
            </div>
            <div>
              <label htmlFor="email">Email address</label>
              <input
                id="email"
                type="email"
                placeholder="name@example.com"
                required
                className="border border-gray-300 rounded-md w-full py-1.5 px-2"
              />
            </div>
            <div className="relative space-y-2">
              <div className="flex items-center justify-between">
                <label htmlFor="password">Password</label>
              </div>
              <input
                id="password"
                type={`${showPass ? "text" : "password"}`}
                placeholder="Password"
                required
                className="border border-gray-300 rounded-md w-full py-1.5 px-2"
              />
              <button
                variant="ghost"
                size="icon"
                className="absolute bottom-1 right-1 h-7 w-7"
                onClick={togglePass}
              >
                {showPass ? <EyeIcon className="h-4 w-4" /> : <FaRegEyeSlash />}
                <span className="sr-only">Toggle password visibility</span>
              </button>
            </div>
            <div className="flex items-center">
              <input type="checkbox" id="remember" />
              <label htmlFor="remember" className="ml-2 text-sm font-medium">
                Remember me
              </label>
            </div>
            <div className="flex items-center space-x-2 text-sm font-medium">
              <input type="checkbox" id="terms" />
              <label htmlFor="terms">Accept terms and conditions</label>
            </div>
            <div className="text-sm font-medium">
              By signing in, you agree to our{" "}
              <Link href={"/privacy"} className="underline" prefetch={false}>
                Privacy Policy
              </Link>
              .
            </div>
            <button className="w-full bg-slate-950 hover:bg-slate-900 text-white py-2 rounded-full">
              Sign Up
            </button>
            <Link
              href={"/"}
              className="flex items-center justify-center gap-2 w-full bg-gray-100 hover:bg-gray-200 text-black py-2 rounded-full"
            >
              <ArrowLeftIcon /> <span>Back</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

function EyeIcon(props) {
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
      <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );
}

function ArrowLeftIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m12 19-7-7 7-7" />
      <path d="M19 12H5" />
    </svg>
  );
}
export default signup;
