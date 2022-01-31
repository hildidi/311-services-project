import React from "react";
import ComplaintCard from "./ComplaintCard";


function AllComplaintList( { complaints, handleDeleteComplaint } ) { console.log("ALL complaints ", complaints)

  return (
    <div className="complaint-block">
        <h2>All Complaints</h2> 
        <div className="complaint-list">
          {complaints.map(
              (eachComplaint) => {
                    return (  
                        <ComplaintCard 
                            key={eachComplaint.id}
                            complaintsObj={eachComplaint}  
                            deleteComplaintRequest={handleDeleteComplaint}
                        />)
            }  
            )}
          </div>
    </div>   
  );
}
export default AllComplaintList;