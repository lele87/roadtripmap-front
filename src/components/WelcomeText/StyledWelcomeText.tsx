import styled from "styled-components";

const StyledWelcomeText = styled.div`
  .welcome__image--container {
    display: flex;
    justify-content: center;
  }

  .welcome__paragraph--container {
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: "JetBrains Mono", monospace;
    font-weight: 700;
    color: #fff;
    font-size: 24px;
    letter-spacing: 1.5px;
    margin-left: 5px;
  }
`;

export default StyledWelcomeText;
