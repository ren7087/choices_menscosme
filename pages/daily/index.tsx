import React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import LipCard from "../components/molecules/card/lipCard";
import EyeCard from "../components/molecules/card/eyeCard";
import HairCard from "../components/molecules/card/hairCard";
import PerfumeCard from "../components/molecules/card/perfumeCard";
import SkinCard from "../components/molecules/card/skinCard";

const drawerWidth = 200;

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
            {["All mail", "Trash", "Spam"].map((text, index) => (
              <ListItem key={text} disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                  </ListItemIcon>
                  <ListItemText primary={text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
      <Box
        component="main"
        style={{ display: "flex", justifyContent: "space-between" }}
      >
        <Toolbar />
        <LipCard
          marginLeft={"25%"}
          textAlign={"center"}
          marginTop={"-30px"}
          fontWeight={"bold"}
          onClick={function (
            event: React.MouseEvent<HTMLButtonElement, MouseEvent>
          ): void {
            throw new Error("Function not implemented.");
          }}
        />
        <EyeCard
          marginLeft={"25%"}
          textAlign={"center"}
          marginTop={"-30px"}
          fontWeight={"bold"}
          onClick={function (
            event: React.MouseEvent<HTMLButtonElement, MouseEvent>
          ): void {
            throw new Error("Function not implemented.");
          }}
        />
        <HairCard
          marginLeft={"25%"}
          textAlign={"center"}
          marginTop={"-30px"}
          fontWeight={"bold"}
          onClick={function (
            event: React.MouseEvent<HTMLButtonElement, MouseEvent>
          ): void {
            throw new Error("Function not implemented.");
          }}
        />
        <PerfumeCard
          marginLeft={"25%"}
          textAlign={"center"}
          marginTop={"-30px"}
          fontWeight={"bold"}
          onClick={function (
            event: React.MouseEvent<HTMLButtonElement, MouseEvent>
          ): void {
            throw new Error("Function not implemented.");
          }}
        />
        <SkinCard
          marginLeft={"25%"}
          textAlign={"center"}
          marginTop={"-30px"}
          fontWeight={"bold"}
          onClick={function (
            event: React.MouseEvent<HTMLButtonElement, MouseEvent>
          ): void {
            throw new Error("Function not implemented.");
          }}
        />
      </Box>
    </Box>
  );
};

export default index;
