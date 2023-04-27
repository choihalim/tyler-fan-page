function IdeaPost({ idea }) {
    const { username, userIdea } = idea
    return (
        <div className="float-child">
            
            <p>{userIdea}</p>
            <p>- {username}</p>
        </div>
    )
}

export default IdeaPost