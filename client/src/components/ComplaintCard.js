import React, {useState } from "react";
import { Link } from "react-router-dom";
import ModifyComplaintForm from "./ModifyComplaintForm";
import ModifyComplaint from "./ModifyComplaintModal";

function ComplaintCard ( {complaintsObj, deleteComplaintRequest, updateComplaint } ) { 

  //
  // const { title, desc, date_observed } = complaintsObj || {};
  const [show, setShow] = useState(false);

  const handleOpenClose = () => {
      setShow(!show);
  };
  const handleClose = () => {
      setShow(false);
  };
 
  return (
    <div className="card-m2"
      //
      onClick={(e) => {
        e.stopPropagation();
    }}
>
      
    <div class="card">
        <div class="card-body">
            <h5 class="card-title">Title: {complaintsObj.title}</h5>
            <p class="card-text">{complaintsObj.desc}</p>
            <p class="card-text">{complaintsObj.date_observed}</p>
            
                               
        <button class="btn btn-secondary"
            onClick={(e)=> {
               e.stopPropagation();
               deleteComplaintRequest(complaintsObj.id)} }>Delete</button>&nbsp;
        {
          <a class="btn btn-secondary"
              onClick={handleOpenClose}
          >Edit</a>
        }
       </div>
    </div>

    {show && (
                <ModifyComplaintForm
                    complaintsObj={complaintsObj}
                    show={show}
                    handleClose={handleClose}
                  
                />
            )}


</div>
  );
}


export default ComplaintCard;