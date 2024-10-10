import React, { useEffect, useState } from "react";
import { styled } from "@mui/material/styles";
import MuiDrawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import ListIcon from "@mui/icons-material/List";
import { Link, useNavigate, useLocation } from "react-router-dom";
import "./rootLayoutStyle.css";
import { sideBar } from "../../../utils/constants/sidebarData";
import { Collapse, ListItem, ListItemIcon } from "@mui/material";
import MailIcon from "@mui/icons-material/Mail";
import Logo from "../../../assets/layout/logo.png";
import { ExpandLess, ExpandMore } from "@mui/icons-material";

const drawerWidth = 280;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

function MultipleList({ menuItems, openDrawer }) {
  const { name, path, id, permissionlabel,icon } = menuItems;
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  let isActive =location.pathname.split('/')[1] === path.split('/')[1]
  console.log("padthhhh",path,location?.pathname);
  const handleClick = (e) => {
      e.preventDefault();
    navigate(path);
    // setOpen(!open);
  };

  return (
    <div className="layoutSide">
      <div style={{backgroundColor:open?"var(--befreebgcolor)":""}} className="layoutsidediv" > </div>
      <div style={{width:"100%"}}>
        <ListItemButton
          component={Link}
          sx={{marginRight:"3% !important"}}
          to={path}
          className={isActive ? "multi-list nestedMenuActive" : "multi-list"}
          onClick={handleClick}
        >
          {/* <ListIcon sx={{ marginRight: "8px" }} /> */}
          <img src={icon} className="listimg"/>
          <ListItemText
            className={"menuname"}
            primary={name}
            onClick={handleClick}
          />
          {open ? (
            <ExpandLess sx={{ marginLeft: "2px" }} />
          ) : (
            <ExpandMore sx={{ marginLeft: "2px" }} />
          )}
        </ListItemButton>
        <Collapse in={isActive} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            {menuItems.isNested.map((nestedItem, index) => {
              const { name, path, icon, child, id, permissionlabel } =
                nestedItem;
              let isActive =
                location.pathname === path || location.pathname === child;
              return (
                <div key={index}>
                  <ListItemButton
                    component={Link}
                    to={path}
                    style={{
                      color: isActive ? "#2AA6DE" : "",
                      margin: isActive && openDrawer ? "0px 18px 0px 0px" : "",
                      // width:openDrawer?"" :"10px",
                      borderRadius: isActive ? "10px" : "",
                      display: "flex",
                      justifyContent: "center",
                    }}
                    key={`${index}-item`}
                    className="nested-list"
                    sx={{
                      "&:hover": {
                        color: "#2AA6DE",
                      },
                    }}
                  >
                    <span style={{ margin: "9px" }}>{icon}</span>
                    <ListItemText
                      primary={name}
                      className={
                        isActive
                          ? "menuname nestedmenu"
                          : "menunameIsActive nestedmenu"
                      }
                    />
                  </ListItemButton>
                </div>
              );
            })}
          </List>
        </Collapse>
      </div>
    </div>
  );
}

function SingleList({ menuItems, openDrawer }) {
  const { name, path, id, permissionlabel, icon } = menuItems;
  const [open, setOpen] = useState(true);
  const navigate = useNavigate();
  let location = useLocation();
  const isActive = location.pathname === path;
  const handleClick = (e) => {
    e.preventDefault();
    navigate(path);
    setOpen((prev) => !prev);
  };

  return (
    <div className="layoutSide">
      <div className="layoutsidediv"  style={{backgroundColor:isActive?"var(--befreebgcolor)":""}}> </div>
      <ListItemButton
        component={Link}
        to={path}
        sx={{marginRight:"3% !important"}}
        className={isActive?"multi-list nestedMenuActive":"multi-list"}
        onClick={handleClick}
      >
         <img src={icon} className="listimg" />
        <ListItemText
          primary={name}
          className={"menuname"}
          onClick={() => navigate(path)}
        />
      </ListItemButton>
    </div>
  );
}

export const Layout = ({ openDrawer }) => {
  const [layoutData, setLayoutData] = useState([]);
  let sessionValue = sessionStorage.getItem("ur");

  useEffect(() => {
    setLayoutData(sideBar);
  }, [openDrawer, sessionValue]);

  return (
    <>
      <div className="layoutcontainer">
        <Drawer
          variant="permanent"
          className="layoutlist"
          open={openDrawer}
          style={{ width: openDrawer ? "" : "20px" }}
        >
          <div className="logocontainer">
            <img src={Logo} className="logo" />
          </div>
          <List className="listcontainer">
            {layoutData.map((items, index) => {
              return items.isNested ? (
                <MultipleList
                  menuItems={items}
                  key={index}
                  openDrawer={openDrawer}
                />
              ) : (
                <SingleList
                  menuItems={items}
                  key={index}
                  openDrawer={openDrawer}
                />
              );
            })}
          </List>
        </Drawer>
      </div>
    </>
  );
};
