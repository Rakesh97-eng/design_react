import { Grid } from "@mui/material";
import { useNavigate } from "react-router-dom";
import HeaderCrumb from "../../../../components/common/breadcrumb";
import "../notificationStyle.css";

const ViewNotification = () => {
    const navigate = useNavigate();
  let columnData = [
    {
      id: "client_name",
      label: "Client Name",
    },
    {
      id: "email",
      label: "Email",
    },
    {
      id: "requestedfreequency",
      label: "Requested Frequency Change",
    },
    {
      id: "current_frequency",
      label: "Current Frequency",
    },
    {
      id: "status",
      label: "Status",
    },
  ];

  let valueData = {
    client_name: "Dravid",
    email: "Dravid@gmail.con",
    requestedfreequency: "17-Feb-2024",
    current_frequency: "17-sep-2024",
    status: "pending",
  };
  return (
    <>
      <HeaderCrumb
        headingText={"Notification"}
        firstText={"Notification"}
        secondText={"List all Notification"}
      />
      <div className="tablecontainer">
        <span className="dashcharttitle" style={{ margin: "5px 0px" }}>
          Frequency Request Overview
        </span>
        <Grid container>
          <Grid item lg={6} className="notificationleftcardcontainer">
            <span className="dashcharttitle" style={{ fontWeight: "400" }}>
              Pending Approvals
            </span>
            <Grid container spacing={3} sx={{padding:"2%"}}>
              {columnData?.map((data) => {
                return (
                  <Grid key={data?.id} item lg={6}>
                    <div className="notificationrightchild">
                      <span>{data?.label}</span>
                      <div style={{color:data?.id==="status"?valueData[data?.id]==="pending"?"#FFA800":"#28CA42":""}}>{valueData[data?.id]}</div>
                    </div>
                  </Grid>
                );
              })}
            </Grid>
            <div className="notiflexcontainer">
              <div className="notificationrightchild">
                <span>Reason For Change</span>
                <div>
                  We need to increase service Frequency to cut costs during a
                  low-demand price
                </div>
              </div>
            </div>
          </Grid>
          <Grid item lg={5} className="notificationrightcardcontainer">
            <div className="notificationrightchild">
              <span>Client Name</span>
              <div>Espys</div>
            </div>
            <div className="notificationrightchild">
              <span>Requested Date</span>
              <div>15-09-2024</div>
            </div>
            <div className="notificationrightchild">
              <span>Requested Time</span>
              <div>8:45am</div>
            </div>
          </Grid>
        </Grid>
        <div className="notiflexcontainer" style={{justifyContent:"flex-end"}}>
            <button className="notifyviewbtn" style={{backgroundColor:"#299FD6"}} onClick={()=>navigate('/notification')}>cancel</button>
            <button className="notifyviewbtn" style={{backgroundColor:"#FF5F57"}}>Reject</button>
            <button className="notifyviewbtn" style={{backgroundColor:"#00AF5A"}}>Approve</button>
        </div>
      </div>
    </>
  );
};

export default ViewNotification;
