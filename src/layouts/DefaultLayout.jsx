import { Outlet } from "react-router-dom";
import { HeaderComponent } from "../components/HeaderComponent";
import { FooterComponent } from "../components/FooterComponent";

export function DefaultLayout() {
    return (
        <>
            <div className="min-vh-100 d-flex flex-column">
                <HeaderComponent />
                <main className="flex-grow-1 container-lg">
                    <Outlet />
                </main>
                <FooterComponent />
            </div>
        </>
    )
}