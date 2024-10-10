import dash1 from "../../assets/dashboard/dashboard1.png";
import dash2 from "../../assets/dashboard/dashboard2.png";
import dash3 from "../../assets/dashboard/dashboard3.png";
import dash4 from "../../assets/dashboard/dashboard4.png";
import dash5 from "../../assets/dashboard/dashboard5.png";

import notify2 from "../../assets/notification/notify2.png";
import notify1 from "../../assets/notification/notify1.png";

//Dashboard card

export const dashboardcarddata=[
    {
        title:"Process",
        value:28,
        icon:dash1
    },
    {
        title:"Assests",
        value:28,
        icon:dash2
    },
    {
        title:"Queues",
        value:28,
        icon:dash3
    },
    {
        title:"Triggers",
        value:28,
        icon:dash4
    },
    {
        title:"Machines",
        value:28,
        icon:dash5
    },
]

export const dashboardsmallcardone=[
  {
    title:"Running",
    value:3,
    icon:dash1,
    customStyle:{
      background: "rgb(255 144 102 / 26%) ",
      width: "35%",
      gap:"5px",
      padding: "4% 25px",

   
    }
},
{
    title:"Pending",
    value:28,
    icon:dash2,
    customStyle:{
      background:"rgb(254 197 61 / 23%)",
      width: "35%",
      gap:"5px",
      padding: "4% 25px",

    }
},
]
export const dashboardsmallcardtwo=[
  {
    title:"Terminated",
    value:28,
    icon:dash1,
    customStyle:{
      background:"rgb(222 128 255 / 25%)",
      width: "35%",
      gap:"5px",
      padding: "4% 25px",
      

    }
},
{
    title:"Completed",
    value:28,
    icon:dash2,
    customStyle:{
      background: "rgb(74 217 145 / 25%)",
      width: "35%",
      gap:"5px",
      padding: "4% 25px"

    }
},
]

