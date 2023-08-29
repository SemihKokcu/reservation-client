import React from "react";
import { Container } from "reactstrap";
import ReservationHeader from "./ReservationHeader";
import ReservationPivot from "./ReservationPivot";

const Dashboard = ()=>{

    return(
        <>
          <ReservationHeader />
          <ReservationPivot></ReservationPivot>
       
        </>
    )
}

export default Dashboard;