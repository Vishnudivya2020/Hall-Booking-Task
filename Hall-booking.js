import express from "express";
// import Rooms from "./local-Variables.js";
import BookingRouter from "./Routes/Booking.js";
import RoomsRouter from "./Routes/Rooms.js";

const server =express();

server.use(express.json());

 //Adding the Router for Booking Endpoints;
 server.use("/Booking",BookingRouter);
 server.use("/Rooms",RoomsRouter)



const port =4000;
server.listen(port,()=>{
    console.log(Date().toString(),"server listening on port"+port);
});


