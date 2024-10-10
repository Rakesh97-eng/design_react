import DataTable from "../../../../components/common/dataTable";
import {
  jobsfilterData,
  manageColumnData,
  manageRowData,
} from "../../../../utils/constants/tempData";
import TuneIcon from "@mui/icons-material/Tune";
import edit from "../../../../assets/table/edit.png";
import download from "../../../../assets/table/download.png";
import calendar from "../../../../assets/table/download.png";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import AddDrawer from "../../../../components/common/dataTable/tabledrawer";
import { useState } from "react";
import HeaderCrumb from "../../../../components/common/breadcrumb";
import ActionModal from "../../../../components/common/actionModal";
import "../automationStyle.css"
import TableButton from "../../../../components/common/dataTable/tableButton";
import { automationjobcolumn, automationjobrowdata } from "../../../../utils/constants/tabledata";

const Jobs = () => {
    const [open,setOpen] = useState(false);
    const [actionopen,setActionOpen] = useState(false);
    const [modalPosition, setModalPosition] = useState({ top: 0, left: 0 });
    const [anchorEl, setAnchorEl] = useState(null);

    const toggleDrawer = (event) => {
      if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
        return;
      }
      setOpen(!open);
      
    };

    let filter={
      title:"Client Filter",
      toggleDrawer:toggleDrawer,
      drawlist:jobsfilterData
    }

    const modalActions = (id)=>{
      if(id === "edit"){
        setOpen(!open)
        setAnchorEl(null)
      }
    }

    const toggleEditAction=(position)=>{
      console.log("p[odfdfdsf",position);
      setModalPosition(position);
      setActionOpen(!actionopen)
    }

  return (
    <>
        <div className="flexcontainer tablewrapper">
          <div className="filtercontainer" onClick={toggleDrawer}>
            <TuneIcon fontSize="15px" />
            <span>Filter</span>
          </div>
          <div
            className="flexcontainer"
            style={{ alignItems: "center", gap: "3px" }}
          >
            <img src={calendar} />
            <img src={edit} />
            <img src={download} />
           <TableButton btnText={"Start Job"}/>
          </div>
        </div>
        <DataTable columnData={automationjobcolumn} rowData={automationjobrowdata} setAnchorEl={setAnchorEl} openEditAction={toggleEditAction} />
        <AddDrawer  open={open} {...filter}/>
       <ActionModal openDrawer={setOpen} modalActions={modalActions}  anchorEl={anchorEl} setAnchorEl={setAnchorEl} modalList={[{title:"Edit",id:"edit"},{title:"View",id:"view"},{title:"Delete",id:"delete"}]} /> 
    </>
  );
};
export default Jobs;
