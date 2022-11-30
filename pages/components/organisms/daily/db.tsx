import { Grid } from "@mui/material";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import LipCard from "../../molecules/card/lipCard";
import EyeCard from "../../molecules/card/eyeCard";
import HairCard from "../../molecules/card/hairCard";
import PerfumeCard from "../../molecules/card/perfumeCard";
import SkinCard from "../../molecules/card/skinCard";
import { Box } from "@mui/system";
import { ChartCircle } from "../chartCircle";
import { ChartLine } from "../chartLine";

const Db = () => {
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));
  return (
    <div style={{ textAlign: "center", margin: "auto", marginTop: "30px" }}>
      <Grid container spacing={2}>
        <Grid item xs={2.4}>
          <Item style={{ boxShadow: "none" }}>
            <LipCard
              textAlign={"center"}
              marginTop={"-30px"}
              fontWeight={"bold"}
              onClick={function (
                event: React.MouseEvent<HTMLButtonElement, MouseEvent>
              ): void {
                throw new Error("Function not implemented.");
              }}
            />
          </Item>
        </Grid>
        <Grid item xs={2.4}>
          <Item style={{ boxShadow: "none" }}>
            <EyeCard
              textAlign={"center"}
              marginTop={"-30px"}
              fontWeight={"bold"}
              onClick={function (
                event: React.MouseEvent<HTMLButtonElement, MouseEvent>
              ): void {
                throw new Error("Function not implemented.");
              }}
            />
          </Item>
        </Grid>
        <Grid item xs={2.4}>
          <Item style={{ boxShadow: "none" }}>
            <HairCard
              textAlign={"center"}
              marginTop={"-30px"}
              fontWeight={"bold"}
              onClick={function (
                event: React.MouseEvent<HTMLButtonElement, MouseEvent>
              ): void {
                throw new Error("Function not implemented.");
              }}
            />
          </Item>
        </Grid>
        <Grid item xs={2.4}>
          <Item style={{ boxShadow: "none" }}>
            <PerfumeCard
              textAlign={"center"}
              marginTop={"-30px"}
              fontWeight={"bold"}
              onClick={function (
                event: React.MouseEvent<HTMLButtonElement, MouseEvent>
              ): void {
                throw new Error("Function not implemented.");
              }}
            />
          </Item>
        </Grid>
        <Grid item xs={2.4}>
          <Item style={{ boxShadow: "none" }}>
            <SkinCard
              textAlign={"center"}
              marginTop={"-30px"}
              fontWeight={"bold"}
              onClick={function (
                event: React.MouseEvent<HTMLButtonElement, MouseEvent>
              ): void {
                throw new Error("Function not implemented.");
              }}
            />
          </Item>
        </Grid>
      </Grid>
      <div
        style={{
          display: "flex",
          width: "100%",
          maxWidth: "100vw",
          marginTop: "50px",
        }}
      >
        <Box
          sx={{
            width: " 50%",
            height: 400,
            backgroundColor: "white",
          }}
        >
          <ChartCircle />
        </Box>
        <Box
          sx={{
            width: " 50%",
            height: 400,
            backgroundColor: "white",
          }}
        >
          <ChartLine />
        </Box>
      </div>
    </div>
  );
};

export default Db;
