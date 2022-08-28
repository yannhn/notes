// import { useState } from "react";
import moment from "moment";
import useStore from "../../../hooks/useStore";
import NoteItem from "../NoteItem/NoteItem";

export default function NoteList() {
  const notes = useStore((state) => state.notes);
  const deleteNote = useStore((state) => state.deleteNote);

  const today = moment().format("WW");

  const filteredItems = notes.filter((notes) => notes.date === today);

  return (
    <>
      <h2>Week: {today} of 2022</h2>
      {filteredItems.map((note) => (
        <NoteItem
          key={note.id}
          title={note.title}
          body={note.body}
          deleteNote={() => deleteNote(note.id)}
        />
      ))}
    </>
  );
}
