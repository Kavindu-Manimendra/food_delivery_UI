import React from 'react';
import Menubar from "./components/Menubar/Menubar.jsx";
import {Route, Routes} from "react-router-dom";
import Home from "./pages/Home/Home.jsx";
import ContactUs from "./pages/Contact Us/ContactUs.jsx";
import ExploreFood from "./pages/ExploreFood/ExploreFood.jsx";
import FoodDetails from "./pages/FoodDetails/FoodDetails.jsx";
import Cart from "./pages/Cart/Cart.jsx";

const App = () => {
    return (
        <div>
            <Menubar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/contact" element={<ContactUs />} />
                <Route path="/explore" element={<ExploreFood />} />
                <Route path="/food/:id" element={<FoodDetails />} />
                <Route path="/cart" element={<Cart />} />
            </Routes>
        </div>
    );
};

export default App;