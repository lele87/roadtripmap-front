import jwtDecode from "jwt-decode";
import { useEffect } from "react";
import { Toaster } from "react-hot-toast";
import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import AntiController from "./components/AntiController/AntiController";
import Controller from "./components/Controller/Controller";
import LoadingSpinner from "./components/LoadingSpinner/LoadingSpinner";
import ModalForm from "./components/ModalForm/ModalForm";
import HomePage from "./pages/HomePage/HomePage";
import WelcomePage from "./pages/WelcomePage/WelcomePage";
import { loginActionCreator } from "./redux/features/usersSlice";
import { useAppDispatch, useAppSelector } from "./redux/store/hooks";
import { DecodeToken } from "./types/types";

function App() {
  const { logged } = useAppSelector((state) => state.user);
  const { loaded } = useAppSelector((state) => state.ui);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      const { username, id }: DecodeToken = jwtDecode(token);
      dispatch(loginActionCreator({ username, id }));
    }
  }, [dispatch, logged]);

  return (
    // <>
    //   {loaded && <LoadingSpinner />}
    //   <Routes>
    //     <Route path="/" element={<Navigate to="/welcome" />} />
    //     <Route
    //       path="/welcome"
    //       element={
    //         <AntiController>
    //           <WelcomePage />
    //         </AntiController>
    //       }
    //     />
    //     <Route
    //       path="/home"
    //       element={
    //         <Controller>
    //           <HomePage />
    //         </Controller>
    //       }
    //     />
    //   </Routes>
    //   <Toaster position="bottom-center" reverseOrder={false} />
    // </>
    <ModalForm />
  );
}

export default App;
