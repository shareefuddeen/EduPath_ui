import { useEffect } from 'react'
import Lenis from '@studio-freight/lenis'
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
   useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // easeOutExpo
      smooth: true,
    })

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    return () => {
      lenis.destroy()
    }
  }, [])
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
