import Assets from "../../pages/admin/assest";
import Automation from "../../pages/admin/automations";
import Jobs from "../../pages/admin/automations/jobs";
import Process from "../../pages/admin/automations/process";
import Triggers from "../../pages/admin/automations/triggers";
import AdminDashboard from "../../pages/admin/dashboard";
import ExceptionalTransactions from "../../pages/admin/expectional";
import ManageClient from "../../pages/admin/manage/client";
import ManageUser from "../../pages/admin/manage/user";
import Monitoring from "../../pages/admin/monitoring";
import Notification from "../../pages/admin/notification";
import ViewNotification from "../../pages/admin/notification/viewnotification";
import Queues from "../../pages/admin/queues";
import NotFound from "../../pages/notfound";
import AutomationLayout from "../nav/automationLayout";
import RootLayout from "../nav/rootLayout";

export const AdminRoutes = [{
    path :'/',
    element : <RootLayout/>,
    children:[{
        index:true,
        element:<AdminDashboard/>
    },
    
    {
        path:"/manage/client",
        element:<ManageClient/>
    },
    {
        path:"/manage/user",
        element:<ManageUser/>
    },
    {
        path:"/",
        element:<AutomationLayout/>,
        children:[
            {
                path:"/automation/process",
                element:<Process/>
            },
            {
                path:"/automation/jobs",
                element:<Jobs/>
            },
            {
                path:"/automation/triggers",
                element:<Triggers/>
            },
        ]
    },
    {
        path:"/monitoring",
        element:<Monitoring/>
    },
    {
        path:"/assets",
        element:<Assets/>
    },
    {
        path:"/queues",
        element:<Queues/>
    },
    {
        path:"/transactions",
        element:<ExceptionalTransactions/>
    },
    {
        path:"/notification",
        element:<Notification/>
    },
    {
        path:"/view-notification",
        element:<ViewNotification/>
    },
    {
        path:"/*",
        element:<NotFound/>
    }
]
}]