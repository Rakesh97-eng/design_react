import DataTable from "../../../../components/common/dataTable";
import {
  addClientData,
  clientFilterData,
  manageColumnData,
  manageRowData,
} from "../../../../utils/constants/tempData";
import "../clientStyle.css";
import filter from "../../../../assets/table/filter.png";
import TuneIcon from "@mui/icons-material/Tune";
import edit from "../../../../assets/table/edit.png";
import download from "../../../../assets/table/download.png";
import calendar from "../../../../assets/table/download.png";
import AddDrawer from "../../../../components/common/dataTable/tabledrawer";
import { useState } from "react";
import HeaderCrumb from "../../../../components/common/breadcrumb";
import ActionModal from "../../../../components/common/actionModal";
import TableButton from "../../../../components/common/dataTable/tableButton";
import TableCount from "../../../../components/common/dataTable/tableCount";

const ManageClient = () => {
    const [open,setOpen] = useState(false);
    const [actionopen,setActionOpen] = useState(false);
    const [modalPosition, setModalPosition] = useState({ top: 0, left: 0 });
    const [anchorEl, setAnchorEl] = useState(null);
    const[drawervalue,setDrawerValue] = useState('add')

    const toggleDrawer = (event,id="add") => {
      if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
        return;
      }
      setOpen(!open);
      if(id == "filter"){
        setDrawerValue(id)
      }
      else{
        setDrawerValue('add')
      }
      
    };

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

    let drawerData={
      filter:{
        title:"Client Filter",
        toggleDrawer:toggleDrawer,
        drawlist:clientFilterData
      },
      add :{
        title:"Add Client",
        toggleDrawer:toggleDrawer,
        drawlist:addClientData
      }
    }

  return (
    <>
      <HeaderCrumb headingText={"Client"} firstText={"client"} secondText={"List of Client"}/>
      <div className="tablecontainer">
        <TableCount activecount={5} inactivecount={9} activetext={"Active"} inactivetext={"Inactive"}/>
        <div className="flexcontainer tablewrapper">
          <div className="filtercontainer" onClick={(e)=>toggleDrawer(e,'filter')}>
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
            <TableButton btnText={"Add Client"} onbtnClick={toggleDrawer}/>
          </div>
        </div>
        <DataTable columnData={manageColumnData} rowData={manageRowData} setAnchorEl={setAnchorEl} openEditAction={toggleEditAction} />
      </div>
        <AddDrawer  open={open} {...drawerData[drawervalue]}/>

       <ActionModal openDrawer={setOpen} modalActions={modalActions}  anchorEl={anchorEl} setAnchorEl={setAnchorEl} modalList={[{title:"Edit",id:"edit"},{title:"View",id:"view"},{title:"Delete",id:"delete"}]} /> 
    </>
  );
};
export default ManageClient;
