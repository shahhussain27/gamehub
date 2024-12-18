import React, { useState, useEffect } from "react";
import Link from "next/link";
import googleIcon from "../../public/google.svg";
import logo from "../../public/gamehub.png";
import Image from "next/image";
import { FaRegEyeSlash } from "react-icons/fa";
import { signIn, useSession } from "next-auth/react";

const signin = () => {
  const [showPass, setShowPass] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const togglePass = () => setShowPass((prevState) => !prevState);
  const { data: session, status } = useSession();

  const handleSubmit = async (e) => {
    e.preventDefault();
    signIn("credentials", {
      email,
      password,
    });
  };

  useEffect(() => {
    if (status === "authenticated") {
      const email = session.user?.email;
      const username = session.user?.name;
      window.location.href = `com.gamehub-store://${email}?username=${encodeURIComponent(
        username
      )}`;
    }
  }, [status]);

  return (
    <div className="flex min-h-[100dvh] items-center justify-center bg-background px-4 py-12 sm:px-6 lg:px-8">
      <div className="w-full max-w-md space-y-8 text-white">
        <div>
          <div className="flex justify-center">
            <Image
              src={logo}
              alt="gamehub"
              width={80}
              height={80}
              className=""
            />
          </div>
          <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-foreground">
            Sign in to your account
          </h2>
          <p className="mt-2 text-center text-sm text-muted-foreground">
            Or{" "}
            <Link
              href={"/signup"}
              className="font-medium text-primary hover:text-primary/80"
              prefetch={false}
            >
              register for a new account
            </Link>
          </p>
        </div>
        <div className="mt-8 space-y-6">
          <button
            onClick={() => signIn("google")}
            className="w-full flex justify-center rounded-md border border-transparent text-black bg-gray-100 py-2 px-4 text-sm font-medium text-foreground shadow-sm hover:bg-gray-50"
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
              <label htmlFor="email">Email address</label>
              <input
                id="email"
                type="email"
                placeholder="name@example.com"
                required
                className="text-black border border-gray-300 rounded-md w-full py-1.5 px-2"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="relative space-y-2">
              <div className="flex items-center justify-between">
                <label htmlFor="password">Password</label>
                <Link href="#" className="text-sm underline" prefetch={false}>
                  Forgot your password?
                </Link>
              </div>
              <input
                id="password"
                type={`${showPass ? "text" : "password"}`}
                placeholder="Password"
                required
                className="text-black border border-gray-300 rounded-md w-full py-1.5 px-2"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
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

            <button
              onClick={handleSubmit}
              className="w-full bg-slate-950 hover:bg-slate-900 text-white py-2 rounded-full"
            >
              Sign in
            </button>
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

export default signin;
