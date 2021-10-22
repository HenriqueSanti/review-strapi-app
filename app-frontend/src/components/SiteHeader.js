import React from 'react'
import {Link} from 'react-router-dom'
import { useQuery, gql } from '@apollo/client'

const CATEGORIES = gql`
    query getCategories {
        categories {
            Category,
            id
        }
    }
`

export default function SiteHeader() {
    const {loading, error, data} = useQuery(CATEGORIES)

    if (loading) return <p>Loading...</p>
    if (error) return <p>Error :(</p>

    console.log(data)    

    return (
        <div className="site-header">
            <Link to="/"><h1>Cinema Reviews</h1></Link>
            <nav className="categories">
                {data.categories.map(category => (
                    <Link key={category.id} to={`/category/${category.id}`}>
                        {category.Category}
                    </Link>
                ))}
            </nav>
        </div>
    )
}
