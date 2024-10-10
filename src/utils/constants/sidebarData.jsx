import home from "../../assets/dashboard/Side Navbar/Home.png"
import manage from "../../assets/dashboard/Side Navbar/Manage.png"
import monitoring from "../../assets/dashboard/Side Navbar/Monitorimg.png"
import queue from "../../assets/dashboard/Side Navbar/Queues.png"
import assets from "../../assets/dashboard/Side Navbar/assets.png"
import setting from "../../assets/dashboard/Side Navbar/setting.png"
import logout from "../../assets/dashboard/Side Navbar/logout.png"
import automation from "../../assets/dashboard/Side Navbar/Automation.png"
import notification from "../../assets/dashboard/Side Navbar/notificaton.png"
export const sideBar =[
    {
        path: "/",
        name: "Dashboard",
        id:"dashboard",
        icon: home,
    },
    {
        path: "/manage/client",
        name: "Manage",
        id:"manage",
        icon: manage,
        isNested:[

            {
                path: "/manage/client",
                name: "Client",
                icon:"" ,
                id:"manageclient"
            
              },
              {
                path: "/manage/user",
                name: "User",
                icon: "",
                id:"manageuser"
              },
        ]
      },
    {
        path: "/automation/process",
        name: "Automations",
        id:"automation",
        icon:automation ,
        isNested:[

            {
                path: "/automation/process",
                name: "Process",
                icon:"" ,
                id:"process"
            
              },
              {
                path: "/automation/jobs",
                name: "Jobs",
                icon: "",
                id:"jobs"
              },
              {
                path: "/automation/triggers",
                name: "Triggers",
                icon: "",
                id:"triggers"
              },
        ]
      },
    {
        path: "/monitoring",
        name: "Monitoring",
        id:"monitoring",
        icon:monitoring,
        isNested:[

              {
                path: "/monitoring",
                name: "Process",
                icon: "",
                id:"process"
              },
        ]
      },
      {
        path: "/queues",
        name: "Queues",
        icon:queue,
        id:"queues"
    
      },
      {
        path: "/assets",
        name: "Assets",
        icon:assets,
        id:"assets"
    
      },
      {
        path: "/transactions",
        name: "Exceptional Transactions",
        icon:assets,
        id:"transactions"
    
      },
      {
        path: "/notification",
        name: "Notifications",
        icon:notification,
        id:"notifications"
    
      },
      {
        path: "/settings",
        name: "Settings",
        icon:setting,
        id:"settings"
    
      },
      {
        path: "/logout",
        name: "Logout",
        icon:logout ,
        id:"logout"
    
      },
]