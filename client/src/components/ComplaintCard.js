import React, {useState } from "react";
import ModifyComplaintForm from "./ModifyComplaintForm";
import Modal from "./Modal";

function ComplaintCard ( {complaintsObj, deleteComplaintRequest } ) { 
  console.log('complOBJ')
  const [OpenModal, setOpenModal] = useState(false)

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

      
      
    <div class="card container">
        <div class="card-body">
            <h3 class="card-title">{complaintsObj.title}</h3>
            <p class="card-text">{complaintsObj.desc}</p>
            <p class="card-text">{complaintsObj.date_observed}</p>

                               
        {
          <button class="btn bg-dark mb-3 text-white"
          onClick={handleOpenClose}
          >Edit</button>}&nbsp;

          <button class="btn bg-dark mb-3 text-white"
              onClick={(e)=> {
                e.stopPropagation();
                // deleteComplaintRequest(complaintsObj.id)} }>Delete</button>&nbsp;
                setOpenModal(true)} }>Delete</button>
        
       </div>
    </div>

    {OpenModal && 
      <Modal 
        deleteComplaintRequest={deleteComplaintRequest} 
        complaintsObj={complaintsObj} 
        closeModal={setOpenModal}
      />}
          
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