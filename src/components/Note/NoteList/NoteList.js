// import { useState } from "react";
import useStore from "../../../hooks/useStore";
import NoteItem from "../NoteItem/NoteItem";

export default function NoteList() {
  const notes = useStore((state) => state.notes);

  return (
    <>
      {notes.map((note) => (
        <NoteItem key={note.id} title={note.title} body={note.body} />
      ))}
    </>
  );
}
