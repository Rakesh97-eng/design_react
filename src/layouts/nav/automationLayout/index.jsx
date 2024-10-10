import { useState } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import HeaderCrumb from "../../../components/common/breadcrumb";
import TableTab from "../../../components/common/dataTable/tableTab";

let tabHead = [
    {
      title: "Process",
      id: "process",
    },
    {
      title: "Jobs",
      id: "jobs",
    },
    {
      title: "Triggers",
      id: "triggers",
    },
  ]
  

const AutomationLayout = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const path = location.pathname;

  let activepath = path.split("/")[2];

  const handleTabs = (path) => {
    navigate(`automation/${path}`);
  };

  return (
    <>
      <HeaderCrumb
        headingText={"Automation"}
        firstText={"Automations"}
        secondText={activepath}
      />
      <div className="tablecontainer">
        <TableTab tabHead={tabHead} handleTabs={handleTabs} activepath={activepath}/>
        <Outlet />
      </div>
    </>
  );
};

export default AutomationLayout;
