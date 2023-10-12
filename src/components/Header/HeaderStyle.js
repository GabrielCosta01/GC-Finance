import { styled } from "styled-components";

export const HeaderContainer = styled.header`
  height: 10vh;
  background-color: var(--grey1);
  display: flex;
  align-items: center;
  box-shadow: 0 0 5px 0 rgb(0, 0, 0, 0.2);

  div {
    width: 100%;
    display: flex;
    justify-content: left;
    padding-left: 7rem;

    img {
      width: 6rem;
    }

    @media (max-width: 720px) {
      padding-left: 10%;
    }
  }
`;
