import AddButton from "../../InputNewNote/AddButton/AddButton";
import CurrentDate from "../CurrentDate/CurrentDate";
import { StyledFooter } from "./Styled";

export default function Footer() {
  return (
    <StyledFooter>
      <CurrentDate />
      <AddButton />
    </StyledFooter>
  );
}
