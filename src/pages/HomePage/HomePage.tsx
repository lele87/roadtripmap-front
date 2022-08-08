import { useEffect } from "react";
import Maps from "../../components/Maps/Maps";
import { useAppDispatch, useAppSelector } from "../../redux/store/hooks";
import { loadLocationsThunk } from "../../redux/thunks/locationsThunks";
import { logoutActionCreator } from "../../redux/features/usersSlice";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import StyledHomePage from "./StyledHomePage";

const HomePage = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { id, username } = useAppSelector((state) => state.user.userInfo);

  const logOut = () => {
    dispatch(logoutActionCreator());

    localStorage.removeItem("token");
    toast.dismiss();
    toast.success("You have succesfully logged out");
    navigate("/");
  };

  useEffect(() => {
    dispatch(loadLocationsThunk(id));
  }, [dispatch, id]);

  return (
    <>
      <StyledHomePage className="homepage__container">
        <button className="homepage--logout__button" onClick={logOut}>
          Logout
        </button>
        <h2>
          Hi {username.charAt(0).toUpperCase() + username.slice(1)}, search and
          mark on the map the best places you've visited during your trips!
        </h2>
        <Maps />
      </StyledHomePage>
    </>
  );
};

export default HomePage;
