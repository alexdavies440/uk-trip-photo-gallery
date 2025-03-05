import { useState } from "react";

export default function Categories({ setCategory }) {
    
    return (
        <div id="categories">
            <div className="category-image" onClick={() => setCategory("wales")}>
                <h3>Wales</h3>
                <img src="/src/assets/trip-photos/wales/IMG_2314.jpeg" alt="Wales category photo" />
            </div>
            <div className="category-image" onClick={() => setCategory("central-bath")}>
                <h3>Central Bath</h3>
                <img src="/src/assets/trip-photos/central-bath/IMG_2147.jpeg" alt="Central Bath category photo" />
            </div>
            <div className="category-image" onClick={() => setCategory("roman-baths")}>
                <h3>Roman Baths</h3>
                <img src="/src/assets/trip-photos/roman-baths/IMG_2206.jpeg" alt="" />
            </div>
            <div className="category-image" onClick={() => setCategory("london")}>
                <h3>London</h3>
                <img src="/src/assets/trip-photos/london/IMG_2269.jpeg" alt="" />
            </div>
            <div onClick={() => setCategory("all")}>
                <h3>View All</h3>
            </div>
        </div>
    );
}