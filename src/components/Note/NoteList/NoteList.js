import { useState } from "react";
import NoteItem from "../NoteItem/NoteItem";

export default function NoteList() {
  const [notes, setNotes] = useState([
    {
      id: 1,
      title: "note #1",
      body: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
      date: "XX.XX.XXXX",
    },
    {
      id: 2,
      title: "note #2",
      body: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
      date: "XX.XX.XXXX",
    },
    {
      id: 3,
      title: "note #3",
      body: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
      date: "XX.XX.XXXX",
    },
  ]);

  return (
    <>
      {notes.map((note) => (
        <NoteItem
          key={note.id}
          title={note.title}
          body={note.body}
          date={note.date}
        />
      ))}
    </>
  );
}
