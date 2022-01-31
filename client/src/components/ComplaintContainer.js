function About () {

  return (
      <div className='about'>
         <h2>311</h2>
         
      </div>
   
  )
}

export default About;



// import React from "react";
// import { useEffect, useState } from 'react';
// import NavBar from "./NavBar";
// import AllComplaintsList from "./AllComplaintsList";
// import ComplaintForm from "./ComplaintForm";
// import { BrowserRouter as Router, Routes, Route } from "react-dom"

// import Header from "../layout/Header";


// function ComplaintContainer () {

//   const [ complaints, setComplaints ] = useState( [] );
//   console.log("State Of Complaints ", complaints) 

//   const [ users, setUsers ] = useState( [] )

// // GET complaints
//   useEffect( ()=> {
//     fetch('/complaints')
//     .then( r => r.json() )
//     .then( 
//       (complaintsFetchedData) => { 
//       console.log("complaintsFetchedData: ", complaintsFetchedData) 
//       setComplaints( [ complaintsFetchedData] )
//       }
//     )
// // GET users
//     fetch('/users')
//     .then(r => r.json())
//     .then(setUsers)
//   }, [] ) 


//   // POST new complaint
//   const createNewComplaint = (complaint) => {
//     fetch('/complaints',{
//       method:'POST',
//       headers:{
//         'Content-Type':'application/json'
//       },
//       body: JSON.stringify(complaint)
//     })
//     .then(r => r.json())
//     .then(newComplaint => {
//       setComplaints([...newComplaint,complaints])
//     })
//   }

//   // DELETE complaint
//     const handleDeleteComplaint = (complaintToDelete) =>{ 
//         let updatedComplaintArray = complaints.filter( (eachComplaint) => {
//           return eachComplaint.id !== complaintToDelete
//       })
//         setComplaints( [...updatedComplaintArray] )
      
//       fetch(`/complaints/${complaintToDelete}`, {
//           method: "DELETE",
//         });
//   }


//   return (
//     <div>
//         <Router>
//         <Header/>
      
//         <br/>
//         <NavBar />
//         <br/>
    
//         <Routes>
//         <Route path="/" element={<AllComplaintsList 
//             complaints={complaints} 
//             handleDeleteComplaint={handleDeleteComplaint}
//         />
//         } />

//         <Route path="/complaints/new" element={<ComplaintForm 
//             createNewComplaint={createNewComplaint} 
//             users={users} 
//         />
//         } />

//         </Routes>
//         </Router>

//     </div>
//   );
// }


// export default ComplaintContainer;