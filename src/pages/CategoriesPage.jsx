import { useEffect, useState } from 'react'
import { CategoryCard } from '../components/CategoryCard';
import axios from 'axios'

export function CategoriesPage() {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:8080/api/categories")
        .then(res => {
            setCategories(res.data)
        })
        .catch(err => {
            console.log(err.message)
        })
    }, [])

    return (
        <section className="min-vh-100">
            <h1>Categorie</h1>
            <ul className="m-0 p-0 section">
                <li className="row">
                    {categories.map(category => (
                        <CategoryCard key={category.id} category={category} />
                    ))}
                </li>

            </ul>
        </section>
    )
}