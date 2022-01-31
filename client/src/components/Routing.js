import ComplaintForm from "./ComplaintForm.js";
import CategoriesList from "./CategoriesList.js";
import { Routes, Route } from "react-router-dom";
import AllComplaintList from "./AllComplaintsList.js";

function Routing () {
  return (
    <Routes>
      <Route replace path="/complaints/new" element={<ComplaintForm/>} />
      <Route replace path="/complaints/" element={<AllComplaintList/>} />
      <Route path="/categories" element={<CategoriesList/>} />
    </Routes>
  );
};

export default Routing;
