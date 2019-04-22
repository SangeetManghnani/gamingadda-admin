// @material-ui/icons
import Dashboard from "@material-ui/icons/Dashboard";
import Person from "@material-ui/icons/Person";
// core components/views for Admin layout
import DashboardPage from "views/Dashboard/Dashboard.jsx";
import CreateMatch from "views/CreateMatch/CreateMatch.jsx";

const dashboardRoutes = [{
        path: "/matches",
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
    }
];

export default dashboardRoutes;