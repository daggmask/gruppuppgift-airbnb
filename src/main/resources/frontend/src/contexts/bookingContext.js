import React, { createContext, useState, useEffect } from "react";

export const BookingContext = createContext();

const BookingContextProvider = (props) => {
  const [bookings, setBookings] = useState([]);
  const [bookingInfo, setBookingInfo] = useState(null);

  const fetchBookings = async () => {
    let res = await fetch("/rest/getAllBookings");
    try {
      res = await res.json();
      setBookings(res);
      // console.log(res);
    } catch {
      console.log("Not logged in");
    }
  };

  useEffect(() => {
    fetchBookings();
  }, []);

  const values = {
    bookings,
    setBookings,
    bookingInfo,
    setBookingInfo,
    fetchBookings
  };
  return (
    <BookingContext.Provider value={values}>
      {props.children}
    </BookingContext.Provider>
  );
};

export default BookingContextProvider;
