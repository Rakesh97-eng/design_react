const TableTab = (props)=>{
    const {tabHead,handleTabs,activepath} = props;

    return (
        <div style={{ display: "flex" }}>
          {tabHead?.map((tabs) => (
            <div
              key={tabs?.title}
              onClick={() => handleTabs(tabs.id)}
              className={
                activepath == tabs.id
                  ? "automationtabcontainer activetab"
                  : "automationtabcontainer"
              }
            >
              {tabs.title}
            </div>
          ))}
        </div>
    )
}

export default TableTab