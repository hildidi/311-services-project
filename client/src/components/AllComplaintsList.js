import React from "react";
import { NavLink } from "react-router-dom";
import ComplaintCard from "./ComplaintCard";


function AllComplaintList( { complaints, handleDeleteComplaint, handleUpdateComplaint } ) { 
  // console.log("ALL complaints ", complaints)

  return (
    <div className="container">
        <h2>All Complaints</h2> 
        <div className="card-body">
          {complaints.map(
              (eachComplaint) => {
                    return (  
                        <ComplaintCard 
                            key={eachComplaint.id}
                            complaintsObj={eachComplaint}  
                            deleteComplaintRequest={handleDeleteComplaint}
                            updateComplaint={handleUpdateComplaint}
                        />)
            }  
            )}
            
          </div>
    </div>   
  );
}
export default AllComplaintList;