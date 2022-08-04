import { useEffect } from "react";
import Maps from "../../components/Maps/Maps";
import { useAppDispatch, useAppSelector } from "../../redux/store/hooks";
import { loadLocationsThunk } from "../../redux/thunks/locationsThunks";
import styled from "styled-components";

const StyledHomePage = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  background-image: url("/images/caraibi.jpeg");
  background-size: cover;

  h2 {
    text-align: center;
    font-family: "Roboto";
    color: white;
    letter-spacing: 3px;
  }
`;

const HomePage = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const { id, username } = useAppSelector((state) => state.user.userInfo);

  useEffect(() => {
    dispatch(loadLocationsThunk(id));
  }, [dispatch, id]);

  return (
    <>
      <StyledHomePage>
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
