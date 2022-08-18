import { useState, useEffect } from "react";

export default function CurrentDate() {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    setInterval(() => setDate(new Date()), 1000);
  }, []);

  const today = date.toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });

  const time = date.toLocaleString("en-US", {
    hour: "numeric",
    minute: "numeric",
    hour12: false,
    second: "numeric",
  });

  return (
    <>
      <span>
        {today} ::: {time}
      </span>
    </>
  );
}
