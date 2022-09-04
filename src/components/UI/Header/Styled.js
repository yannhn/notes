import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const StyledHeader = styled.header`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  border-bottom: 2px solid black;
  padding: 0.2em 1em;
`;

export const StyledTitle = styled.h1`
  font-size: 2rem;
  margin-right: auto;
`;

export const StyledListItem = styled.li`
  list-style: none;
  display: inline-block;
  padding: 0 1em;
`;

// export const StyledListAnchor = styled(NavLink)`
//   text-decoration: none;
//   color: #000;
//   transition: 0.2s ease;

//   &:hover {
//     color: #bad;
//     text-decoration-line: underline;
//     text-decoration-style: wavy;
//   }
// `;

export const StyledListAnchor = styled(NavLink)`
  display: inline-block;
  position: relative;

  text-decoration: none;
  color: black;

  &::after {
    content: "";
    position: absolute;
    width: 100%;
    transform: scaleX(0);
    height: 2px;
    bottom: 0;
    left: 0;
    background-color: black;
    transform-origin: bottom right;
    transition: transform 0.25s ease-out;
  }
  &:hover::after {
    transform: scaleX(1);
    transform-origin: bottom left;
    font-weight: bold;
  }
`;
