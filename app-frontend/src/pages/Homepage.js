import React from 'react'
import { Link } from 'react-router-dom'
import { useQuery, gql } from '@apollo/client'

const REVIEWS = gql`
    query getReviews {
        reviews {
        id, 
        Title,
        Rating,
        Body
        }
    }
`

export default function Homepage() {
    const {loading, error, data} = useQuery(REVIEWS)
    
    if (loading) return <p>Loading...</p>
    if (error) return <p>Error :(</p>

    console.log(data)

    return (
        <div>
            {data.reviews.map(review => (
                <div key={review.id} className="review-card">
                    <div className="rating">{review.Rating}</div>
                    <h2>{review.Title}</h2>
                    <small>Console list</small>
                    <p>{review.Body.substring(0, 200)}...</p>
                    <Link to={`/details/${review.id}`}>Read more</Link>
                </div>
            ))}
        </div>
    )
}
