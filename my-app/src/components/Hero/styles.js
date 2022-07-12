import styled from "styled-components";

export const StyledDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-top: 2rem;
`;

export const StyledImg = styled.img`
  max-width: 800px;
  align-self: center;
  @media screen and (max-width: 700px) {
    width: 300px;
  }
`;
