import express from 'express';
import {Rooms , Booking} from './local-Variables.js'
const  BookingRouter = express.Router();

//Get All Booking Details
BookingRouter.get("/",(req,res) =>{
    res.send({Booking});
});

//All rooms with Booked Data
Rooms.forEach(room => {
    room.bookings = Booking.filter(booking => booking.RoomId === room.id).map(booking => ({
      BookingId: booking.BookingId,
      booked_Status: booking.booked_Status,
      customerName: booking.customerName,
      Date: booking.Date,
      Start_Time: booking.Start_Time,
      End_Time: booking.End_Time
    }));
  });
  
  BookingRouter.get('/Rooms', (req, res) => {
    res.status(200).json(Rooms);
  });

//Customer details with booked data
  BookingRouter.get('/Customer-details',(req,res) =>{
    const customerBookings = Booking.map(booking =>{
      const room =Rooms.find(room => room.id ===booking.RoomId);
      return{
        customerName:booking.customerName,
        RoomName: room ? room.RoomName : null,
        Date: booking.Date,
        Start_Time: booking.Start_Time,
        End_Time: booking.End_Time
      }
    });
    res.status(200).json(customerBookings);
  });

// Customer has booked the rooms with the below details
  BookingRouter.get('/Customer-Booking-Details',(req,res) =>{
    const customerBookDetails = Booking.map(booking =>{
      const room =Rooms.find(room => room.id ===booking.RoomId);
      return{
        customerName:booking.customerName,
        RoomName: room ? room.RoomName : null,
        Date: booking.Date,
        Start_Time: booking.Start_Time,
        End_Time: booking.End_Time,
        BookingId:booking.BookingId,
        booked_Status:booking. booked_Status,
      }
    });
    res.status(200).json(customerBookDetails );
  });


// Create the booking details
BookingRouter.post("/",(req,res) =>{
    const {body}=req;
 
  Booking.push({...body,BookingId:Date.now().toString(),RoomId:null});
      res.send({msg:"Added Booking Details"});
});

//Assing the rooms Id for the Booked Rooms.
BookingRouter.patch("/Room_Booking/:BookingId", (req, res) => {
    const { body } = req;
    const { RoomId } =req. body;
    const { BookingId } = req.params;
  
    console.log('Request Body:', body);
    console.log('RoomId:', RoomId);
    console.log('BookingId:', BookingId);

    console.log('Booking Array:',Booking);

    const BookObj = Booking.find(book =>book.BookingId === BookingId);
    const RoomObj = Rooms.find(room =>room.id === RoomId)
   console.log("BookObj:",BookObj);
   console.log("RoomObj:",RoomObj);

    if(BookObj && RoomObj){
   // Find the index of the booking
     const index = Booking.findIndex(book => book.BookingId === BookingId);
    const RoomIndex =Rooms.findIndex(
        (room)=>room.id === RoomId
    );
     console.log('Found Index:', index);
  
    if (index === -1) {
      return res.status(404).send({ msg: "Booking not found" });
    }
  
     Booking[index].RoomId = RoomId;
    //  Rooms[RoomIndex].Booking =[
    //    ...Rooms[RoomIndex].Booking.BookingId,
      
    //  ];
    //Add BookingId to the RoomObj
    if(!RoomObj.BookingId){
        RoomObj.BookingId = [];
    }
    RoomObj.BookingId.push(BookingId);
    console.log('Updated RoomObj:',RoomObj);
    res.status(200).send({ msg: "Room Booking successFully" });
    }else{
    //   res.status(400).send({msg:"Please check Room & Booking Id's"})  
    if(!BookObj)console.error('BookObj is undefined');
    if(!RoomObj)console.error('RoomObj is undefined');
    return res.status(404).send({msg:"Booking or Room not found"})

}
  });
  
 

export  default BookingRouter;
