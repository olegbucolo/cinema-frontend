import { Outlet } from "react-router-dom";
import { HeaderComponent } from "../components/HeaderComponent";
import { FooterComponent } from "../components/FooterComponent";

export function DefaultLayout() {
    return (
        <>
            <HeaderComponent/>
            <Outlet />
            <FooterComponent/>
        </>
    )
}