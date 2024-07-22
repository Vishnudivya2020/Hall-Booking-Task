let Rooms =[
    {
      id: "1",
      Number_of_seats_available: "100",
      Amenities_in_room: "AC",
      Price_for_1_Hour: "250",
      BookingId: [
          "1719604124317"
      ]
  },
  {
      id: "2",
      Number_of_seats_available: "80",
      Amenities_in_room: "Free WiFi",
      Price_for_1_Hour: "150",
      BookingId: [
          "1719604124318"
      ]
  },
  {
      id: "3",
      Number_of_seats_available: "200",
      Amenities_in_room: "Free WiFi/AC",
      Price_for_1_Hour: "350",
      BookingId: [
          "1721479625404"
      ]
  }
];
let Booking = [
  {
      BookingId:"1719604124317",
      booked_Status:"Available",
      customerName: "Bharathi",
      Date: "10-15-2020",
      Start_Time: "10.00 am",
      End_Time: "1.30 pm",
      RoomId: "1"
  },
  { 
    BookingId:"1719604124318",
    booked_Status:"UnAvailable",
      customerName: "Kumar",
      Date: "02-03-2020",
      Start_Time: "9.00am",
      End_Time: "2.00pm",
      RoomId: "2"
  },
  {
    BookingId:"1719604124328",
    booked_Status:"Available",
      customerName: "Yogi",
      Date: "29-01-2020",
      Start_Time: "9.30am",
      End_Time: "12.30pm",
      RoomId: "1"
  },
  {
    booked_Status: "Available",
    customerName: "Anand",
    Date: "01-03-2020",
    start_Time: "8.00am",
    End_Time: "1.30pm",
    BookingId: "1721479625404",
    RoomId: "3"
}
];

export {Rooms , Booking};