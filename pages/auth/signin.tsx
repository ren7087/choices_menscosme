import type { NextPage } from "next";
import { useSession, signIn, signOut } from "next-auth/react";
import Image from "next/image";
import GoogleIcon from "@mui/icons-material/Google";
import { Button, Typography } from "@mui/material";

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
      <div style={{ width: "50%", textAlign: "center", marginTop: "10%" }}>
        <Typography variant="h4" style={{ fontWeight: "bold", margin: "5%" }}>
          アカウント登録
        </Typography>
        <Button
          variant="contained"
          startIcon={<GoogleIcon />}
          style={{ backgroundColor: "#ECA7B1", color: "white", height: "60px" }}
          onClick={() => signIn()}
        >
          Googleでログイン
        </Button>
        <Typography variant="body2" style={{ margin: "8%" }}>
          Googleアカウントを使いCHOICEにログインできます。
          <br />
          ログインの目的以外に使用されることはありません。
        </Typography>
      </div>
      <div style={{ width: "50%" }}>
        <Image src={"/img/home/head.png"} height="600" width="600" alt="lip" />
      </div>
    </div>
  );
};

export default Signin;
