import '../App.css';
import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Login.js";
import Logout from "./Logout.js";
import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";
import ModifyComplaintForm from "./ModifyComplaintForm";
import AllComplaintsList from "./AllComplaintsList";
import ComplaintForm from "./ComplaintForm.js";

import Banner from "../layout/Banner";
import Header from "../layout/Header";
import NavBar from "./NavBar";
import Footer from "../layout/Footer";

function App(){

  const [user, setUser] = useState(null);
  const [authenticated, setAuthenticated ] = useState(false); 
    console.log("authenticated ", authenticated)
  const [ complaints, setComplaints ] = useState([]); 

  //  GET complaints
    // useEffect( ()=> {   
    // fetch('/complaints')
    // .then(r => r.json() )
    // .then( 
    //   (complaintsFetchedData) => { 
    //   setComplaints(complaintsFetchedData)
    //   }
    //       )
  
    useEffect( ()=> {   
    fetch('/user_complaints')
    .then(r => r.json() )
    .then( 
      (complaintsFetchedData) => { console.log("fetchedData", complaintsFetchedData)
      setComplaints(complaintsFetchedData)
      }
    )

  // GET users
      // fetch('/me')
      // .then((r) => {
      //   if (r.ok) {
      //     r.json().then((user) => 
      //       setUser(user));
      //   }
      // });
      // }, []);


    fetch("/me", {
      credentials: "include",
    }).then((res) => {
      if (res.ok) {
        res.json().then((user) => {
          setUser(user);
          setAuthenticated(true);
        });
      } else {
        setAuthenticated(true);
      }
    });
  }, []);

  if (!authenticated) {
    return <div></div>;
  }

  const handleUpdateComplaint = (complaintToUpdate) => { 
    let editComplaintArray = complaints.filter((eachComplaint) => { console.log('each complaint', eachComplaint)
      return eachComplaint.id === complaintToUpdate
    })
  }
    
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
      <div class="head-container bg-dark">
        <BrowserRouter>
        <Banner/> 
        <NavBar user={user} setUser={setUser} />
          <Routes>
            <Route path="/login" element={<LoginForm setUser={setUser} />}/>
            <Route path="/signup" element={<SignupForm setUser={setUser} />}/>
            <Route path="/complaints/new" element={<ComplaintForm setComplaints={setComplaints }/>} />
            <Route path="/complaints" element={<AllComplaintsList complaints={complaints} handleDeleteComplaint={handleDeleteComplaint}/>}/>
            <Route path="/complaints/edit" element={<ModifyComplaintForm complaints={complaints} handleUpdateComplaint={handleUpdateComplaint}/>}/>
            <Route path ="/" element= {user ? (<Login setUser={setUser} user={user} />):(<> <Logout setUser={setUser} /></>) } />            
          </Routes>
          <Footer/>
        </BrowserRouter>
        
        
        
      </div>
    </>
  );
}
export default App;