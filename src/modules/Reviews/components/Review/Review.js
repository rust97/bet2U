import React from 'react'

export default function Review({ review }) {
  return (
    <div className="rewiew__wrap">
      <div className="review__title">
        <h3>{review.name}</h3>
      </div>
      <div className="review__text">
        <p>{review.review}</p>
      </div>
    </div>
  )
}
