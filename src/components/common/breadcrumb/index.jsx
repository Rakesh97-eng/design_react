import "./breadcrumbStyle.css"
const HeaderCrumb = (props)=>{
    const {headingText,firstText,secondText} = props;
    return (
        <div style={{marginBottom:"10px"}}>
        <div className="headingcrumbtext">{headingText}</div>
        <div className="firstcrumbtext">{firstText}&gt;<span className="firstcrumbtext" style={{color:"var(--befreebgcolor)",fontWeight:"550",marginLeft:"3px"}}>{secondText}</span></div>
        </div>
    )
}

export default HeaderCrumb;