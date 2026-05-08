import { NavLink } from "react-router-dom";

export function MovieCard({ movie }) {
    return (
       <div className="col-3 mb-3 d-flex">
  <div className="w-100 d-flex flex-column">
    
    <img
      className="w-100"
      style={{ height: "250px", objectFit: "cover" }}
      src={movie.movieURL}
      alt=""
    />

    <NavLink
      to={`${movie.id}`}
      className="d-block text-dark link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover"
    >
      {movie.title}
    </NavLink>

    <div>
      {movie.categories.map(category => (
        <NavLink
          key={category.id}
          to={`/api/categories/${category.id}`}
          style={{fontSize: ".8rem"}}
          className="text-uppercase opacity-75 text-secondary me-2 text-decoration-underline link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover"
        >
          {category.title}
        </NavLink>
      ))}
    </div>

  </div>
</div>
    )
}