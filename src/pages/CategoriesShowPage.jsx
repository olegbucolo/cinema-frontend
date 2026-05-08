import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import axios from 'axios'

export function CategoriesShowPage() {

    const [category, setCategory] = useState([]);

    const { id } = useParams();

    useEffect(() => {
        axios.get(`http://localhost:8080/api/categories/${id}`)
            .then(res => {
                setCategory(res.data);
            })
            .catch(err => {
                console.log('error happened in CategoriesShowPage')
            })
    })

    return (
        <section className="vh-100">
            <h1>{category.title}</h1>
            <h1>{category.description}</h1>
        </section>
    )
}