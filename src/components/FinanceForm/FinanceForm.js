import styled from "styled-components";

export const FormContainer = styled.form`
  width: 100%;
  margin-top: 1.5rem;
  padding: 1rem;
  border: 1px solid var(--grey2);
  border-radius: 4px;
`;

export const Box = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

export const ContainerInput = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: left;
`;

export const Input = styled.input`
  width: 100%;
  color: black;
  background-color: var(--grey1);
  padding: 1rem 1.2rem;
  border: 1px solid var(--grey2);
  border-radius: 4px;
  font-size: 1rem;

  &:focus {
    border: 1px solid red;
  }
`;

export const Label = styled.label`
  background-color: transparent;
  padding-left: 1.2rem;
  font-size: 1rem;
  color: var(--grey3);
`;
export const ContainerSelect = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
`;

export const LabelSelect = styled.label`
  color: var(--grey4);
`;

export const Select = styled.select`
  width: 100%;
  background-color: var(--grey1);
  color: var(--grey4);
  padding: 1rem 1.2rem;
  border: 1px solid #dadce0;
  border-radius: 4px;
  font-size: 1rem;
  outline: none;
  transition: border 0.3s, box-shadow 0.3s;
`;

export const ButtonForm = styled.button`
  width: 100%;
  color: var(--grey1);
  border: var(--grey3);
  border-radius: 0.6rem;
  padding: 1rem 1.2rem;
  background-color: var(--color-primary);
  align-self: center;
`;
