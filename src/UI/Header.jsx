import React from 'react';

const Header = ({children}) => {
    return (
        <header className="page-header">
            {children}
        </header>
    );
};

export default Header;