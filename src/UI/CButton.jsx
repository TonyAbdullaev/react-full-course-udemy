import React from 'react';

const CButton = ({children, ...props}) => {
    return (
        <button className="button" {...props}>
            {children}
        </button>
    );
};

export default CButton;