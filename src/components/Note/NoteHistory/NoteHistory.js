// import { useState } from "react";
import useStore from "../../../hooks/useStore";
import NoteItem from "../NoteItem/NoteItem";

export default function NoteHistory() {
  const notes = useStore((state) => state.notes);

  const dates = notes.map((note) => note.date);
  const uniqueDates = [...new Set(dates)];

  //TODO: Should only display the input of the current week
  //TODO: filter by current week?

  //FIXME: Currently just shows the last input

  //TODO: The Note should always show the note of the current week
  //FIXME: There should be no button to input a date, it should automatically detect when the note was created

  const sortedDate = uniqueDates.sort((a, b) => new Date(b) - new Date(a));
  console.log(sortedDate);
  const recentDate = sortedDate.slice(0, 1);
  console.log(recentDate);

  return (
    <>
      {uniqueDates
        .sort((a, b) => new Date(b) - new Date(a))
        .map((date) => (
          <section key={date}>
            <h2>{date}</h2>
            {notes
              .filter((note) => note.date === date)
              .map((note) => (
                <NoteItem key={note.id} title={note.title} body={note.body} />
              ))}
          </section>
        ))}
    </>
  );
}
