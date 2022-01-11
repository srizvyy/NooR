import React, {useState} from 'react'

function ReviewForm({user, project, setDOMUpdater, handleNewComment, handleDeleteComment, reviewsData}) {
    // console.log(project)
    const [commentData, setcommentData] = useState({
        project_id: project.id,
        user_id: user.id,
        comments: ''
    })
    
    function commentFormHandleChange(e) {
        setcommentData({ ...commentData, [e.target.name]: e.target.value })
    }


    function newCommentSubmitHandler(e) {
        e.preventDefault()
        commentData.user_id = user.id
        commentData.project_id = project.id
        fetch('/reviews', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                user_id: commentData.user_id,
                project_id: commentData.project_id,
                comments: commentData.comments
            })
        })
        .then(res => {
            if (res.ok) {
                res.json()
                .then((comment) => {
                    handleNewComment(comment)
                })
            } else {
                console.log('error')
            }
        })
        .then(setDOMUpdater(Math.random()));
        
    }

     function handleDeleteComments () {
        fetch(`/reviews/${reviewsData.id}`, {
            method: "Delete"
        })
        .then(res => {
            if (res.ok) {
                handleDeleteComment(reviewsData)
            }
        })
    }
    

     
    return (
            <div>
                <br />
                <form onSubmit={newCommentSubmitHandler} >
                    <button class='add-new-comment-btn' type="submit">Add Comment</button>
                    {/* <h2 className='reviews'>New comment</h2> */}
                    <input className='create-new-comment' type="text" name="comments" placeholder='Add a comment..' onChange={commentFormHandleChange} value={commentData.comments} ></input>
                    <br />
                    <br />
                </form >
                <br />
            </div>
        )
}

export default ReviewForm
