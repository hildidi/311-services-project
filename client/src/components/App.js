import '../App.css';
import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Login.js"
import Logout from "./Logout.js"
import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";
import ModifyComplaintForm from "./ModifyComplaintForm"

import Header from "../layout/Header";
import NavBar from "./NavBar";
import ComplaintForm from "./ComplaintForm.js";
import AllComplaintsList from "./AllComplaintsList";

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
  //   // PATCH new complaint
  //   setComplaints([editComplaintArray])
  //     fetch(`/complaints/${complaintToUpdate}`,{ 
  //       method: "PATCH",
  //       headers: { "Content-Type": "application/json" },
  //       body: JSON.stringify({
          
  //       }),
  //     })
  // }

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

    // *Come back to it later, session not persisting.*
    // useEffect(()=> {
    // fetch("/me")
    // .then((r) => {
    // if (r.ok) {
    //     r.json().then((user) => {
    //       setUser(user); //set cU to U we get back from endpoin
          // setAuthenticated(true);
        // });
      // } else {
      //   setAuthenticated(true);
        // console.log("Bad")
  //     }
  //   });
  // }, []);

  return(
  <>
   <div className="App-header">
    
    <BrowserRouter>
    <NavBar user={user} setUser={setUser} />
    <Header/>
      <Routes>
        <Route 
          path="/" element={user ? (<Login 
            setUser={setUser} 
            user={user} />
            ):(<> <Logout 
                setUser={setUser} />
            </>)
        } />
        <Route path="/login" element={<LoginForm/>}/>
        <Route path="/signup" element={<SignupForm/>}/>
        <Route path="/complaints/new" element={<ComplaintForm/>} />
        <Route path="/complaints" element={<AllComplaintsList complaints={complaints} handleDeleteComplaint={handleDeleteComplaint}/>}/>
        <Route path="/complaints/:id/edit" element={<ModifyComplaintForm complaints={complaints} handleUpdateComplaint={handleUpdateComplaint}/>}/>
        
      </Routes>
    </BrowserRouter>


    </div>
  </>

  );
  }
export default App;