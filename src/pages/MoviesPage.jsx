import axios from "axios";
import { useState, useEffect } from "react";
import { MovieCard } from "../components/MovieCard";

export function MoviesPage() {

    const [movies, setMovies] = useState([]);

    useEffect(() => {

        axios.get("http://localhost:8080/api/movies")
            .then(response => {
                setMovies(response.data);
            })
            .catch(error => {
                console.error(error);
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