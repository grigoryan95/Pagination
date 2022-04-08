import React from 'react';

const Header = ({name, transform, color, opacity}) => {
    const text = 'text-';
    return (
        <div>
            <h1 className={`${text}${transform} opacity-${opacity} ${text}${color}`}>{name}</h1>
        </div>
    );
};

export default Header;