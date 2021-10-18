import React from 'react'
import useFetch from '../hooks/useFetch'
import { Link } from 'react-router-dom'

export default function Homepage() {
    const {loading, error, data} = useFetch('http://localhost:1337/reviews')
    
    if (loading) return <p>Loading...</p>
    if (error) return <p>Error :(</p>

    console.log(data)

    return (
        <div>
            {data.map(review => (
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
