import '../App.css';
import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Login.js"
import Logout from "./Logout.js"
import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";
import ModifyComplaintForm from "./ModifyComplaintForm"

import NavBar from "./NavBar";
import Header from "../layout/Header";
import ComplaintForm from "./ComplaintForm.js";
import AllComplaintsList from "./AllComplaintsList";
import { useNavigate } from 'react-router';

function App(){

  const [user, setUser] = useState(null); console.log('Current User ', user)
  const [authenticated, setAuthenticated ] = useState(false); console.log("authenticated ", authenticated)

  const [ complaints, setComplaints ] = useState( [] );
  const [ users, setUsers ] = useState( [] ); console.log('Users ', users)

  //  GET complaints
    useEffect( ()=> {   
    fetch('/complaints')
    .then(r => r.json() )
    .then( 
      (complaintsFetchedData) => { 
      console.log("complaintsFetchedData: ", complaintsFetchedData) 
      setComplaints(complaintsFetchedData)
      }
          )
  // GET users
    fetch('/me')
    .then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
    }, []);

  const handleUpdateComplaint = (complaintToUpdate) => { 
    let editComplaintArray = complaints.filter((eachComplaint) => {
      return eachComplaint.id ==complaintToUpdate
    })}
    
  // DELETE complaint
    
    const handleDeleteComplaint = (complaintToDelete) =>{ 
        let updatedComplaintArray = complaints.filter( (eachComplaint) => {
          return eachComplaint.id !== complaintToDelete
      })
        setComplaints( [...updatedComplaintArray] )
      
      fetch(`/complaints/${complaintToDelete}`, {
          method: "DELETE",
        });
        
  }

  return(
  <>
   <div className="head-container">
    <BrowserRouter>
    
    <NavBar user={user} setUser={setUser} />
    <Header/>
      <Routes>
        <Route path="/login" element={<LoginForm setUser={setUser}/>}/>
        <Route path="/signup" element={<SignupForm setUser={setUser}/>}/>
        <Route path="/complaints/new" element={<ComplaintForm/>} />
        <Route path="/complaints" element={<AllComplaintsList complaints={complaints} handleDeleteComplaint={handleDeleteComplaint}/>}/>
        <Route path="/complaints/:id/edit" element={<ModifyComplaintForm complaints={complaints} handleUpdateComplaint={handleUpdateComplaint}/>}/>
        <Route 
          path="/" element={user ? 
            (<Login  
              setUser={setUser} 
              user={user} />
            ):(
            <> 
            <Logout
                setUser={setUser} />
            </>)
        } />
      </Routes>
    </BrowserRouter>
        


    </div>
  </>

  );
  }
export default App;