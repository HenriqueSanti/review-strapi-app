import React from 'react'
import { useQuery, gql } from '@apollo/client'
import { useParams, Link } from 'react-router-dom'

const CATEGORY = gql`
    query getCategories($id: ID!) {
        category(id: $id) {
            Category,
            id,
            reviews {
                Title,
                id,
                Body,
                Rating,
                categories {
                    Category,
                    id
                }
            }
        }
    }
`

export default function Category() {
    const {id} = useParams()
    const {loading, error, data} = useQuery(CATEGORY, {
        variables: {id: id}
    })

    if (loading) return <p>Loading...</p>
    if (error) return <p>Error :(</p>

        console.log(data)

    return (
        <div>
            <h2>{data.category.Category}</h2>
           {data.category.reviews.map(review => (
                <div key={review.id} className="review-card">
                    <div className="rating">{review.Rating}</div>
                    <h2>{review.Title}</h2>
                    
                    {review.categories.map(category => (
                        <small key={category.id}>{category.Category}</small>
                    ))}
                    
                    <p>{review.Body.substring(0, 200)}...</p>
                    <Link to={`/details/${review.id}`}>Read more</Link>
                </div>
            ))} 
        </div>
    )
}
