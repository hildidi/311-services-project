import { useEffect } from "react";
import { Navigate, Routes, Route } from "react-router-dom";
import LoginForm from "./LoginForm.js";


function Logout ({ setUser }) {
  useEffect(() => {
    <Navigate to="/logout" />;
  }, []);

 return (
    <div>
      <Routes>
        <Route exact path="/" element={<LoginForm setUser={setUser}/>} />
      </Routes>
    </div>
);
};
export default Logout;
