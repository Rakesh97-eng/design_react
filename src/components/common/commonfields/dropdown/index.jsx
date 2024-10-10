import "../commonfieldstyle.css"
const CommonDropdown = (props)=>{
    const{label} = props;
    return (
        <>  
           {label&& <label className="labelcontainer">{label}</label>}
            <select className="selectcontainer">
                <option>Process Name</option>
                <option>Process Name</option>
                <option>Process Name</option>
                <option>Process Name</option>
            </select>
        </>
    )
}

export default CommonDropdown;