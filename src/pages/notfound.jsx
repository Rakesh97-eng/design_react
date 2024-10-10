import nodata from "../assets/nodata.png"
const NotFound = ()=>{
    return (
        <>
            <div style={{display:"flex",justifyContent:"center"}}>
                <img src={nodata}/>
            </div>
        </>
    )
}

export default NotFound;