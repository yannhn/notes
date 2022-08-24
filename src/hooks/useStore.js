import create from "zustand";
// import { persist } from "zustand/middleware";
import { nanoid } from "nanoid";
import moment from "moment";

//TODO: Import current date to use as filter in Note-components

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
        date: new Date("August 24, 2022").toDateString(),
      },
      {
        id: nanoid(),
        title: "note #3",
        body: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
        date: new Date("August 24, 2022").toDateString(),
      },
    ],
    addNote: ({ title, body, date }) => {
      set((state) => {
        return { notes: [...state.notes, { id: nanoid(), title, body, date }] };
      });
    },
  };
});

export default useStore;
