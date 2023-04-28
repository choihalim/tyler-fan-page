import React, { useState, useEffect } from "react";
import IdeaPost from "./IdeaPost"
import "../create.css";

const ideaUrl = "http://localhost:6001/ideas"

function Create() {
    const [formData, setFormData] = useState([])
    const [userName, setUserName] = useState("")
    const [idea, setIdea] = useState("")

    useEffect(() => {
        fetch(ideaUrl)
            .then(r => r.json())
            .then(setFormData)
    }, [])

    const renderedIdeas = formData.map(idea =>
        <IdeaPost
            key={idea.id}
            idea={idea}
        />
    )
    console.log(formData)
    function changeUserName(event) {
        setUserName(event.target.value)
    }

    function changeIdea(event) {
        setIdea(event.target.value)
    }
    const newIdea = {
        username: userName,
        userIdea: idea
    }

    function submitForm(event, newIdea) {
        event.preventDefault()
        fetch(ideaUrl, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newIdea)
        })
        .then(r => r.json())
            .then(newIdeaData => setFormData([newIdeaData, ...formData]))
        setIdea("")
        setUserName("")
    }

    return (
        <div className="float-container">
            <h1>Create with Tyler!</h1>
            <h3>Tyler is a big fan of all of you and wants to hear what ideas you want to see from him. </h3>

            <form
                onSubmit={event => submitForm(event, newIdea)}
                className="create-form"
            >
                <br></br>
                <input
                    onChange={changeUserName}
                    name="username"
                    type="text"
                    value={userName}
                    style={{ width: "600px", fontFamily: "Chalkduster" }}
                    placeholder="Username">
                </input>

                <br></br>
                <br></br>

                <textarea
                    onChange={changeIdea}
                    name="userIdea"
                    type="text"
                    value={idea}
                    style={{ width: "600px", height: "200px", fontFamily: "Chalkduster" }}
                    placeholder="Your idea!">
                </textarea>

                <button type="submit">CREATE!</button>
            </form>
            {renderedIdeas}
        </div>
    )
}

export default Create
