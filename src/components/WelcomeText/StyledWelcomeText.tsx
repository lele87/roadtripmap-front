import styled from "styled-components";

const StyledWelcomeText = styled.div`
  background-color: pink;

  .welcome__image--container {
    display: flex;
    justify-content: center;
  }

  .welcome__paragraph--container {
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: "Cairo", sans-serif;
    font-weight: 700;
    color: #fff;
    font-size: 35px;
  }
`;

export default StyledWelcomeText;
