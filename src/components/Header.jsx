import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <h3> <Link to='./'>Home</Link>
                <Link to='./login'>Login</Link>
            </h3>
        </div>
    );
};

export default Header;