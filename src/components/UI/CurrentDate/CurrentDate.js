import { useState, useEffect } from "react";
import moment from "moment";
import "moment-timezone";

export default function CurrentDate() {
  const [date, setDate] = useState(moment().format("hh:mm:ss"));

  useEffect(() => {
    setInterval(() => setDate(moment().format("hh:mm:ss")), 1000);
  }, []);

  return (
    <>
      <span>{date}</span>
    </>
  );
}
