import { useState } from "react";
import HeaderCrumb from "../../../components/common/breadcrumb";
import Jobs from "./jobs";
import Process from "./process";
import Triggers from "./triggers";

let tabheaders = [
  {
    title: "process",
    id: "process",
  },
  {
    title: "triggers",
    id: "triggers",
  },
  {
    title: "jobs",
    id: "jobs",
  },
];

const Automation = () => {
  const [tabarray, setTabArray] = useState(tabheaders);
  const [comp, setComp] = useState("process");

  const rendercomponents = (comps) => {
    let obj = {
      process: <Process />,
      triggers: <Triggers />,
      jobs: <Jobs />,
    };

    return obj[comps];
  };

  return (
    <>
      <HeaderCrumb
        headingText={"Automation"}
        firstText={"Automations"}
        secondText={comp}
      />

      <div className="tablecontainer">
        <div style={{ display: "flex" }}>
          {tabarray?.map((tabs) => (
            <div
              key={tabs?.title}
              onClick={() => setComp(tabs?.id)}
              className={
                comp == tabs.title
                  ? "automationtabcontainer activetab"
                  : "automationtabcontainer"
              }
            >
              {tabs.title}
            </div>
          ))}
        </div>
        {rendercomponents(comp)}
      </div>
    </>
  );
};

export default Automation;
