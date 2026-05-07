import { NavLink } from "react-router-dom";

export function HeaderComponent(){
    return (
        <header className="bg-dark py-3 d-flex align-items-center">
            <nav >
                <ul className="m-0">
                    <NavLink to="movies" className="py-2 text-light" >Film</NavLink>
                    <NavLink to="categories" className="ms-4 py-2 text-light" >Categorie</NavLink>
                </ul>
            </nav>
        </header>
    )
}