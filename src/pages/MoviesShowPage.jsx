import axios from "axios";
import { useState, useEffect } from "react";
import { MovieCard } from "../components/MovieCard";
import { NavLink, useParams } from "react-router-dom";

export function MoviesShowPage() {
    const { id } = useParams();
    const [movie, setMovie] = useState({
        categories: []
    });

    useEffect(() => {

        axios.get("http://localhost:8080/api/movies/" + id)
            .then(response => {
                setMovie(response.data);
            })
            .catch(error => {
                console.error(error);
            });

    }, []);

    return (
        <section className="min-vh-100 mt-5">
            <div className="movie-wrapper d-flex">
                <div className="movie-img w-50">
                    <img className="w-100" style={{ objectFit: "cover", height: "max-content" }} src={movie.movieURL} alt="" />
                </div>
                <div className="texts ps-2 w-50">
                    <div className="movie-top">
                        <h2 className="m-0 mb-3">{movie.title}</h2>
                        {
                        movie.categories.map(category => (
                            <NavLink
                                key={category.id}
                                to={`/api/categories/${category.id}`}
                                className="opacity-75 text-secondary me-2 text-decoration-underline link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover"
                            >
                                {category.title}
                            </NavLink>
                        ))}
                        <p className="mt-3">{movie.description}</p>
                    </div>
                    <div className="movie-bottom">
                        <button className="btn btn-success">Guarda</button>
                    </div>
                </div>
            </div>

        </section>
    );
}