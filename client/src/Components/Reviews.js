import React from 'react'

function Reviews({reviews}) {
   
    if (reviews == undefined || reviews.length === 0) return <p className='reviews'>No comments </p>

    else {
        return (
            reviews.map((review) => {
                // console.log(review.comment)
                return (
                    <div id='comments' key={reviews.id}>
                        <h2 key={reviews.id} className='reviews'>{review.name}</h2>
                        {review.comments == null ? null : <p className='reviews'> {review.comments}</p>}
                        <br />
                        <br />
                    </div>
                )
            }
        ))

    }
}

export default Reviews
