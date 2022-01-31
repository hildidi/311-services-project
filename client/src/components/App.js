import '../App.css';
import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Login.js"
import Logout from "./Logout.js"
import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";

import Header from "../layout/Header";
import NavBar from "./NavBar";
import ComplaintForm from "./ComplaintForm.js";
import AllComplaintsList from "./AllComplaintsList";
import CategoriesList from "./CategoriesList";
import ComplaintCard from './ComplaintCard';
import AllComplaintList from './AllComplaintsList';

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

  // POST new complaint
  const createNewComplaint = (complaint) => {
    fetch('/complaints/new',{
      method:'POST',
      headers:{
        'Content-Type':'application/json'
      },
      body: JSON.stringify(complaint)
    })
    .then(r => r.json())
    .then(newComplaint => {
      setComplaints([...newComplaint,complaints])
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
    
    <NavBar user={user} setUser={setUser} />
    <Header/>
    <BrowserRouter>
      <Routes>
        <Route 
          path="/login"
          element={user ? 
            (
              <Login 
                setUser={setUser} 
                user={user} />
            ):(<>
              {/* <LoginForm/> */}
              <Logout 
                setUser={setUser} />
            </>)
        } />
        <Route path="login" element={<LoginForm/>}/>
        <Route path="signup" element={<SignupForm/>}/>
        <Route path="/complaints/new" element={<ComplaintForm/>} />
        <Route path="/complaints" element={<AllComplaintsList complaints={complaints} handleDeleteComplaint={handleDeleteComplaint}/>}/>
      </Routes>
    </BrowserRouter>

      
    {/* <Routes>     
      <Route>
        {user ? (
          <Login 
            setUser={setUser} 
            user={user} />
          ):(
            <Logout 
              setUser={setUser} />
            )}
      </Route>
    </Routes> */}

    </div>
  </>

  );
  }
export default App;