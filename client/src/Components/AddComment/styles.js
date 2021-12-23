import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: left;
  width: 60%;
`;

export const Star = styled.label`
  & .star {
    cursor: pointer;
    font-size: 40px;
    transition: color 200ms;
  }
  & .starDisable {
    color: lightgrey;
    cursor: pointer;
    font-size: 40px;
    transition: color 200ms;
  }
  & input[type="radio"] {
    display: none;
  }
`;