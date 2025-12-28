import { Route, Routes } from "react-router-dom"
import { ROUTES } from "./routePaths";
import { HomePage } from "@/pages/HomePage";
import { ProductPage } from "@/pages/Product";


export const AppRoutes = () => (
    <Routes>
        <Route path={ROUTES.HOME} element={<HomePage />}/>
        <Route path={ROUTES.PRODUCTS} element={<ProductPage />}/>
    </Routes>
);