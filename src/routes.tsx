import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login/Login";
import UserType from "./pages/UserType/UserType";
import { Register } from "./pages/Register/Register";
import HomeMedium from "./pages/Home/HomeMedium";
import Meals from "./pages/Meals/Meals";
import MealDetail from "./pages/Meals/MealDetail";
import MealRegister from "./pages/Meals/MealRegister";
import Payment from "./pages/Donation/Payment";
import PaymentSuccess from  "./pages/Donation/PaymentSuccess";
const routes = () => {
    return (
        <Suspense fallback="Loading...">
            <Routes>
                <Route path="/" element={<HomeMedium />} />
                <Route path="/user" element={<UserType />} />
                <Route path="user/register/:type/info?" element={<Register />} />
                {/* <Route path="user/update/:type" element={<AccUpdate />} /> */}
                <Route path="/login" element={<Login />} />
                <Route path="/meals" element={<Meals />} />
                <Route path="/meals/:id" element={<MealDetail />} />
                <Route path="/meals/create" element={<MealRegister />} />
                <Route path="/payment" element={<Payment />} />
                <Route path="/success" element={<PaymentSuccess />} />
            </Routes>
        </Suspense>
    )
};

export default routes;