import styled from "styled-components";

export const Container = styled.div`
  grid-column: 1/2;
  grid-row: 1/2;
  margin-top: 45px;
  background-color: #b5b4b832;
  width: auto;
  @media screen and (max-width: 768px) {
    display: flex;
    height: 100%;
    grid-column: 1/2;
    grid-row: 1/2;
  }
`;

export const ContainerFilter = styled.div`
  grid-column: 1/2;
  display: ${({ boolean }) => (boolean ? "none" : "flex")};
  flex-direction: column;
  flex-wrap: wrap;
  grid-row: 1/2;
  justify-content: center;
  background-color: none;
  margin-top: 45px;
  justify-content: center;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const FilterDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  font-size: 15px;
  margin-left: 30px;
  margin-bottom: 40px;
`;

export const ItemLi = styled.li`
  padding: 10px;
  font-weight: 300;
  cursor: pointer;
  color: #999999;
  &:hover {
    color: #0066fc;
    text-decoration: underline;
  }
`;

export const Title = styled.div`
  font-weight: 900;
  font-size: 15px;
  margin-bottom: 5px;
`;

export const Category = styled.div`
  font-weight: 900;
  font-size: 20px;

  margin-left: 30px;
`;

export const LabelStyled = styled.label`
  font-size: 15px;
  margin-right: -15px;
  margin-bottom: 10px;
  @media screen and (max-width: 768px) {
    margin-right: 5px;
    margin-bottom: 0px;
  }
`;

export const SelectStyled = styled.select`
  background-color: transparent;
  color: #999999;
  border: none;
  font-size: 15px;
  cursor: pointer;
`;

export const OptionStyled = styled.option`
  background-color: #43464f;
  color: #999999;
  &:hover {
    color: black;
  }
`;
export const Space = styled.div`
  margin: 10px;
`;

export const ButtonFilter = styled.button`
  width: max-content;
  background-color: #2b2929;
  color: #dddddd;
  border-radius: 5px;
  border: none;
  margin: 10px;
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin: 10px;
`;