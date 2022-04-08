import React from 'react';
import PropTypes from "prop-types";

const Header = ({
    name='',
    transform='lowercase',
    color='primary',
    opacity='1',
    size='1',
    textCenter = ''
}) => {

    const text = 'text-';

    return (
        React.createElement(`h${size}`, { className: `${text}${transform} opacity-${opacity} ${text}${color} mb-2 ${textCenter}`}, name)
    );
};

Header.propTypes = {
    name: PropTypes.string,
    transform: PropTypes.string,
    color: PropTypes.string,
    opacity: PropTypes.string,
    size: PropTypes.string,
}

export default Header;