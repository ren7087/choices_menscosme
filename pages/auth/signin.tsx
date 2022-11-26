import type { NextPage } from "next";
import { useSession, signIn, signOut } from "next-auth/react";
import Image from "next/image";
import GoogleIcon from "@mui/icons-material/Google";

const Signin: NextPage = () => {
  const { data: session } = useSession();

  if (session && session.user) {
    return (
      <>
        Signed in as {session.user.email} <br />
        <button onClick={() => signOut()}>Sign out</button>
      </>
    );
  }
  return (
    <div style={{ display: "flex" }}>
      <div style={{ width: "50%", textAlign: "center" }}>
        <p>ログイン</p>
        <button onClick={() => signIn()}>
          {/* <GoogleIcon /> */}
          Googleアカウントでログイン
        </button>
      </div>
      <div style={{ width: "50%" }}>
        <p>hello</p>
      </div>
    </div>
  );
};

export default Signin;
