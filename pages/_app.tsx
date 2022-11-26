// import "../styles/globals.css";
import type { AppProps } from "next/app";
import { SessionProvider } from "next-auth/react";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { AppBar, Box, IconButton, Toolbar, Typography } from "@mui/material";
import Link from "next/link";
import StyledButton from "./components/atoms/styledButton";

const client = new ApolloClient({
  uri: "/api/graphql",
  cache: new InMemoryCache(),
});

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
    <SessionProvider session={session}>
      <ApolloProvider client={client}>
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
                    href="/"
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
                  label={"ログイン"}
                  backgroundColor={"#bc5c46"}
                  color={"white"}
                  size={"md"}
                  borderRadius={"10px"}
                  outline={"none"}
                  border={"none"}
                  height={"40px"}
                  onClick={() => console.log("clicked")}
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
