import styled from "styled-components";

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
  padding: 0 2em;
`;

export const StyledListAnchor = styled.a`
  text-decoration: none;
  color: #000;
  transition: all 0.3s ease 0s;

  &:hover {
    color: #bad;
  }
`;
