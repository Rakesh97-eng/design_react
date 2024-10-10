import "../dashboardStyle.css";
const DashboardCard = ({carddata,customStyle})=>{
    const {title,value,icon} = carddata;
    return (
        <>
        <div className="dashcardcontainer" style={customStyle}>
            <div>
                <p className="dashcardp">{title}</p>
                <span className="dashcardvalue">{value}</span>
            </div>
            <div>
                <img src={icon}/>
            </div>
        </div>
        </>
    )
}

export default DashboardCard