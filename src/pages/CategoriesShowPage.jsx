import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import axios from 'axios'
import api from '../api/api'

export function CategoriesShowPage() {

    const [category, setCategory] = useState([]);

    const { id } = useParams();

    useEffect(() => {
        api.get(`categories/${id}`)
            .then(res => {
                setCategory(res.data);
            })
            .catch(err => {
                console.log('error happened in CategoriesShowPage')
            })
    })

    return (
        <section className="vh-100 mt-5">
            <h2 className="m-0 mb-3">{category.title}</h2>

            <p>{category.description}</p>
        </section>
    )
}