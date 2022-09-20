import AddNoteButton from "../../InputNewNote/AddNoteButton/AddNoteButton";
import CurrentDate from "../CurrentDate/CurrentDate";
import { StyledFooter } from "./Styled";

export default function Footer({ handleOpen }) {
  return (
    <StyledFooter>
      <CurrentDate />
      <AddNoteButton handleOpen={handleOpen} />
    </StyledFooter>
  );
}
