import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";



import "../notificationStyle.css";
const NotificationTable = (props) => {
    const {rowData:rows,onActionClick} = props;
    return (
    <>
      <TableContainer sx={{margin:"5px",paddingTop:"8px"}} component={Paper}>
        <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">

          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.name}
                // sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell sx={{border:"none",width:"35%"}}>
                <div className="notificationflexcontainer">
                  <img src={row?.image}/>
                  <div>
                  <span className="notificationname">{row.name}</span><span className="notificationrequest">{row.request}</span>
                  <div className={row.status == "pending"?"pendingclr":"approvedclr"}>{row.status}</div>
                  </div>

                </div>
                  
                </TableCell>
                <TableCell sx={{border:"none"}} >{row.time}</TableCell>
                <TableCell sx={{border:"none"}} >
                    <button onClick={onActionClick} className="notificationview">View</button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default NotificationTable;
