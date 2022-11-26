import type { NextPage } from "next";
import Image from "next/image";
import { Container } from "@mui/system";
import { Typography } from "@mui/material";

import stylesButton from "../../../styles/layouts/Button.module.css";

const Daily: NextPage = () => {
  return (
    <Container
      maxWidth="xl"
      style={{
        textAlign: "center",
        backgroundColor: "white",
        marginTop: "30px",
        width: "100%",
        display: "flex",
      }}
    >
      <div style={{ width: "50%", marginTop: "80px" }}>
        <Typography variant="h6" style={{ fontWeight: "bold" }}>
          あなたが日々使ったメイク道具や、その日の気分を登録することであなただけのデータベースが出来上がります
        </Typography>
        <div className={stylesButton.button27}>
          <a href="">使い方を見てみる！</a>
        </div>
      </div>
      <div style={{ width: "50%", marginTop: "-60px" }}>
        <Image
          src="/img/daily/calendar.jpeg"
          width={400}
          height={400}
          alt="calendar"
        />
      </div>
    </Container>
  );
};

export default Daily;
