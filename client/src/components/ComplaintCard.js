import React, {useState } from "react";
import ModifyComplaintForm from "./ModifyComplaintForm";

function ComplaintCard ( {complaintsObj, deleteComplaintRequest } ) { 
  console.log('complOBJ')
  const [show, setShow] = useState(false);
  
  const handleOpenClose = () => {
      setShow(!show);
  };
  const handleClose = () => {
      setShow(false);
  };
 
  return (
    <div className="card-m2"
      onClick={(e) => {
        e.stopPropagation();  
    }}>
      
    <div class="card">
        <div class="card-body">
            <h3 class="card-title">{complaintsObj.title}</h3>
            <p class="card-text">{complaintsObj.desc}</p>
            <p class="card-text">{complaintsObj.date_observed}</p>

                               
        <button class="btn btn-secondary"
            onClick={(e)=> {
               e.stopPropagation();
               deleteComplaintRequest(complaintsObj.id)} }>Delete</button>&nbsp;
        {
          <button class="btn btn-secondary"
              onClick={handleOpenClose}
          >Edit</button>}

        
       </div>
    </div>
          
    {show && (
      <ModifyComplaintForm
          complaintsObj={complaintsObj}
          show={show}
          handleClose={handleClose}/>
       
    )}    
</div>

  );
}


export default ComplaintCard;