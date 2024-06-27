import { useSession } from "next-auth/react";
import { useEffect } from "react";
import { useRouter } from "next/router";
import SideBar from "@/components/SideBar";
import Main from "@/components/Main";
import React from "react";

const home = () => {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/login");
    }
  }, [status]);

  return (
    <div className="flex max-sm:justify-center">
      <SideBar />

      <div className="flex flex-col gap-4 py-4 w-full">
        <Main />
      </div>
    </div>
  );
};

export default home;
