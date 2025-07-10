import React, { useState } from "react";

function BookingForm() {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  const availableTimes = ["17:00", "18:00", "19:00"];

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Booking for ${date} at ${time}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="res-date">Choose date:</label>
      <input
        type="date"
        id="res-date"
        name="res-date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        required
      />

      <label htmlFor="res-time">Choose time:</label>
      <select
        id="res-time"
        name="res-time"
        value={time}
        onChange={(e) => setTime(e.target.value)}
        required
      >
        <option value="">Select a time</option>
        {availableTimes.map((time) => (
          <option key={time} value={time}>
            {time}
          </option>
        ))}
      </select>

      <button type="submit">Make Your reservation</button>
    </form>
  );
}

export default BookingForm;
