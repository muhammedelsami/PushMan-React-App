import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer>
            <p>&copy; {new Date().getFullYear()} <a href="https://www.muhammedelsami.com">Muhammed Elsami.</a>  All rights reserved.</p>
        </footer>
    );
};

export default Footer;
