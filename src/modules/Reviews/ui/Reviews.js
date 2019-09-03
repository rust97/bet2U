import React from 'react'
import Review from '../components/Review'
import ReviewForm from '../ReviewForm/ReviewForm'
import { useQuery } from 'react-apollo-hooks'
import { REVIEWS } from '../queries/ReviewQuery.gql'
import Spinner from '../../../components/Spinner'
import './Reviews.scss'

export default function Reviews() {
  const { data, loading } = useQuery(REVIEWS, {
    suspend: false,
  })

  if (!loading) {
    console.log(data)
    return (
      <div className="reviews__container">
        <div className="title__wrap">
          <h1 className="content__title">Reviews</h1>
        </div>
        <div className="rewiews__wrap">
          {data.reviews.map(item => {
            return <Review key={item.id} review={item} />
          })}
        </div>
        <ReviewForm />
      </div>
    )
  } else {
    return (
      <div className="reviews__container">
        <div className="rewiews__wrap">
          <Spinner />
        </div>
        <ReviewForm />
      </div>
    )
  }
}
