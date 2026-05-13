import axios from "axios";
import { useState, useEffect } from "react";
import { MovieCard } from "../components/MovieCard";
import api from '../api/api'

export function MoviesPage() {

    const [movies, setMovies] = useState([]);

    useEffect(() => {

        api.get("/movies")
            .then(response => {
                setMovies(response.data);
            })
            .catch(error => {
                console.error("ERROR: ", error);
            });

    }, []);

    return (
        <section className="min-vh-100">
            <h1>Film</h1>
            <ul className="m-0 p-0 section">

                <li className="row">
                    {movies.map(movie => (
                        <MovieCard key={movie.id} movie={movie} />
                    ))}
                </li>

            </ul>
        </section>
    );
}