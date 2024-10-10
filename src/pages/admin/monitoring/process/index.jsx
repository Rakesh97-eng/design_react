import ProcessChart from "../../../../components/monitoring/processchart";
import DataTable from "../../../../components/common/dataTable";
import {
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
import { montioringprocesscolumndata, montioringprocessrowdata } from "../../../../utils/constants/tabledata";
const Process = () => {
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
    console.log("p[odfdfdsf", position);
    setModalPosition(position);
    setActionOpen(!actionopen);
  };
  return (
    <div style={{padding:"10px"}}>
      <div
        style={{
          background: "white",
          position: "relative",
          width: "40%",
          padding:"8px",
          borderRadius: "8px",
        }}
      >
        <span className="dashcharttitle">Process Transaction</span>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <ProcessChart />
        </div>
      </div>
      <div className="tablecontainer" style={{ marginTop: "10px" }}>
        <div className="flexcontainer tablewrapper">
          <div className="filtercontainer">
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
          
          </div>
        </div>
        <DataTable
          columnData={montioringprocesscolumndata}
          rowData={montioringprocessrowdata}
          setAnchorEl={setAnchorEl}
          openEditAction={toggleEditAction}
        />
       

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
      </div>
    </div>
  );
};

export default Process;
