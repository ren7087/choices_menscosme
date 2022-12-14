import React, { memo } from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import NearMeIcon from "@mui/icons-material/NearMe";
import BackupIcon from "@mui/icons-material/Backup";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import { useRouter } from "next/router";
import Db from "../components/organisms/daily/db";

const drawerWidth = 200;

const Index = memo(() => {
  const router = useRouter();
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
            {["DB", "Calendar", "Register", "TOPへ戻る"].map((text, index) => (
              <ListItem key={text} disablePadding>
                {index % 4 === 0 && (
                  <ListItemButton
                    onClick={(e: React.MouseEvent<HTMLElement, MouseEvent>) => {
                      e.preventDefault();
                      router.push("/daily");
                    }}
                  >
                    <ListItemIcon>
                      <InboxIcon />
                    </ListItemIcon>
                    <ListItemText primary={text} />
                  </ListItemButton>
                )}
                {index % 4 === 1 && (
                  <ListItemButton
                    onClick={(e: React.MouseEvent<HTMLElement, MouseEvent>) => {
                      e.preventDefault();
                      router.push("/daily/calendar");
                    }}
                  >
                    <ListItemIcon>
                      <CalendarMonthIcon />
                    </ListItemIcon>
                    <ListItemText primary={text} />
                  </ListItemButton>
                )}
                {index % 4 === 2 && (
                  <ListItemButton
                    onClick={(e: React.MouseEvent<HTMLElement, MouseEvent>) => {
                      e.preventDefault();
                      router.push("/daily/register");
                    }}
                  >
                    <ListItemIcon>
                      <BackupIcon />
                    </ListItemIcon>
                    <ListItemText primary={text} />
                  </ListItemButton>
                )}
                {index % 4 === 3 && (
                  <ListItemButton
                    onClick={(e: React.MouseEvent<HTMLElement, MouseEvent>) => {
                      e.preventDefault();
                      router.push("/");
                    }}
                  >
                    <ListItemIcon>
                      <NearMeIcon />
                    </ListItemIcon>
                    <ListItemText primary={text} />
                  </ListItemButton>
                )}
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
      <Db />
    </Box>
  );
});

export default Index;
Index.displayName = "Index";
