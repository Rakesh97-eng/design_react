import "../dataTableStyle.css";

const TableCount = (props)=>{
    const {activecount,activetext,inactivecount,inactivetext,customStyle} = props;
    return (
        <div style={customStyle}>
        <span style={{fontSize:"14px",marginRight:"5px"}}>
          <span className="countvalue" style={{color:"#34C759",backgroundColor:"rgb(52 199 89 / 18%)"}}>{activecount}</span>{activetext}
        </span>
        <span style={{fontSize:"14px",marginRight:"5px"}}>
          <span  className="countvalue" style={{color:"#FF0000",backgroundColor:"rgb(255 0 0 / 32%)"}}>{inactivecount}</span>{inactivetext}
        </span>
        </div>
    )
}

export default TableCount