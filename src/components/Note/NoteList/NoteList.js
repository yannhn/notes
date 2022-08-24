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

  const today = moment().format("WW");
  console.log(today);

  const filteredItems = notes.filter((notes) => notes.date === today);
  console.log(filteredItems);

  return (
    <>
      <h2>Week: {today} of 2022</h2>
      {filteredItems.map((note) => (
        <NoteItem key={note.id} title={note.title} body={note.body} />
      ))}
    </>
  );
}
