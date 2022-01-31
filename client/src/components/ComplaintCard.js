import React from "react";

function ComplaintCard ( {complaintsObj, deleteComplaintRequest} ) {
    console.log('complaintObj ', complaintsObj)

  return (
    <div className="complaint-card">

        <p>Title: {complaintsObj.title}</p>

        <div className="complaint-container">
        <p>Description: </p> 
        <p>{complaintsObj.desc}</p>

          <p>Date Observed: </p> 
         <p>{complaintsObj.date_observed}</p> 
        </div>

        <button className="delete-btn" 
            onClick={ 
                () => {deleteComplaintRequest(complaintsObj.id)} }>Delete Complaint</button>
        <br/>

    </div>

    
  );
}


export default ComplaintCard;