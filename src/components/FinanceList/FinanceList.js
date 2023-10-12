import styled from "styled-components";

export const Container = styled.div`
  margin-top: 1rem;
  color: var(--grey4);
  width: 100%;
  margin-bottom: 1.5rem;
  h2 {
    margin-bottom: 0.5rem;
  }
`;
export const ListAccounts = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const CardAccount = styled.div`
  background-color: var(--bg);
  border-radius: 0.5rem;
  padding: 0.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.1rem;

  button {
    width: 3rem;
  }

  border-left: ${(props) =>
    props.type === "entrada"
      ? "5px solid var(--second-color)"
      : "5px solid var(--grey2)"};
`;
