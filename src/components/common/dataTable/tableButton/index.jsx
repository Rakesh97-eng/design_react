import "../dataTableStyle.css";
import AddCircleIcon from "@mui/icons-material/AddCircle";

const TableButton = (props)=>{
    const {btnText,onbtnClick} = props;
    return (
        <>
           <button className="addbtn" onClick={onbtnClick}>
              <AddCircleIcon style={{ color: "white" }} fontSize="12px" />{" "}
              <span>{btnText}</span>
            </button>
        </>
    )
}

export default TableButton