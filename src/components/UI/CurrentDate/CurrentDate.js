export default function CurrentDate() {
  const today = new Date();

  const year = today.getFullYear();
  const month = today.getMonth() + 1;
  const day = today.getDate();

  const hours = today.getHours();
  const minutes = today.getMinutes();

  const fullDate = `${year} - ${month} - ${day}`;
  const fullTime = `${hours}:${minutes}`;

  return (
    <>
      <span>
        {fullDate} // {fullTime}
      </span>
    </>
  );
}
