import create from "zustand";
import { nanoid } from "nanoid";

const useStore = create((set) => {
  return {
    notes: [
      {
        id: nanoid(),
        title: "note #1",
        body: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
        date: new Date("December 17, 1995").toISOString(),
      },
      {
        id: nanoid(),
        title: "note #2",
        body: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
        date: new Date("December 17, 1995").toISOString(),
      },
      {
        id: nanoid(),
        title: "note #3",
        body: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
        date: new Date("December 17, 1995").toISOString(),
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
