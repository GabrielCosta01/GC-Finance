import styled from "styled-components";

export const ContainerMain = styled.main`
  margin-top: 1.5rem;
  padding: 0 1rem;
  display: flex;

  gap: 1.5rem;

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 0 5%;
  }
  @media (min-width: 768px) {
    flex-direction: row;
    padding: 0 5%;
  }
  @media (min-width: 1024px) {
    flex-direction: row;
    padding: 0 10%;
  }
  @media (min-width: 1440px) {
    padding: 0 15%;
  }
`;

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  @media (min-width: 768px) {
    width: 50%;
  }
`;
