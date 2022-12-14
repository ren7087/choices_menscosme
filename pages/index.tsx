import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";

import styles from "../styles/Home.module.css";
import stylesButton from "../styles/layouts/Button.module.css";
import {
  Box,
  Button,
  CircularProgress,
  Container,
  Typography,
} from "@mui/material";

import { gql, useQuery } from "@apollo/client";

import Category from "./components/organisms/category";
import Daily from "./components/organisms/daily";
import Consult from "./components/organisms/consult";
import { GET_ALL_USERS } from "../queries/queries";

const Home: NextPage = () => {
  const { data, loading, error } = useQuery(GET_ALL_USERS);

  if (loading)
    return (
      <Box sx={{ display: "flex" }}>
        <CircularProgress
          style={{
            textAlign: "center",
            marginTop: "20%",
            marginBottom: "20%",
            marginLeft: "50%",
          }}
        />
      </Box>
    );
  if (error) return <p>エラーが発生しています</p>;

  const { users } = data;

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Container
          maxWidth="xl"
          style={{
            textAlign: "center",
            backgroundColor: "white",
            width: "100%",
            display: "flex",
          }}
        >
          <div style={{ width: "50%" }}>
            <Image
              src="/img/home/head.jpeg"
              width={600}
              height={600}
              alt="head img"
            />
          </div>
          <div style={{ width: "50%" }}>
            <Typography
              variant="h3"
              style={{
                fontWeight: "bold",
                marginBottom: "5%",
                marginTop: "120px",
              }}
            >
              メンズメイク総合サイト
            </Typography>
            <Typography
              variant="h3"
              style={{ fontWeight: "bold", margin: "5%" }}
            >
              「 CHOICE 」
            </Typography>
            <div className={stylesButton.button27}>
              <a href="">メンズメイクってなに？</a>
            </div>
          </div>
        </Container>
        <Container
          maxWidth="xl"
          style={{
            textAlign: "center",
            backgroundColor: "white",
            width: "100%",
          }}
        >
          <div style={{ textAlign: "left", marginLeft: "5%" }}>
            <Typography
              variant="h3"
              style={{
                fontWeight: "bold",
              }}
            >
              Item
            </Typography>
            <Typography
              variant="h6"
              style={{
                fontWeight: "bold",
              }}
            >
              メイク道具について
            </Typography>
          </div>
          <Category />
        </Container>
        <Container
          maxWidth="xl"
          style={{
            textAlign: "center",
            backgroundColor: "white",
            marginTop: "30px",
            width: "100%",
          }}
        >
          <div style={{ textAlign: "left", marginLeft: "5%" }}>
            <Typography
              variant="h3"
              style={{
                fontWeight: "bold",
              }}
            >
              Daily
            </Typography>
            <Typography
              variant="h6"
              style={{
                fontWeight: "bold",
              }}
            >
              あなただけのメンズメイクのデータベース
            </Typography>
          </div>
          <Daily />
        </Container>
        <Container
          maxWidth="xl"
          style={{
            textAlign: "center",
            backgroundColor: "white",
            marginTop: "30px",
            width: "100%",
          }}
        >
          <div style={{ textAlign: "left", marginLeft: "5%" }}>
            <Typography
              variant="h3"
              style={{
                fontWeight: "bold",
              }}
            >
              Consult
            </Typography>
            <Typography
              variant="h6"
              style={{
                fontWeight: "bold",
              }}
            >
              メンズメイクの悩みを解決
            </Typography>
          </div>
          <Consult />
        </Container>
        <Container
          maxWidth="xl"
          style={{
            textAlign: "center",
            backgroundColor: "white",
            width: "100%",
          }}
        >
          <h1>ユーザ情報</h1>
          <Button>hello</Button>
          {users.map((user: { id: number; name: string; email: string }) => (
            <div key={user.id}>Name: {user.name}</div>
          ))}
        </Container>
      </main>
    </div>
  );
};

export default Home;
