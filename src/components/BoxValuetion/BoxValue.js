import styled from "styled-components";

export const ContainerSection = styled.section`
  width: 100%;
  height: 15vh;
  color: var(--grey4);
  border: 1px solid var(--grey2);
  border-radius: 4px;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  div {
    color: var(--grey4);
    display: flex;
    justify-content: space-between;

    h4 {
      font-weight: 700;
    }
    span {
      color: var(--color-primary2);
      font-weight: 700;
    }
  }
`;
