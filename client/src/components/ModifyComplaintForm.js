import React, {useState, useEffect } from 'react';

function ModifyComplaintForm ( {complaintsObj, show, handleClose} ) { 
  //
  const [category, setCategory] = useState(''); 
  const handleComplaintModifier = () => { 
          handleClose(false);
      };

    const modalOnOpen = () =>{
    fetch(`/complaints/${complaintsObj}`)
        .then((res) => res.json())
        .then((complaintsObj) => {
            if(complaintsObj.category){
                setCategory(complaintsObj.category.category)
            } else{
                setCategory('')
            }
        })
    }
    const [title, updateTitle]= useState(complaintsObj.title);
    const [desc, updateDesc]= useState(complaintsObj.desc);
    const [date_observed, updateDate_Observed]= useState(complaintsObj.date_observed);
       
    
    const handleForm = () =>{
        complaintsObj.title = title
        complaintsObj.desc = desc
        complaintsObj.date_observed = date_observed
        fetch(`/complaints/${complaintsObj.id}`, {
            method: "PATCH",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                title: title,
                desc: desc,
                date_observed: date_observed
            }),
        })
            .then((r) => r.json())
            .then((record) => {
                console.log(record);
            })
            handleComplaintModifier();
      }
  
  const [allCategories , setAllCategories] = useState([]);

  useEffect( ()=> {   
    fetch('/categories')
    .then( r => r.json() )
    .then( 
      (categoriesFetchedData) => { 
      setAllCategories (categoriesFetchedData)
      }
    )
  }, []);
    
    return (
        <div 
            show={show}
            // onHide={handleComplaintModifier}
            onShow={modalOnOpen}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            >
            <div className="card bg-warning mb-3">
                <div className="card-body bg-header">
                    <form>
                        <div className="mb-3">
                            <label className="form-label" style={{fontWeight: 'bold'}}>Title:</label>
                            <input
                                name="title" type="title" className="form-control" placeholder="Title"
                                value={title}
                                onChange={(se) => {
                                    updateTitle(se.target.value);
                                }}
                            />
                        </div>

                        <div className="mb-3">
                            <label className="form-label" style={{fontWeight: 'bold'}}>Description:</label>
                            <textarea
                                name="desc" className="form-control" rows="3" placeholder="desc"
                                value={desc}
                                onChange={(se) => {
                                    updateDesc(se.target.value);
                                }}
                            ></textarea>
                        </div>

                        <div className="mb-3">
                            <label className="form-label" style={{fontWeight: 'bold'}}>Date Observed:</label>
                            <input
                                type= "date" className="form-control" placeholder="Title"
                                value={date_observed}
                                onChange={(se) => {
                                    updateDate_Observed(se.target.value);
                                }}
                            />
                        </div>

                        <button
                            type="submit"
                            className="btn bg-dark mb-3 text-white"
                            onClick={(e) => {
                                e.preventDefault();
                                e.stopPropagation();
                                handleForm();
                                handleComplaintModifier();
                                
                            }}>
                            Update
                        </button>
                        &nbsp;
                        <button
                            type="button"
                            className="btn bg-dark mb-3 text-white"
                            onClick={(e) => {
                                e.stopPropagation();
                                handleComplaintModifier();
                            }}>
                            Cancel
                        </button>
                    </form>            
                </div>
            </div>
        </div>
      )
};

export default ModifyComplaintForm;


