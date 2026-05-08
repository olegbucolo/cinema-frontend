import { NavLink } from "react-router-dom";

export function CategoryCard({ category }) {
    return (
        <div className="col-3 mb-3 d-flex border">
            <div className="w-100 d-flex flex-column">
                <p>{category.title}</p>
                <p>{category.description}</p>
            </div>
        </div>
    )
}