import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
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
  const [passwordType, setPasswordType] = useState("password");
  const [eye, setEye] = useState(true);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [type, settype] = useState(false);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [openingForm, setOpeningForm] = useState("loginForm");
  const userInfo = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

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
    const token = localStorage.getItem("token");
    if (token) {
      navigate("/home");
    }
  }, [navigate, userInfo]);

  const handleSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault();

    openingForm === "loginForm"
      ? dispatch(userLoginThunk(formData))
      : dispatch(userRegisterThunk(formData));

    setFormData(blankFields);
  };

  const showHidePassword = () => {
    if (passwordType === "password") {
      setPasswordType("text");
      setEye(false);
      settype(true);
    } else {
      setPasswordType("password");
      setEye(true);
      settype(false);
    }
  };

  return (
    <>
      <StyledWelcomeForm className="form">
        {openingForm === "loginForm" && (
          <form className="welcome__form--login" onSubmit={handleSubmit}>
            <div className="input__text">
              <div className="input__text--username">
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
              </div>
              <div className="input__text--password">
                <label htmlFor="password"></label>
                <input
                  id="password"
                  formNoValidate
                  autoComplete="off"
                  type={passwordType}
                  value={formData.password}
                  placeholder="password"
                  onChange={changeData}
                />
                <i
                  onClick={showHidePassword}
                  className={`fa ${eye ? "fa-eye-slash" : "fa-eye"}`}
                ></i>
              </div>
            </div>
            <>
              <button
                className="submit__button"
                disabled={formData.username === "" || formData.password === ""}
                type="submit"
              >
                Login
              </button>
              <div className="welcome__form_message">
                <p>Not registered?</p>
                <span onClick={changeForm}>Create an account</span>
              </div>
            </>
          </form>
        )}
        {openingForm === "registerForm" && (
          <>
            <form className="welcome__form--register" onSubmit={handleSubmit}>
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
              <div className="input__text--password">
                <label htmlFor="password"></label>
                <input
                  id="password"
                  formNoValidate
                  autoComplete="off"
                  type={passwordType}
                  value={formData.password}
                  placeholder="password"
                  onChange={changeData}
                />
                <i
                  onClick={showHidePassword}
                  className={`fa ${eye ? "fa-eye-slash" : "fa-eye"}`}
                ></i>
              </div>

              <button
                className="submit__button"
                disabled={formData.username === "" || formData.password === ""}
                type="submit"
              >
                Register
              </button>
              <div className="welcome__form_message">
                <p>Already registered?</p>
                <span onClick={changeForm}>Sign In</span>
              </div>
            </form>
          </>
        )}
      </StyledWelcomeForm>
    </>
  );
};

export default WelcomeForm;
