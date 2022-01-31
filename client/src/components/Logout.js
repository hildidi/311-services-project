import { useEffect } from "react";
import { Navigate, Routes, Route } from "react-router-dom";
import LoginForm from "./LoginForm.js";
import SignupForm from "./SignupForm.js";


function Logout ({ setUser }) {
  useEffect(() => {
    <Navigate to="/login" />;
  }, []);

 return (
    <div>
      <Routes>
        <Route exact path="/" element={<LoginForm setUser={setUser}/>} />
        <Route exact path="/signup" element={<SignupForm />} />
      </Routes>
    </div>
);
};
export default Logout;
