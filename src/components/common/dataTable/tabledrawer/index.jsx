import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import CommonDropdown from "../../commonfields/dropdown";
import { addClientData } from "../../../../utils/constants/tempData";
import PersonIcon from '@mui/icons-material/Person';


export default function AddDrawer(props) {
  const { toggleDrawer, open,title,drawlist } = props;
  const list = () => (
    <Box
      sx={{ width: 320 }}
      role="presentation"
      onClick={toggleDrawer}
      onKeyDown={toggleDrawer}
    >
      <List sx={{padding:"5px"}}>
        <div className="listnamecontainer">
            <PersonIcon/>
            <span>{title}</span>
            <div style={{width:"40%",height:"2px",backgroundColor:"grey"}}></div>
        </div>
        {drawlist?.map((data) => {
          return (
            <div key={data?.id} className="dropdownlistcontainer">
              <CommonDropdown label={data.label} />
            </div>
          );
        })}
      </List>
    </Box>
  );

  return (
    <Drawer anchor={"right"} open={open} onClose={toggleDrawer}>
      {list()}
    </Drawer>
  );
}
