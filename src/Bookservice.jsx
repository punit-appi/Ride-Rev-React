
import axios from "axios";
import React, { useState } from "react";

const BookService = () => {
  const [vehicleNumber, setVehicleNumber] = useState("");
  const [selectedDate, setSelectedDate] = useState(
    new Date().toISOString().slice(0, 16) // Initialize with a valid default value for datetime-local
  );

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic validation
    if (!vehicleNumber || !selectedDate) {
      alert("Please fill in all fields.");
      return;
    }

    // Prepare payload
    

    try {
      
      const payload = { vehicleNumber,selectedDate};
      const {data} = await axios.post("http://localhost:7000/slots",payload)
      alert("Service slot booked successfully!");
      // Handle the response
      // if (data.ok) {
      //   const responseData = await data.json();
      //   console.log("Response from server:", responseData);
       
      // } else {
      //   const errorData = await data.json();
      //   alert(`Failed to book service: ${errorData.message || "Unknown error"}`);
      // }
    } catch (error) {
      console.error("Error sending data:", error);
      alert("An error occurred while booking the service.");
    }
  };

  return (
    <div style={{ display: "flex", height: "100vh" }}>
      {/* Sidebar */}
      <div className="sidebar">
        <h2>
          <img
            src="https://download.logo.wine/logo/KTM/KTM-Logo.wine.png"
            alt="KTM Logo"
            height="50px"
            width="100px"
          />
        </h2>
        <ul>
          <li>
            <a href="/">
              <button>Home</button>
            </a>
          </li>
          <li>
            <a href="/register">
              <button>Register</button>
            </a>
          </li>
          <li>
            <a href="/Newmodels">
              <button>New Models</button>
            </a>
          </li>
          <li>
            <a href="/Bookservice">
              <button>Book Service</button>
            </a>
          </li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="main-content">
        <form className="form-containerr" onSubmit={handleSubmit}>
          <h2 style={{ color: "white" }}>Book Service Slot</h2>

          {/* Vehicle Number Input */}
          <label style={{ color: "white" }}>Vehicle Number:</label>
          <input
            type="text"
            name="vehicleNumber"
            value={vehicleNumber}
            onChange={(e) => setVehicleNumber(e.target.value)}
            placeholder="Enter vehicle number"
          />

          {/* Select Date Input */}
          <label style={{ color: "white" }}>Select Date:</label>
          <input
            type="datetime-local"
            name="selectedDate"
            value={selectedDate}
            onChange={(e) => setSelectedDate(e.target.value)}
          />

          {/* Submit Button */}
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default BookService;
