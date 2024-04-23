// Telas para users logados

import { Routes, Route } from "react-router-dom";

import { CreateMovie } from "../pages/createMovie";
import { Home } from "../pages/home";
import { MoviePreview } from "../pages/moviePreview";
import { Perfil } from "../pages/perfil";

export function AppRoutes() {
    return(
        <Routes>
            <Route path="/" element={<Home />} />;
            <Route path="/createMovie" element={<CreateMovie />} />;
            <Route path="/moviePreview" element={<MoviePreview />} />;
            <Route path="/perfil" element={<Perfil />} />;
        </Routes>
    )
}