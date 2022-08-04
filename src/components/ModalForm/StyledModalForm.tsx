import styled from "styled-components";

const StyledModalForm = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 500px;
  height: 500px;
  margin: 0 auto;
  background: #f2f2f2;
  color: white;
  z-index: 1000;
  border-radius: 16px;
  box-shadow: 0 5px 20px 0 rgba(0, 0, 0, 0.04);

  form {
    display: flex;
    flex-direction: column;
    gap: 0.3rem;
    width: 16rem;
    margin: 0 2rem;
  }

  input,
  textarea {
    color: black;
    font-size: 14px;
    letter-spacing: 1px;
    background: rgba(136, 126, 126, 0.04);
    padding: 10px 20px;
    border: none;
    outline: none;
    box-sizing: border-box;
    border: 1px solid #000;
    margin-bottom: 50px;
    text-align: center;
    margin-bottom: 27px;
    font-weight: 300;
    min-width: 256px;
    max-width: 256px;
    min-height: 38.5px;
    max-height: 404px;
    font-family: "Lucida Grande", Verdana;
  }

  input::placeholder,
  textarea::placeholder {
    color: #000;
  }

  label {
    margin: 0;
    text-align: center;
    padding-bottom: 10px;
    font-weight: 300;
    font-size: 22px;
    line-height: 25px;
    letter-spacing: 1px;
  }

  .form__buttons {
    display: flex;
    justify-content: center;
    gap: 10px;

    &--close,
    &--submit {
      cursor: pointer;
      font-weight: 500;
      padding: 4px 8px;
      border-radius: 8px;
      border: none;
      font-size: 18px;
      color: #fff;
      background: #000;
      transition: all 0.25s ease;
      box-shadow: 0 5px 20px 0 rgba(0, 0, 0, 0.06);
    }
  }
`;

export default StyledModalForm;
