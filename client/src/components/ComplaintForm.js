import React, {useState, useEffect } from "react";

const ComplaintForm = ({ complaints }) => { console.log("complaints! ", complaints)
    const [titleDetails, updateTitleDetails] = useState("")
    const [descDetails, updateDescDetails] = useState("")
    const [date_observedDetails, updateDate_ObservedDetails] = useState("")
    const [categoryDetails , setCategoryDetails] = useState("")
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
                        
                        {allCategories.map(
                            eachCategory =>{
                        return (
                            <option value={eachCategory.category} > {eachCategory.category}</option>)
                        })}    
            </select>
            </>
        )
    }
   
    return (
        <div class='container'><br></br>
            <h2 id="complaint">Submit a Complaint</h2>
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
                  
                    // POST new complaint
                    fetch ('/complaints/new', {
                        method: 'POST', 
                        headers:{
                            'Content-Type': 'application/json',
                        },                    
                    body: JSON.stringify(newComplaint)}
                    )
                    .then(r=>r.json())
                    .then(console.log)

                    updateTitleDetails([complaints, newComplaint ])
                    updateDescDetails("")
                    updateDate_ObservedDetails("")
                    setCategoryDetails(0)
                    }}>

                <label htmlFor="complaint-title">Title:</label>
                <input 
                    // type="text" 
                    class="form-control" 
                    id="complaint-title" 
                    placeholder="Title" 
                    onChange={
                        (se)=>{
                            // console.log('synth', se.target.value)
                            updateTitleDetails(se.target.value)}}
                            value={titleDetails} 
                            placeholder ="Title details"/>
                <br />
                <br />
                <label htmlFor="select-cat">Select Complaint Category:</label>                            
                {renderCatDropDown ( )}
                
                <br />
                <br />
                <label htmlFor="formControlTextarea1">Complaint Description:</label>
                <textarea 
                    class="form-control" 
                    id="exampleFormControlTextarea1" 
                    rows="3"
                    placeholder="Enter complaint details"
                    onChange={
                        (se)=>{
                            // console.log('synth', se.target.value)
                            updateDescDetails(se.target.value)}}
                            value={descDetails}
                            placeholder ="Description details"/>
                    <br />
                    <br />

            <div class="form-group">
                <label htmlFor="formControlInput1">Complaint Date:</label>
                <input 
                    type="date" 
                    class="form-control" 
                    id="exampleFormControlInput1" 
                    onChange={
                        (se)=>{
                            // console.log('synth', se.target.value)
                            updateDate_ObservedDetails(se.target.value)}}
                            value={date_observedDetails}
                            placeholder ="Date details"
                />

            </div>
            <br></br>
            <button 
                class="btn btn-secondary my-2 my-sm-100 text-white"
                type="submit" 
                id="sbt-btn">Submit Complaint</button>
            </form>
            </div>
        </div>
                                    


    )
}

export default ComplaintForm