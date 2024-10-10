import HeaderCrumb from "../../../components/common/breadcrumb"
import DataTable from "../../../components/common/dataTable";
import {
  manageColumnData,
  manageRowData,
} from "../../../utils/constants/tempData";
import TuneIcon from "@mui/icons-material/Tune";
import edit from "../../../assets/table/edit.png";
import download from "../../../assets/table/download.png";
import calendar from "../../../assets/table/download.png";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import AddDrawer from "../../../components/common/dataTable/tabledrawer";
import { useState } from "react";
import ActionModal from "../../../components/common/actionModal";
import TableCount from "../../../components/common/dataTable/tableCount";
import { queuecolumndata, queuerowdata } from "../../../utils/constants/tabledata";

const Queues = ()=>{
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

    return(
        <>
            <HeaderCrumb
            headingText={"Queues"}
            firstText={"Queues"}
            secondText={"List of Queues"}
            />
          <div className="tablecontainer">
        <TableCount activecount={2} activetext={"Active"} inactivecount={5} inactivetext={"InActive"} customStyle={{marginBottom:"8px"}}/>
      
        <DataTable columnData={queuecolumndata} rowData={queuerowdata} setAnchorEl={setAnchorEl} openEditAction={toggleEditAction} />
      </div>

       <ActionModal openDrawer={setOpen} modalActions={modalActions}  anchorEl={anchorEl} setAnchorEl={setAnchorEl} modalList={[{title:"Edit",id:"edit"},{title:"View",id:"view"},{title:"Delete",id:"delete"}]} /> 
        </>
    )
}

export default Queues;