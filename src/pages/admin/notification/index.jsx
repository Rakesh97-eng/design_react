import HeaderCrumb from "../../../components/common/breadcrumb"
import {

  notificationRowData,
} from "../../../utils/constants/tempData";

import { useState } from "react";
import ActionModal from "../../../components/common/actionModal";
import TableTab from "../../../components/common/dataTable/tableTab";
import NotificationTable from "../../../components/notification/table";
import { Navigate, useNavigate } from "react-router-dom";

const Notification = ()=>{
    const [open,setOpen] = useState(false);
   const [activetab,setActiveTap] = useState('all')
  const [crumbData,setCrumbData] = useState("List all Notification")
   const [anchorEl, setAnchorEl] = useState(null);
  const navigate = useNavigate();
    let tabHead =[
      {
        title: "All",
        id: "all",
      },
      {
        title: "Approved",
        id: "approved",
      },
      {
        title: "Pending",
        id: "pending",
      },
      {
        title: "Rejected",
        id: "rejected",
      },
    ]


   
    const handleTabs = (id)=>{
     setActiveTap(id)
     setCrumbData(id)
    }
    const modalActions = (id)=>{
      if(id === "edit"){
        setOpen(!open)
        setAnchorEl(null)
      }
    }

    const handleAction = ()=>{
      navigate('/view-notification')
    }


    return(
        <>
            <HeaderCrumb
            headingText={"Notification"}
            firstText={"Notification"}
            secondText={crumbData}
            />
          <div className="tablecontainer">
          <TableTab tabHead={tabHead} handleTabs={handleTabs} activepath={activetab}/>
          <NotificationTable rowData={notificationRowData} onActionClick ={handleAction}/>
      </div>

       <ActionModal openDrawer={setOpen} modalActions={modalActions}  anchorEl={anchorEl} setAnchorEl={setAnchorEl} modalList={[{title:"Edit",id:"edit"},{title:"View",id:"view"},{title:"Delete",id:"delete"}]} /> 
        </>
    )
}

export default Notification;