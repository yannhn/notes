import { nanoid } from "nanoid";
import { useState } from "react";
import useStore from "../../../hooks/useStore";

export default function InputNote() {
  const [newTitle, setNewTitle] = useState("");
  const [newBody, setNewBody] = useState("");
  const [newDate, setNewDate] = useState("");

  const addNote = useStore((state) => state.addNote);

  const submitHandler = (event) => {
    event.preventDefault();
    const newNote = {
      id: nanoid(),
      title: newTitle,
      body: newBody,
      date: newDate,
    };
    addNote(newNote);
  };

  return (
    <form onSubmit={submitHandler}>
      <label htmlFor="title">Input Title</label>
      <input
        id="title"
        type="text"
        onChange={(event) => setNewTitle(event.target.value)}
      />
      <label htmlFor="body">Input Body</label>
      <textarea
        id="body"
        type="text"
        onChange={(event) => setNewBody(event.target.value)}
      />
      <label htmlFor="date">Set Date</label>
      <input
        id="date"
        type="date"
        onChange={(event) => setNewDate(event.target.value)}
      />
      <button type="submit">Add note</button>
    </form>
  );
}
