import React, {useState, useEffect } from "react";
import { Link } from "react-router-dom";

const ComplaintForm = ({ complaints, setComplaints }) => { console.log("THE COMplaints", complaints)
    const [titleDetails, updateTitleDetails] = useState("");
    const [descDetails, updateDescDetails] = useState("");
    const [date_observedDetails, updateDate_ObservedDetails] = useState("");
    const [categoryDetails , setCategoryDetails] = useState("");
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

    function renderCatDropDown (){
        return (
            <>
             <select onChange={
                    (se) => {
                        // console.log("se...", se.target)}}>
                        setCategoryDetails(se.target.value)}}>
                        <option option value={0} > Category </option>                         
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

                <label htmlFor="complaint-title" style={{fontWeight: 'bold'}} class="text-white">Title:</label>
                <input 
                    type="text" 
                    class="form-control" 
                    id="complaint-title" 
                    placeholder="Title" 
                    required
                    onChange={
                        (se)=>{
                            // console.log('synth', se.target.value)
                            updateTitleDetails(se.target.value)}}
                            value={titleDetails} 
                            placeholder ="Title details"/>
                <br />

                <label htmlFor="select-cat" style={{fontWeight: 'bold'}} class="text-white"> Select Complaint Category:</label> &nbsp;                           
                {renderCatDropDown ( )}
                
                <br />
                <br />
                <label htmlFor="formControlTextarea1" style={{fontWeight: 'bold'}} class="text-white"> Describe the Problem:</label>
                <textarea 
                    class="form-control" 
                    id="exampleFormControlTextarea1" 
                    rows="3"
                    placeholder="Enter complaint details"
                    required
                    onChange={
                        (se)=>{
                            // console.log('synth', se.target.value)
                            updateDescDetails(se.target.value)}}
                            value={descDetails}
                            placeholder = "Description details"/>
                    <br />

            <div class="form-group">
                <label htmlFor="formControlInput1" style={{fontWeight: 'bold'}} class="text-white"> Date Observed:</label>
                <input 
                    type="date"
                    class="form-control" 
                    id="exampleFormControlInput1" 
                    required
                    onChange={
                        (se)=>{
                            // console.log('synth', se.target.value)
                            updateDate_ObservedDetails(se.target.value)}}
                            value={date_observedDetails}
                            placeholder ="Date details"
                            />
            </div>

            <br/>
            {/* For address */}
            {/* <label htmlFor="complaint-title" style={{fontWeight: 'bold'}} class="text-white">Address</label>
                <input 
                type="text" 
                class="address-picker-input form-control text" 
                disabled="disabled"
                onChange={
                    (se)=>{
                        // console.log('synth', se.target.value)
                        updateTitleDetails(se.target.value)}}
                        value={""} />
                        <div class="input-group-btn">
                        <button 
                        class="btn bg-black" 
                        id="SelectAddressWhere" 
                        name="Select-Address-Where-Section"
                        disabled="disabled">
                        <span class ="text-white">Select Address</span></button></div>
                    <br /> */}
                    
                {/* For address */}

            
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