import { Grid } from "@mui/material";
import CommonDropdown from "../../../components/common/commonfields/dropdown";
import DashboardCard from "../../../components/dashboard/dashboardcard";
import DashboardPieChart from "../../../components/dashboard/dashboardChart";
import DashboardLineChart from "../../../components/dashboard/dashboardChart/linechart";
import ArrowCircleDownRoundedIcon from '@mui/icons-material/ArrowCircleDownRounded';
import {
  chartData,
  dashboardcarddata,
  dashboardsmallcardone,
  dashboardsmallcardtwo,
} from "../../../utils/constants/tempData";
import "./dashboardStyle.css";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { getProcessData } from "../../../redux/action/adminAction";

const AdminDashboard = () => {

  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(getProcessData())
  },[])

  return (
    <>
      <div className="adminflexcontainer">
        {dashboardcarddata.map((cardData, i) => {
          return <DashboardCard key={i}carddata={cardData} />;
        })}
      </div>
      <Grid container justifyContent={"space-between"} className="dashchartcontainer">
        <Grid className="dashchartchild" item md={12} lg={7}>
          <span className="dashcharttitle">Job History</span>
          <div   style={{marginTop:"3%",display:"flex"}}>
            <DashboardPieChart Data={chartData} title="Current Jobs" />
            <div style={{width:"2px",backgroundColor:"#80808052",margin:"5% 0px"}}></div>
            <DashboardPieChart Data={chartData}  title="Previous Jobs"/>
          </div>
        </Grid>
        <Grid className="dashchartchild" item md={12} lg={4}>
       
          <span className="dashcharttitle">Job Status</span>
        
          <div style={{marginTop:"5%"}}>
            <p>Current Jobs</p>
            <div className="adminflexcontainer">
              {dashboardsmallcardone.map((cardData, i) => {
                return <DashboardCard key={i}customStyle={cardData?.customStyle} carddata={cardData} />;
              })}
            </div>
          </div>
          <div style={{marginTop:"5%"}}> 
            <p>Current Jobs</p>
            <div className="adminflexcontainer">
              {dashboardsmallcardtwo.map((cardData, i) => {
                return <DashboardCard key={i}carddata={cardData} customStyle={cardData?.customStyle} />;
              })}
            </div>
          </div>
        </Grid>
      </Grid>
    <div className="dashchartchild" style={{background:"white",marginTop:"3%"}}>
      <div className="adminflexcontainer">
        <span  className="dashcharttitle">Transactions July 17, 2024 at 9:00 AM UTC - July 18, 2024 at 8:00 AM UTC</span>
        <span className="adminflexcontainer" style={{alignItems:"center"}}>
        <CommonDropdown/>
        <ArrowCircleDownRoundedIcon className="downloadbutton"/>
        </span>
      </div>
        <div className="adminflexcontainer" style={{justifyContent:"center"}}>
              <DashboardLineChart Data={chartData}/>
        </div>
    </div>
    </>
  );
};

export default AdminDashboard;
