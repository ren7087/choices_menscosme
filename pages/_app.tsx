// import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ApolloProvider } from "@apollo/client";
import apolloClient from "../lib/apollo";
import { SessionProvider } from "next-auth/react";
import { AppBar, Box, IconButton, Toolbar, Typography } from "@mui/material";
import Link from "next/link";
import StyledButton from "./components/atoms/styledButton";
import { useRouter } from "next/router";

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  const router = useRouter();
  return (
    <SessionProvider session={session}>
      <ApolloProvider client={apolloClient}>
        <div>
          <Box sx={{ flexGrow: 1 }}>
            <AppBar
              position="static"
              style={{ backgroundColor: "white", boxShadow: "none" }}
            >
              <Toolbar>
                <Typography
                  variant="h4"
                  noWrap
                  component="div"
                  sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
                  style={{ fontWeight: "bold", color: "blue" }}
                >
                  <Link
                    href="/"
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    CHOICE
                  </Link>
                </Typography>
                <Typography
                  variant="h6"
                  style={{
                    fontWeight: "bold",
                    color: "blue",
                    marginRight: "3%",
                  }}
                >
                  <Link
                    href="/daily"
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    Daily
                  </Link>
                </Typography>
                <Typography
                  variant="h6"
                  style={{
                    fontWeight: "bold",
                    color: "blue",
                    marginRight: "3%",
                  }}
                >
                  <Link
                    href="/"
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    Consult
                  </Link>
                </Typography>
                <StyledButton
                  label={"????????????"}
                  backgroundColor={"#bc5c46"}
                  color={"white"}
                  size={"md"}
                  borderRadius={"10px"}
                  outline={"none"}
                  border={"none"}
                  height={"40px"}
                  onClick={() => router.push("/auth/signin")}
                />
                <span style={{ marginLeft: "3%" }} />
                <StyledButton
                  label={"???????????????"}
                  backgroundColor={"#ECA7B1"}
                  color={"white"}
                  size={"md"}
                  borderRadius={"10px"}
                  outline={"none"}
                  border={"none"}
                  height={"40px"}
                  onClick={() => router.push("/auth/signin")}
                />
              </Toolbar>
            </AppBar>
          </Box>
          <Component {...pageProps} />
        </div>
      </ApolloProvider>
    </SessionProvider>
  );
}

export default MyApp;
