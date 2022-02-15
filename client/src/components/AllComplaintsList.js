import React from "react";
import ComplaintCard from "./ComplaintCard";

function AllComplaintList( { complaints, handleDeleteComplaint, handleUpdateComplaint } ) { 

  return (
    <div className="container"><br></br>
        <h2 class="text-white">All My Reported Complaints</h2> 
        <div class="card-body">
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