import React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import BackupIcon from "@mui/icons-material/Backup";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import LipCard from "../components/molecules/card/lipCard";
import EyeCard from "../components/molecules/card/eyeCard";
import HairCard from "../components/molecules/card/hairCard";
import PerfumeCard from "../components/molecules/card/perfumeCard";
import SkinCard from "../components/molecules/card/skinCard";
import { Grid } from "@mui/material";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import { ChartCircle } from "../components/organisms/chartCircle";
import { ChartLine } from "../components/organisms/chartLine";

const drawerWidth = 200;

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const index = () => {
  return (
    <Box sx={{ display: "flex" }}>
      <Drawer
        variant="permanent"
        // variant="persistent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
      >
        <Toolbar />
        <Box sx={{ overflow: "auto" }}>
          <List>
            {["DB", "Calendar", "Submit"].map((text, index) => (
              <ListItem key={text} disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    {index % 3 === 0 && <InboxIcon />}
                    {index % 3 === 1 && <CalendarMonthIcon />}
                    {index % 3 === 2 && <BackupIcon />}
                  </ListItemIcon>
                  <ListItemText primary={text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
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
    </Box>
  );
};

export default index;
