import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import UserType from "./pages/UserType/UserType";
import { Register } from "./pages/Register/Register";

const routes = () => {
    return (
        <Suspense fallback="Loading...">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/user-type" element={<UserType />} />
                <Route path="/register/:type/info?" element={<Register />} />
                <Route path="/login" element={<Login />} />
            </Routes>
        </Suspense>
    )
};

export default routes;