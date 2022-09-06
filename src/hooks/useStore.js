import create from "zustand";
// import { persist } from "zustand/middleware";
import { nanoid } from "nanoid";
import moment from "moment";

//TODO Import current date to use as filter in Note-components
//TODO Archived todos???

const useStore = create((set) => {
  return {
    notes: [
      {
        id: nanoid(),
        title: "note #1",
        body: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
        date: moment().format("WW"),
      },
      {
        id: nanoid(),
        title: "note #2",
        body: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
        date: moment("2022.06.06", "YYYY.MM.DD").format("WW"),
      },
      {
        id: nanoid(),
        title: "note #3",
        body: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
        date: moment("2021.03.03", "YYYY.MM.DD").format("LLL"),
      },
    ],
    addNote: ({ title, body, date }) => {
      set((state) => {
        return { notes: [...state.notes, { id: nanoid(), title, body, date }] };
      });
    },
    deleteNote: (id) => {
      set((state) => {
        return { notes: state.notes.filter((note) => note.id !== id) };
      });
    },
  };
});

export default useStore;
