import HeaderCrumb from "../../../components/common/breadcrumb";
import DataTable from "../../../components/common/dataTable";
import TuneIcon from "@mui/icons-material/Tune";
import edit from "../../../assets/table/edit.png";
import download from "../../../assets/table/download.png";
import calendar from "../../../assets/table/download.png";

import {
  exceptioncolumndata,
  queuecolumndata,
  queuerowdata,
  transactionrowData,
} from "../../../utils/constants/tabledata";

const ExceptionalTransactions = () => {
  return (
    <>
      <HeaderCrumb
        headingText={"Exceptional Transactions"}
        firstText={"Exceptional Transaction"}
        secondText={"List of Transactions"}
      />
      <div className="tablecontainer">
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
        <DataTable columnData={exceptioncolumndata} rowData={transactionrowData} />
      </div>
    </>
  );
};

export default ExceptionalTransactions;
