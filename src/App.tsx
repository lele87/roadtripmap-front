import jwtDecode from "jwt-decode";
import { useEffect } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import Controller from "./components/Controller/Controller";
import HomePage from "./pages/HomePage/HomePage";
import WelcomePage from "./pages/WelcomePage/WelcomePage";
import { loginActionCreator } from "./redux/features/usersSlice";
import { useAppDispatch, useAppSelector } from "./redux/store/hooks";
import { DecodeToken } from "./types/types";

function App() {
  const { logged } = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      const { username, id }: DecodeToken = jwtDecode(token);
      dispatch(loginActionCreator({ username, id }));
    }
  }, [dispatch, logged]);

  return (
    <Routes>
      <Route path="/" element={<Navigate to="/welcome" />} />
      <Route path="/welcome" element={<WelcomePage />} />
      <Route
        path="/home"
        element={
          <Controller>
            <HomePage />
          </Controller>
        }
      />
    </Routes>
  );
}

export default App;
