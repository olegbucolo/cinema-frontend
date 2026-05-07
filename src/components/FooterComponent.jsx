import { NavLink } from "react-router-dom";

export function FooterComponent() {
    return (
        <footer className="bg-dark py-3 d-flex align-items-center">
            <div>
                <ul className="m-0">
                    <NavLink to="movies" className="d-block text-light">Film</NavLink>
                    <NavLink to="categories" className="d-block text-light">Categorie</NavLink>
                </ul>
            </div>
            <div></div>
        </footer>
    )
}