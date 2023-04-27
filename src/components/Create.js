import React from "react";

function Create(){

    
    return (
        <div>
            <h1>Create with Tyler!</h1>
            <h3>Tyler is a big fan of all of you and wants to hear what ideas you want to see from him. </h3>
            <form>
                    <br></br>
                    <input 
                        type = "text" 
                        style={{width: "400px", fontFamily: "sans-serif"}} 
                        placeholder="Username">
                    </input>

                    <br></br>
                    <br></br>

                    <input 
                        type = "text"
                        style = {{width: "400px", height: "200px", fontFamily: "sans-serif"}} 
                        placeholder="Your idea!">
                    </input>

                    <button type="submit">CREATE!</button>
                    
            </form>
        </div>
    )
}

export default Create