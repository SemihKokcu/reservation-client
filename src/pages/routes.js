import React from "react";
import Reservation from "./reservation/Reservation";
import Home from "./home/Home";
import Profile from "./profile/Profile";
import Login from "./auth/Login/Login";
import Register from "./auth/Register/Register";
import Dashboard from "./dashboard/Dashboard";

    const routes  = [

        {
            path:"/dashboard",
            component:<Dashboard/>,
            private:true,
            layout:"/admin",
            name:"Randevular",
            icon: "ni ni-tv-2 text-primary",

        },
        {
            path:"/home",
            component:<Home/>,
            private:true,
            layout:"/",
            name:"dashboard",
            icon: "ni ni-tv-2 text-primary",

        },
        {
            path:"/profile",
            component:<Profile/>,
            private:true,
            layout:"/",
            name:"dashboard",
            icon: "ni ni-tv-2 text-primary",

        },
        {
            path:"/login",
            component:<Login/>,
            private:false,
            layout:"/",
            name:"dashboard",
            icon: "ni ni-tv-2 text-primary",

        },
        {
            path:"/register",
            component:<Register/>,
            private:false,
            layout:"/",
            name:"dashboard",
            icon: "ni ni-tv-2 text-primary",

        },

    ];


export default routes;


