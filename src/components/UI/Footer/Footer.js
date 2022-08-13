import AddNoteButton from "../../InputNewNote/AddNoteButton/AddNoteButton";
import CurrentDate from "../CurrentDate/CurrentDate";
import { StyledFooter } from "./Styled";

export default function Footer() {
  return (
    <StyledFooter>
      <CurrentDate />
      <AddNoteButton />
    </StyledFooter>
  );
}
