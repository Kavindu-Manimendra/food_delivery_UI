import React from "react";
import { categories} from "../../assets/assets.js";

const ExploreMenu = () => {
    return (
        <div className="explore-menu position-relative">
            <h1 className="d-flex align-items-center justify-content-between">
                Explore Our Menu
                <div className="d-flex">
                    <i className="bi bi-arrow-left-circle scroll-icon"></i>
                    <i className="bi bi-arrow-right-circle scroll-icon"></i>
                </div>
            </h1>
            <p>Explore curated lists of dishes from top categories</p>
            <div className="d-flex justify-content-between gap-4 overflow-auto explore-menu-list">

            </div>
        </div>
    );
};

export default ExploreMenu;