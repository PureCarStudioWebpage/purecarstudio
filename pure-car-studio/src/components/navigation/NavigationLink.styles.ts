import styled from "styled-components";

export const ButtonWrapper = styled.ul`
  padding: 16px 32px;
  
  &:hover {
    background: #e6a478;

    & > li {
      color: #000;
    }
  }
`

export const StyledButton = styled.li`
  list-style-type: none;
  font-size: 22px;
  color: #e6a478;
  font-family: 'Roboto', sans-serif;
  font-weight: 500;
  border-bottom: 1px solid transparent;
  width: 100%;
  height: 100%;
`