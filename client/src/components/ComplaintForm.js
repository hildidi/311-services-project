import React, {useState, useEffect } from "react";

const ComplaintForm = ({createNewComplaint, complaints }) => {
    const [titleDetails, updateTitleDetails] = useState("")
    const [descDetails, updateDescDetails] = useState("")
    const [date_observedDetails, updateDate_ObservedDetails] = useState("")
    const [category , setCategory] = useState("")
    const [allCategories , setAllCategories] = useState([]); console.log('all Categories', allCategories)

    useEffect( ()=> {   
    fetch('/categories')
    .then( r => r.json() )
    .then( 
      (categoriesFetchedData) => { 
      setAllCategories (categoriesFetchedData)
      }
    )
    }, []);


    function renderCatDropDown (){ console.log("categories", allCategories)
        return (
            <>
             <select onChange={
                    (se) => {
                        setCategory(se.target.value)}}>
                        <option option value={0} > Category </option>                         
                        
                        {allCategories.map(
                            eachCategory =>{ console.log("EACH - Category ", eachCategory)
                        return (
                            <option value={eachCategory.id} > {eachCategory.category}</option>)
                        })}    
                </select>
            </>
        )
    }
   
    return (
        <aside className='complaint-block'>
            <h2 id="complaint">Submit a Complaint</h2>
            
            <form class="form-group"
                onSubmit={
                (se)=>{
                se.preventDefault()
                    const newComplaint = {
                        title: titleDetails,
                        desc: descDetails,
                        date_observed: date_observedDetails,
                        category_id: category
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
                    setCategory(0)
                    }}>

                <label htmlFor="validationCustom01">Title:</label>
                <input 
                    type="text" 
                    class="form-control" 
                    id="validationCustom01" 
                    placeholder="Title" 
                    onChange={
                        (se)=>{
                            console.log('synth', se.target.value)
                            updateTitleDetails(se.target.value)}}
                            value={titleDetails} 
                            placeholder ="Title details"/>
                <br />
                <br />
                {/* Dropdown Menu in React using .map: */}
                <label htmlFor="select-cat">Select Complaint Category:</label>                            
                
                {renderCatDropDown ( )}
                
                <br />
                <br />
                <label htmlFor="formControlTextarea1">Complaint Description:</label>
                <input 
                    class="form-control" 
                    id="exampleFormControlTextarea1" 
                    rows="3"
                    placeholder="Enter complaint details"
                    onChange={
                        (se)=>{
                            console.log('synth', se.target.value)
                            updateDescDetails(se.target.value)}}
                            value={descDetails}
                            placeholder ="Description details"/>
                    <br />
                    <br />

            <div class="form-group">
                <label for="formControlInput1">Complaint Date:</label>
                <input 
                    type="date" 
                    class="form-control" 
                    id="exampleFormControlInput1" 
                    placeholder="12/22/21"
                    onChange={
                        (se)=>{
                            console.log('synth', se.target.value)
                            updateDate_ObservedDetails(se.target.value)}}
                            value={date_observedDetails}
                            placeholder ="Date details"
                />

            </div>
            <br></br>
            <button 
                type="submit" 
                id="sbt-btn">Submit Complaint</button>
            </form>

        </aside>



    )
}

export default ComplaintForm