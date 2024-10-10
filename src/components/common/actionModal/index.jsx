import * as React from 'react';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import "./actionmodalStyle.css"

// const ActionModal = (props) => {
//   const { open, modalList,position } = props;
//   return (
//     <>
//       {open && (
//         <div  style={{
//          position:"absolute",
//         top: `${position.top}px`,
//         left: `${position.left}px`,
//       }} className="actionmodalcontainer">
//           {modalList.map((list) => {
//             return (
              
//                 <div>{list}</div>
              
//             );
//           })}
//         </div>
//       )}
//     </>
//   );
// };
// export default ActionModal;


export default function ActionModal(props) {
    const {anchorEl,setAnchorEl,modalList,openDrawer,modalActions} = props;
  
    console.log("setAnchorElsetAnchorEl",anchorEl);
  const handleClick = (event) => {
   
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  return (
    <div>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
      >
       {modalList?.map((modal,i)=>{
        return  <div key={i} className='modallists' onClick={()=>modalActions(modal?.id)}>{modal?.title}</div>
        
       })}
      </Popover>
    </div>
  );
}
