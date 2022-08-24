// import { useState } from "react";
import moment from "moment";
import useStore from "../../../hooks/useStore";
import NoteItem from "../NoteItem/NoteItem";

export default function NoteList() {
  const notes = useStore((state) => state.notes);

  //TODO: Should only display the input of the current week
  //TODO: filter by current week?

  //FIXME: Currently just shows the last input

  //TODO: The Note should always show the note of the current week
  //FIXME: There should be no button to input a date, it should automatically detect when the note was created

  const today = moment();

  if (notes.date === today) {
    console.log("WORKED");
  } else {
    console.log("DID NOT WORK");
  }

  const filteredItems = notes.filter((notes) => notes.date === today);
  console.log(filteredItems);

  return (
    <>
      {notes.map((note) => (
        <NoteItem key={note.id} title={note.title} body={note.body} />
      ))}
    </>
  );
}