export const chartData = [
    {
      id: 1,
      year: 2016,
      userGain: 80000,
      userLost: 823
    },
    {
      id: 2,
      year: 2017,
      userGain: 75200,
      userLost: 600
    },
    {
      id: 3,
      year: 2018,
      userGain: 78888,
      userLost: 555
    },
  
  ];


  export const manageColumnData = [
    {
      id: 'practice_name',
      disablePadding: true,
      label: 'Practice name',
    },
    {
      id: 'client_name',
     disablePadding: false,
      label: 'Client name',
    },
    {
      id: 'abn',
     disablePadding: false,
      label: 'ABN',
    },
    {
      id: 'managers',
     disablePadding: false,
      label: 'Managers',
    },
    {
      id: 'bot',
      disablePadding: false,
      label: 'Bot',
    },
    {
      id: 'status',
      disablePadding: false,
      label: 'Status',
    },
    {
      id: 'action',
      numeric: true,
      disablePadding: false,
      label: 'Action',
    },
  ];

  export const manageRowData = [
    {
      id: '1',
      name:"Yuvaraj",
      status:false,
      bot:"Test",
      managers:"Uv",
      client_name:"Rakesh",
      abn:"55",
      
      practice_name:"Praveen"
    },
    {
      id: '1',
      name:"Yuvaraj",
      status:false,
      bot:"Test",
      managers:"Uv",
      client_name:"Rakesh",
      abn:"55",
      
      practice_name:"Praveen"
    },
    {
      id: '1',
      name:"Yuvaraj",
      status:false,
      bot:"Test",
      managers:"Uv",
      client_name:"Rakesh",
      abn:"55",
      
      practice_name:"Praveen"
    },
    {
      id: '1',
      name:"Yuvaraj",
      status:false,
      bot:"Test",
      managers:"Uv",
      client_name:"Rakesh",
      abn:"55",
      
      practice_name:"Praveen"
    },
    {
      id: '1',
      name:"Yuvaraj",
      status:false,
      bot:"Test",
      managers:"Uv",
      client_name:"Rakesh",
      abn:"55",
      
      practice_name:"Praveen"
    },
    {
      id: '1',
      name:"Yuvaraj",
      status:false,
      bot:"Test",
      managers:"Uv",
      client_name:"Rakesh",
      abn:"55",
      action:"Action",
      practice_name:"Praveen"
    },
   
  ];


  export const addClientData = [
    {
      id:"1",
      label:"Practice Name",
      defaultValue:"select practice name"
    },
    {
      id:"2",
      label:"Client Name",
      defaultValue:"select clients"
    },
    {
      id:"3",
      label:"ABN",
      defaultValue:"Enter your ABN"
    },
    {
      id:"4",
      label:"No of Bots",
      defaultValue:"select bot"
    },
    {
      id:"5",
      label:"Select Managers",
      defaultValue:"select manager"
    },
    {
      id:"6",
      label:"Status",
      defaultValue:"select status"
    },
  ]

  export const clientFilterData=[
    {
      id:"1",
      label:"Practice Name",
      defaultValue:"select practice name"
    },
    {
      id:"2",
      label:"Client Name",
      defaultValue:"select clients"
    },
    {
      id:"3",
      label:"Status",
      defaultValue:"Select Status"
    },
 
  ]
  export const triggerFilterData=[
    {
      id:"1",
      label:"Practice Name",
      defaultValue:"select practice name"
    },
    {
      id:"2",
      label:"Client Name",
      defaultValue:"select clients"
    },
    {
      id:"3",
      label:"Process Name",
      defaultValue:"Select Process Name"
    },
    {
      id:"4",
      label:"Job Priority",
      defaultValue:"Choose Job priority"
    },
    {
      id:"5",
      label:"Frequency",
      defaultValue:"Select Frequency"
    },
 
  ]
  export const adduserData=[
    {
      id:"1",
      label:"User Name",
      defaultValue:"select practice name"
    },
    {
      id:"2",
      label:"Email Id",
      defaultValue:"select clients"
    },
    {
      id:"3",
      label:"Contact Number",
      defaultValue:"Select Process Name"
    },
    {
      id:"4",
      label:"Role",
      defaultValue:"Choose Job priority"
    },
    {
      id:"5",
      label:"Client Name",
      defaultValue:"Select Frequency"
    },
 
  ]

  export const jobsfilterData=[
    {
      id:1,
      label:"Process Filter",
      defaultValue:"select practice name"
    }
  ]




  export const notificationRowData = [
    {
      id: '1',
      name:"Yuvaraj",
      status:"pending",
      request:"requested to change frequency",
      time:"sunday 8:45pm,sep 15,2024",
      image:notify2
    },
 
    {
      id: '2',
      name:"James",
      status:"Approved",
      request:"requested to role change",
      time:"sunday 8:45pm,sep 15,2024",
      image:notify2
    },
 
    {
      id: '3',
      name:"Ameraa",
      status:"pending",
      request:"requested to role frequency",
      time:"sunday 8:45pm,sep 15,2024",
      image:notify1
    },
 
    {
      id: '4',
      name:"Tesla",
      status:"pending",
      request:"requested to change frequency",
      time:"sunday 8:45pm,sep 15,2024",
      image:notify2
    },
 
    {
      id: '5',
      name:"Kumar",
      status:"Approved",
      request:"requested to change frequency",
      time:"sunday 8:45pm,sep 15,2024",
      image:notify1
    },
 
    {
      id: '6',
      name:"abc",
      status:"Approved",
      request:"requested to change frequency",
      time:"sunday 8:45pm,sep 15,2024",
      image:notify2
    },
 
    {
      id: '7',
      name:"Yuvaraj",
      status:"pending",
      request:"requested to change frequency",
      time:"sunday 8:45pm,sep 15,2024",
      image:notify1
    },
    {
      id: '8',
      name:"Yuvaraj",
      status:"pending",
      request:"requested to change frequency",
      time:"sunday 8:45pm,sep 15,2024",
      image:notify1
    },
    {
      id: '9',
      name:"Yuvaraj",
      status:"pending",
      request:"requested to change frequency",
      time:"sunday 8:45pm,sep 15,2024",
      image:notify1
    },
    {
      id: '10',
      name:"Yuvaraj",
      status:"pending",
      request:"requested to change frequency",
      time:"sunday 8:45pm,sep 15,2024",
      image:notify1
    },
 
   
  ];