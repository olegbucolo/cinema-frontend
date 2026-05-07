import axios from "axios";
import { useState, useEffect } from "react";
import { MovieCard } from "../components/MovieCard";

export function HomePage() {

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
        <section className="bg-secondary vh-100">
            <h1>Film</h1>

            {movies.map(movie => (
                <MovieCard key={movie.id} movie={movie}/>
            ))}
        </section>
    );
}