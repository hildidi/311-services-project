import React from "react";
import ComplaintCard from "./ComplaintCard";

function AllComplaintList( { complaints, handleDeleteComplaint, handleUpdateComplaint } ) { 


  return (
    <div class="container" style={{width: '50rem'}}><br></br>
        <h2 class="text-white text-center">All My Reported Complaints</h2> 
        <div class="card-body text-center" >
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