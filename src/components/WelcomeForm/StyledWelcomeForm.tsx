import styled from "styled-components";

const StyledWelcomeForm = styled.div`
  position: relative;
  z-index: 1;
  background: #ffffff;
  max-width: 360px;
  margin: 0 auto 100px;
  padding: 45px;
  margin-top: 20px;
  text-align: center;
  box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2), 0 5px 5px 0 rgba(0, 0, 0, 0.24);
  height: 200px;

  .welcome-form input {
    font-family: "Roboto", sans-serif;
    outline: 0;
    background: #f2f2f2;
    width: 100%;
    border: 0;
    margin: 0 0 15px;
    padding: 15px;
    box-sizing: border-box;
    font-size: 14px;
  }
  .welcome-form button {
    font-family: "Roboto", sans-serif;
    outline: 0;
    background: #4caf50;
    width: 100%;
    border: 0;
    padding: 15px;
    color: #ffffff;
    font-size: 18px;
    -webkit-transition: all 0.3 ease;
    transition: all 0.3 ease;
    cursor: pointer;
  }
  .welcome-form button:hover,
  .welcome-form button:active,
  .welcome-form button:focus {
    background: #43a047;
  }

  .welcome-form_message {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  .welcome-form_message p {
    margin: 15px 0 0;
    color: #b3b3b3;
    font-size: 12px;
  }
  .welcome-form_message span {
    color: #4caf50;
    text-decoration: none;
    cursor: pointer;
  }

  body {
    background: #76b852;
    background: rgb(141, 194, 111);
    background: linear-gradient(
      90deg,
      rgba(141, 194, 111, 1) 0%,
      rgba(118, 184, 82, 1) 50%
    );
    font-family: "Roboto", sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`;

export default StyledWelcomeForm;
