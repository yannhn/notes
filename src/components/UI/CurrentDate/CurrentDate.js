import { useState, useEffect } from "react";
import moment from "moment";
import "moment-timezone";

export default function CurrentDate() {
  const [date, setDate] = useState(
    moment().format("YYYY [//] ddd [of Week] Wo [//] HH:mm:ss")
  );

  useEffect(() => {
    setInterval(() => {
      setDate(moment().format("YYYY [//] ddd [of Week] Wo [//] HH:mm:ss"));
    }, 1000);
  }, []);

  return (
    <>
      <span>{date}</span>
    </>
  );
}
