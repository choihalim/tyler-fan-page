import React, {useState, useEffect} from "react";

const ideaUrl = "http://localhost:6001/ideas" 

function Create(){
    const [formData, setFormData] = useState ( [] )
    const [userName, setUserName] = useState ("")
    const  [idea, setIdea] = useState ("")

    useEffect(()=> {
        fetch (ideaUrl)
        .then(r=>r.json())
        .then(setIdea)
        }, [])
    
    function changeUserName(event){
        setUserName(event.target.value)
    }

    function changeIdea(event) {
        setIdea(event.target.value)
    }
    const newIdea = {
        username : userName,
        userIdea : idea
    }

    function submitForm(event, newIdea){
        event.preventDefault()
        fetch(ideaUrl, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newIdea)
        })
        .then(r => r.json())
        .then(newIdeaData => [...formData, newIdeaData])
    }

    
    return (
        <div>
            <h1>Create with Tyler!</h1>
            <h3>Tyler is a big fan of all of you and wants to hear what ideas you want to see from him. </h3>
            <form onSubmit = {event => submitForm(event, newIdea)}>
                    <br></br>
                    <input 
                        onChange = {changeUserName}
                        name = "username"
                        type = "text" 
                        value = {userName}
                        style = {{width: "400px", fontFamily: "sans-serif"}} 
                        placeholder = "Username">
                    </input>

                    <br></br>
                    <br></br>

                    <input 
                        onChange = {changeIdea}
                        name = "userIdea"
                        type = "text"
                        value = {idea}
                        style = {{width: "400px", height: "200px", fontFamily: "sans-serif"}} 
                        placeholder = "Your idea!">
                    </input>

                    <button type = "submit">CREATE!</button>
                    
            </form>
        </div>
    )
}

export default Create