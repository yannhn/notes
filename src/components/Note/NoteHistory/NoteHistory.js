// import { useState } from "react";
import useStore from "../../../hooks/useStore";
import NoteItem from "../NoteItem/NoteItem";

export default function NoteHistory() {
  const notes = useStore((state) => state.notes);

  const dates = notes.map((note) => note.date);
  const uniqueDates = [...new Set(dates)];

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
