import React, { useEffect } from "react";
import { signIn, useSession } from "next-auth/react";

const signin = () => {
  const { data: session, status } = useSession();

  const handledeeplink = () => {
    signIn("google");
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
    <div>
      {" "}
      <h1>Sign In</h1>
      <button onClick={handledeeplink}>Sign in with Google</button>
    </div>
  );
};

export default signin;
