import React, {useState } from 'react';
import { Modal } from 'bootstrap';

function ModifyComplaintModal ( {complaintsObj, show, handleClose} ) { 

  //
  const [category, setCategory] = useState(''); 
  const handleComplaintModifier = () => { 
          handleClose(false);
      };

      const modalOnOpen = () =>{
        fetch(`/complaints`)
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
    
    
    //
    // const handleForm = () =>{
    //     complaintsObj.title = title
    //     complaintsObj.desc = desc
    //     complaintsObj.date_observed = date_observed
    //     fetch(`/complaints/`, {
    //         method: "PATCH",
    //         headers: { "Content-Type": "application/json" },
    //         body: JSON.stringify({
    //             title: title,
    //             desc: desc,
    //             date_observed: date_observed
    //         }),
    //     })
    //         .then((r) => r.json())
    //         .then((record) => {
    //             console.log(record);
    //         })
    //         handleComplaintModifier();
    //   }
  //

  // const [title, updateTitle]= useState("");
  // const [desc, updateDesc]= useState("");
  // const [category, setCategory]= useState("");
  // const [date_observed, updateDate_Observed]= useState("");
  // const [allCategories , setAllCategories] = useState([]);

  // useEffect( ()=> {   
  // fetch('/categories')
  // .then( r => r.json() )
  // .then( 
  //   (categoriesFetchedData) => { 
  //   setAllCategories (categoriesFetchedData)
  //   }
  // )
  // }, []);


  // function renderCatDropDown (){
  //     return (
  //         <>
  //          <select onChange={
  //                 (se) => {
  //                     // console.log("se...", se.target)}}>
  //                     setCategory(se.target.value)}}>
  //                     <option option value={0} > Category </option>                         
                      
  //                     {allCategories.map(
  //                         eachCategory =>{
  //                     return (
  //                         <option value={eachCategory.category} > {eachCategory.category}</option>)
  //                     })}    
  //         </select>
  //         </>
  //     )
  // }
    
    return (
      <Modal
            show={show}
            // onHide={handleComplaintModifier}
            onShow={modalOnOpen}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <div className="card">
                <div className="card-header">Update Complaint</div>
                <div className="card-body">
                    <form>
                        <div className="mb-3">
                            <label className="form-label">Title</label>
                            <input
                                name="title" type="title" className="form-control" placeholder="Title"
                                value={title}
                                onChange={(se) => {
                                    updateTitle(se.target.value);
                                }}
                            />
                        </div>

                        <div className="  mb-3">
                            <div>
                                <label className="form-label">Category</label>
                                <fieldset className="row mx-0 justify-content-between">
                                    <div className="col-10 px-0">
                                        <input
                                            // disabled
                                            id="disabledTextInput" name="category" type="text" className="form-control align-self-stretch" placeholder="Disabled"
                                            value={category}
                                            onChange={() => {
                                                return null;
                                            }}
                                        />
                                    </div>
                                    
                                </fieldset>
                            </div>
                        </div>

                        <div className="mb-3">
                            <label className="form-label">Description</label>
                            <textarea
                                name="desc" className="form-control" rows="3" placeholder="desc"
                                value={desc}
                                onChange={(se) => {
                                    updateDesc(se.target.value);
                                }}
                            ></textarea>
                        </div>

                        <div className="mb-3">
                            <label className="form-label">Date Observed</label>
                            <input
                                type= "date" name="title" type="title" className="form-control" placeholder="Title"
                                value={date_observed}
                                onChange={(se) => {
                                    updateDate_Observed(se.target.value);
                                }}
                            />
                        </div>

                        <button
                            type="submit"
                            className="btn btn-secondary mb-3"
                            onClick={(e) => {
                                e.preventDefault();
                                e.stopPropagation();
                                // handleForm();
                            }}>
                            Update
                        </button>
                        &nbsp;
                        <button
                            type="button"
                            className="btn btn-primary mb-3"
                            onClick={(e) => {
                                e.stopPropagation();
                                handleComplaintModifier();
                            }}>
                            Close
                        </button>
                    </form>
                </div>
            </div>
        </Modal>
      )
};

export default ModifyComplaintModal;



{/* <div class='container'>
          <h2>Update Complaint</h2>
          <div className="form-complaint">

            <form class="form-group"
              onSubmit={
                (se)=>{se.preventDefault()
                  const updateComplaint={
                    title: title,
                    desc: desc,
                    category: category,
                    date_observed: date_observed
                  }

                  // PATCH new complaint
                  // setComplaints([...editComplaintArray])
                  fetch("/complaint/:id/edit", {
                    method: "PATCH",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(updateComplaint),
                  })
                    .then((r)=>{r.json()
                    .then(console.log)

                    updateTitle("")
                    updateDesc("")
                    updateDate_Observed("")
                    setCategory("")
                    setAllCategories(0)
                    })
                }
              }
            >
              
              <div class="form-group">
                <label for="exampleFormControlInput1">Update Title</label>
                <input 
                  type="text" 
                  class="form-control" 
                  id="exampleFormControlInput1" 
                  placeholder="Update title"
                  onChange={
                    (se)=>{
                      updateTitle(se.target.value)}}
                      value={title}/>

              <br/>
              </div>
              <div class="form-group">
                <label for="exampleFormControlSelect1">Select Category</label>
                {renderCatDropDown()}
              </div>

              <br/>              
              <div class="form-group">
                <label for="exampleFormControlTextarea1">Update Details</label>
                  <textarea 
                  class="form-control" 
                  id="exampleFormControlTextarea1" 
                  rows="3"
                  onChange={(se)=>{
                    updateDesc(se.target.value)}}
                    value={desc}
                  ></textarea>
              <br/>
      
              <div class="form-group">
                <label for="exampleFormControlInput1">Date to Update</label>
                <input 
                  type="date" 
                  class="form-control" 
                  id="exampleFormControlInput1" 
                  placeholder="update title"
                  onChange={
                    (se)=>{
                      updateDate_Observed(se.target.value)}}
                      value={date_observed}/>

                <br/>
              </div>

              </div>

            <Link class="btn btn-secondary" to="/complaints">Back</Link>&nbsp;
            <button
              class="btn btn-secondary"
              type="submit" 
              id="sbt-btn">Update Complaint</button>
          </form>
        </div>
      
      </div> */}
