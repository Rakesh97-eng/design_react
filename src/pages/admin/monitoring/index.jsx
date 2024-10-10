import HeaderCrumb from "../../../components/common/breadcrumb"
import Process from "./process"

const Monitoring = ()=>{
    return (
        <>
            <HeaderCrumb 
                headingText={"Monitoring"}
                firstText={"Monitoring"}
                secondText={"Process"}
            
            />
            <Process/>
        </>
    )
}

export default Monitoring