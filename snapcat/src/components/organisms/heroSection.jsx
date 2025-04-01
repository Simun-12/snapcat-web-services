import React from 'react';


const HeroSection = () => {
    return (
        <div className="hero-section">
            <div className="hero-banner">
                <h1>Welcome to SnapCat</h1>
                <p>Find your favorite cats and more!</p>
            </div>
            <div className="hero-search">
                <input
                    type="text"
                    placeholder="Search for cats..."
                    className="search-input"
                />
                <button className="search-button">Search</button>
            </div>
        </div>
    );
};

export default HeroSection;