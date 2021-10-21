import React from 'react'
import { useParams } from 'react-router-dom'
import { useQuery, gql } from '@apollo/client'

const REVIEW = gql`
    query getReviews($id: ID!) {
        review(id: $id) {
        id, 
        Title,
        Rating,
        Body
        }
    }
`

export default function ReviewDetails() {
    const {id} = useParams()
    const {loading, error, data} = useQuery(REVIEW, {
        variables: {id: id}
    })

    if (loading) return <p>Loading...</p>
    if (error) return <p>Error :(</p>

    console.log(data)

    return (
        <div>
            <div className="review-card">
                    <div className="rating">{data.review.Rating}</div>
                    <h2>{data.review.Title}</h2>
                    <small>Console list</small>
                    <p>{data.review.Body}</p>
                </div>
        </div>
    )
}
