import React from 'react';

const Navbar = () => {
    return (
        <nav style={styles.navbar}>
            {/* Left Section */}
            <div style={styles.leftSection}>
                <img
                    src="https://via.placeholder.com/50"
                    alt="Logo"
                    style={styles.logo}
                />
                <input
                    type="text"
                    placeholder="Search..."
                    style={styles.searchBar}
                />
            </div>

            {/* Center Section */}
            <div style={styles.centerSection}>
                <a href="#contact" style={styles.navLink}>
                    Contact Us
                </a>
                <a href="#community" style={styles.navLink}>
                    Community
                </a>
                <a href="#about" style={styles.navLink}>
                    About Us
                </a>
            </div>

            {/* Right Section */}
            <div style={styles.rightSection}>
                <button style={styles.loginButton}>Login</button>
            </div>
        </nav>
    );
};

const styles = {
    navbar: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '10px 20px',
        backgroundColor: '#333',
        color: '#fff',
    },
    leftSection: {
        display: 'flex',
        alignItems: 'center',
    },
    logo: {
        height: '50px',
        marginRight: '10px',
    },
    searchBar: {
        padding: '5px',
        borderRadius: '4px',
        border: '1px solid #ccc',
    },
    centerSection: {
        display: 'flex',
        gap: '15px',
    },
    navLink: {
        color: '#fff',
        textDecoration: 'none',
        fontSize: '16px',
    },
    rightSection: {
        display: 'flex',
        alignItems: 'center',
    },
    loginButton: {
        padding: '5px 10px',
        backgroundColor: '#007BFF',
        color: '#fff',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer',
    },
};

export default Navbar;