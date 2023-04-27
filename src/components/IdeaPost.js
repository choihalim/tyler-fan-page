function IdeaPost({idea}){
    const {username, userIdea} = idea
    return (
        <div>
            <p>{username}</p>
            <p>{userIdea}</p>
        </div>
    )
}

export default IdeaPost