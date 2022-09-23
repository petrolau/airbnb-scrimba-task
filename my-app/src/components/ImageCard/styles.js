import styled from "styled-components";

export const StyledCard = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 1.5rem;
  margin-left: 1.5rem;
  width: 100%;
  position: relative;
`;

export const StyledImg = styled.img`
  width: 100%;
`;

export const StyledTitle = styled.div`
  color: #ff5a5f;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 3;
`;

export const StyledSpans = styled.div`
  font-weight: bold;
`;

export const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
`;

export const StyledWrap = styled.div`
  display: flex;
  flex-direction: row;
`;

export const StyledDivCard = styled.div`
  position: absolute;
  top: 6px;
  left: 6px;
  background-color: white;
  padding: 5px 7px;
  border-radius: 2px;
  font-weight: bold;
`;
