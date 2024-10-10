import DataTable from "../../../../components/common/dataTable";
import {
  adduserData,
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
import AddCircleIcon from "@mui/icons-material/AddCircle";
import AddDrawer from "../../../../components/common/dataTable/tabledrawer";
import { useState } from "react";
import HeaderCrumb from "../../../../components/common/breadcrumb";
import ActionModal from "../../../../components/common/actionModal";
import TableButton from "../../../../components/common/dataTable/tableButton";
import { manageuserColumnData, manageuserrowdata } from "../../../../utils/constants/tabledata";

const ManageUser = () => {
  const [open, setOpen] = useState(false);
  const [actionopen, setActionOpen] = useState(false);
  const [modalPosition, setModalPosition] = useState({ top: 0, left: 0 });
  const [anchorEl, setAnchorEl] = useState(null);

  const toggleDrawer = (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setOpen(!open);
  };

  const modalActions = (id) => {
    if (id === "edit") {
      setOpen(!open);
      setAnchorEl(null);
    }
  };

  const toggleEditAction = (position) => {
    setModalPosition(position);
    setActionOpen(!actionopen);
  };

  let adduser={
    title:"Add User",
    toggleDrawer:toggleDrawer,
    drawlist:adduserData
  }

  return (
    <>
      <HeaderCrumb
        headingText={"User"}
        firstText={"user"}
        secondText={"List of User"}
      />
      <div className="tablecontainer">
        <div
          className="flexcontainer tablewrapper"
          style={{ justifyContent: "flex-end" }}
        >
          <div
            className="flexcontainer"
            style={{ alignItems: "center", gap: "3px" }}
          >
            <img src={calendar} />
            <img src={edit} />
            <img src={download} />
            <TableButton btnText={"Add User"} onbtnClick={toggleDrawer} />
          </div>
        </div>
        <DataTable
          columnData={manageuserColumnData}
          rowData={manageuserrowdata}
          setAnchorEl={setAnchorEl}
          openEditAction={toggleEditAction}
        />
      </div>
      <AddDrawer open={open} {...adduser} />

      <ActionModal
        openDrawer={setOpen}
        modalActions={modalActions}
        anchorEl={anchorEl}
        setAnchorEl={setAnchorEl}
        modalList={[
          { title: "Edit", id: "edit" },
          { title: "View", id: "view" },
          { title: "Delete", id: "delete" },
        ]}
      />
    </>
  );
};
export default ManageUser;
