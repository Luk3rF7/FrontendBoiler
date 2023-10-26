import React from "react";

export function Date() {
  const [currentTime, setCurrentTime] = React.useState("");
  const [currentDay, setCurrentDay] = React.useState("");

  async function loadDates() {
    const module = await import("../utils/date");
    setCurrentTime(module.getCurrentTime());
    setCurrentDay(module.getCurrentDay());
  }

  return currentTime && currentDay ? (
    <div>
      <p>{currentTime}</p>
      <p>{currentDay}</p>
    </div>
  ) : (
    <button onClick={loadDates}>Click to load dates</button>
  );
}
