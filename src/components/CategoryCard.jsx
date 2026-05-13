import { NavLink } from "react-router-dom";

export function CategoryCard({ category }) {
    return (
        <div className="col-3 mb-3 d-flex">
            <div className="w-100 d-flex border px-2 flex-column pt-2">
                <p>{category.title}</p>
                <p>{category.description}</p>
            </div>
        </div>
    )
}