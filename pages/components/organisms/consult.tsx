import type { NextPage } from "next";
import Image from "next/image";
import { Container } from "@mui/system";
import { Typography } from "@mui/material";

import stylesButton from "../../../styles/layouts/Button.module.css";

const Consult: NextPage = () => {
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
          メンズメイク始めて見たいけど、何から始めればわからないという方が相談できる場所を皆さんで作っていきましょう
        </Typography>
        <div className={stylesButton.button27}>
          <a href="">使い方を見てみる！</a>
        </div>
      </div>
      <div style={{ width: "50%", marginTop: "-60px" }}>
        <Image
          src="/img/consult/consult.jpeg"
          width={400}
          height={400}
          alt="calendar"
        />
      </div>
    </Container>
  );
};

export default Consult;
