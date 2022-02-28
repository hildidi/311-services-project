import React, {useState, useEffect } from "react";
import { Link } from "react-router-dom";

const ComplaintForm = ({ complaints, setComplaints }) => { console.log("THE COMplaints", complaints)
    const [titleDetails, updateTitleDetails] = useState("");
    const [descDetails, updateDescDetails] = useState("");
    const [date_observedDetails, updateDate_ObservedDetails] = useState("");
    const [categoryDetails , setCategoryDetails] = useState("");
    const [allCategories , setAllCategories] = useState([]); 

    const [openSubmitModal, setOpenSubmitModal] = useState(false)


    useEffect( ()=> {   
    fetch('/categories')
    .then( r => r.json() )
    .then( 
      (categoriesFetchedData) => { 
      setAllCategories (categoriesFetchedData)
      }
    )
    }, []);

    function renderCatDropDown (){
        return (
            <>
             <select aria-required="true" required="required"
              onChange={
                    (se) => {
                        // console.log("se...", se.target)}}>
                        setCategoryDetails(se.target.value)}}> 
                        {/* <option option value={0} > Category </option>                          */}
                        <option value="">None</option>
                        {allCategories.map(eachCategory =>{
                        return (
                            <option value={eachCategory.category} > {eachCategory.category}</option>)
                        })}    
            </select>
            </>
        )
    }
   
    return (
        <section class='container' style={{width: '35rem'}}><br></br>           
            <h2 id="complaint" class="text-white">Submit a Complaint</h2>
            <div className="form-complaint">
                <form class="form-group"
                    onSubmit={
                        (se)=>{
                            se.preventDefault()
                            const newComplaint = {
                                title: titleDetails,
                                desc: descDetails,
                                date_observed: date_observedDetails,
                                category_name: categoryDetails
                            }
                            fetch ('/complaints/new', {
                                method: 'POST', 
                            headers:{
                                'Content-Type': 'application/json',
                            },                    
                            body: JSON.stringify(newComplaint)}
                            )
                            .then(r=>r.json())
                            .then(console.log)
                            
                            console.log("complaints", [complaints, newComplaint])
                            console.log("complaints", [...complaints, newComplaint])
                            setComplaints([...complaints, newComplaint]);
                            // updateTitleDetails([...complaints, newComplaint ]);
                            updateTitleDetails("");
                            updateDescDetails("");
                            updateDate_ObservedDetails("");
                            setCategoryDetails(0);
                        }}>

                    <label HTMLFor="complaint-title" style={{fontWeight: 'bold'}} class="text-white">Title (required)</label> 
                    <input 
                        // type="text" 
                        class="form-control" 
                        id="complaint-title" 
                        placeholder ="Enter a title"
                        aria-required="true"
                        required="required"
                        onChange={
                            (se)=>{
                                // console.log('synth', se.target.value)
                                updateTitleDetails(se.target.value)}}
                                value={titleDetails} 
                                /> 
                    
                    <br/>
                    <label for="select-category" style={{fontWeight: 'bold'}} class="text-white"> Select Complaint Category (required) </label> &nbsp;                           
                    {renderCatDropDown ( )} 
                    
                    <br />
                    <br />
                    <label htmlFor="formControlTextarea1" style={{fontWeight: 'bold'}} class="text-white"> Describe the Problem (required)</label>
                    <textarea 
                        class="form-control" 
                        id="exampleFormControlTextarea1" 
                        rows="3"
                        placeholder="Enter complaint details"
                        required="required"
                        aria-required="true"
                        onChange={
                            (se)=>{
                                // console.log('synth', se.target.value)
                                updateDescDetails(se.target.value)}}
                                value={descDetails}/>
                    <br />

                    <div class="form">
                        <label HTMLFor="date" style={{fontWeight: 'bold'}} class="text-white"> Date Observed (required)</label>
                        <input 
                            type="date"
                            // data-date-format="M/D/YYYY"
                            class="form-control" 
                            id="date" 
                            aria-required="true"
                            required="required"
                            onChange={
                                (se)=>{
                                    // console.log('synth', se.target.value)
                                    updateDate_ObservedDetails(se.target.value)}}
                                    value={date_observedDetails}
                                    />
                    </div>


                    <br />
                    <button 
                        class="btn bg-dark my-2 my-sm-100 text-white"
                        type="submit" 
                        id="sbt-btn">Submit Complaint</button> &nbsp;

                        <Link class="btn bg-dark my-2 my-sm-100 text-white" 
                        type="submit"
                        to="/complaints/" >View All Complaints</Link>
                </form>
                
                <br/>

            </div>
    
        </section>                           

    )
}

export default ComplaintForm