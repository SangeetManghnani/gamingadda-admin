// @material-ui/icons
import Dashboard from "@material-ui/icons/Dashboard";
import Person from "@material-ui/icons/Person";
import LibraryBooks from "@material-ui/icons/LibraryBooks";
import BubbleChart from "@material-ui/icons/BubbleChart";
import LocationOn from "@material-ui/icons/LocationOn";
import Notifications from "@material-ui/icons/Notifications";
import Unarchive from "@material-ui/icons/Unarchive";
import Language from "@material-ui/icons/Language";
// core components/views for Admin layout
import DashboardPage from "views/Dashboard/Dashboard.jsx";
import TableList from "views/TableList/TableList.jsx";
import CreateMatch from "views/CreateMatch/CreateMatch.jsx";

const dashboardRoutes = [{
        path: "/dashboard",
        name: "Matches",
        rtlName: "لوحة القيادة",
        icon: Dashboard,
        component: DashboardPage,
        layout: "/admin"
    },
    {
        path: "/creatematch",
        name: "Create Match",
        rtlName: "ملف تعريفي للمستخدم",
        icon: Person,
        component: CreateMatch,
        layout: "/admin"
    },
    {
        path: "/table",
        name: "Table List",
        rtlName: "قائمة الجدول",
        icon: "content_paste",
        component: TableList,
        layout: "/admin"
    }
];

export default dashboardRoutes;