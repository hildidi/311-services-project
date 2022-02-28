import React from 'react'
import "../Modal.css"

function Modal({deleteComplaintRequest, closeModal, complaintsObj}) {

  return (
  
  <div class="ModalBackground">
    <div class=" ModalContainer" role="dialog" > 
      <div role="dialog" aria-labelledby="dialog-title" class="title">  
        <h4 id="dialog-title">Are you sure?</h4>
        <p id="dialog-body">Do you really want to delete this record? <br/>This process cannot be undone. </p>
      </div>

      <div class="body">
          <button onClick={()=>{
            deleteComplaintRequest(complaintsObj.id);
          }} 
          type="button" id="del-btn" class="del-btn text-white" data-dismiss="modal" aria-label="Confirm Delete" >Delete</button> &nbsp;
          
          <button onClick={()=>{closeModal(false) }}
          type="button" class="btn bg-dark mb-3 text-white" data-dismiss="modal" aria-label="Cancel">Cancel</button>
        </div>
        <div class="dialog-mask"></div>
      </div>
  </div>

  )
}

export default Modal