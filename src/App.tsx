import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import WelcomeText from "./components/WelcomeText/WelcomeText";
import WelcomePage from "./pages/WelcomePage/WelcomePage";

function App() {
  return (
    // <Routes>
    //   <Route path="/" element={<Navigate to="/welcome" />} />
    //   <Route path="/welcome" element={<WelcomePage />} />
    // </Routes>
    <WelcomeText />
  );
}

export default App;
