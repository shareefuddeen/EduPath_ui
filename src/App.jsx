import Navbar from "./Components/Navbar";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Home from "./Pages/Home";
import Program from "./Pages/Program";
import Career from "./Pages/Career";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Quiz from "./Pages/Quiz";
import ResetPassword from "./Pages/reset_password";
import ResetPasswordConfirm from "./Pages/Reset_password_confirm";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/" element={<Home />}></Route>
          <Route path="/program" element={<Program />}></Route>
          <Route path="/quiz" element={<Quiz/>}></Route>
          <Route path="/careers" element={<Career/>}></Route>
          <Route path="/reset-password" element={<ResetPassword/>}></Route>
          <Route path="/reset-password/:uidb64/:token" element={<ResetPasswordConfirm/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
