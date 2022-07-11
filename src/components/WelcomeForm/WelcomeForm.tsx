import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/store/hooks";
import {
  userLoginThunk,
  userRegisterThunk,
} from "../../redux/thunks/usersThunks";
import StyledWelcomeForm from "./StyledWelcomeForm";

const WelcomeForm = (): JSX.Element => {
  const blankFields = {
    username: "",
    password: "",
  };

  const [formData, setFormData] = useState(blankFields);
  const [openingForm, setOpeningForm] = useState("loginForm");
  const userInfo = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();

  const changeData = (event: { target: { id: string; value: string } }) => {
    setFormData({
      ...formData,
      [event.target.id]: event.target.value,
    });
  };

  const changeForm = () => {
    openingForm === "loginForm"
      ? setOpeningForm("registerForm")
      : setOpeningForm("loginForm");
  };

  useEffect(() => {
    localStorage.getItem("token");
  }, [userInfo]);

  const handleSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault();

    openingForm === "loginForm"
      ? dispatch(userLoginThunk(formData))
      : dispatch(userRegisterThunk(formData));

    setFormData(blankFields);
  };

  return (
    <>
      <StyledWelcomeForm className="form">
        <form className="welcome-form" onSubmit={handleSubmit}>
          <label htmlFor="username"></label>
          <input
            id="username"
            formNoValidate
            autoComplete="off"
            type="text"
            value={formData.username}
            placeholder="username"
            onChange={changeData}
          />
          <label htmlFor="password"></label>
          <input
            id="password"
            formNoValidate
            autoComplete="off"
            type="password"
            value={formData.password}
            placeholder="password"
            onChange={changeData}
          />
          {openingForm === "loginForm" && (
            <>
              <button
                className="submit-button"
                disabled={formData.username === "" || formData.password === ""}
                type="submit"
              >
                Login
              </button>
              <div className="welcome-form_message">
                <p>Not registered?</p>
                <span onClick={changeForm}>Create an account</span>
              </div>
            </>
          )}
          {openingForm === "registerForm" && (
            <>
              <button
                className="submit-button"
                disabled={formData.username === "" || formData.password === ""}
                type="submit"
              >
                Register
              </button>
              <div className="welcome-form_message">
                <p>Already registered?</p>
                <span onClick={changeForm}>Sign In</span>
              </div>
            </>
          )}
        </form>
      </StyledWelcomeForm>
    </>
  );
};

export default WelcomeForm;
