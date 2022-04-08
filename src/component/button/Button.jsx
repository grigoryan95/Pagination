import React from 'react';
import PropTypes from 'prop-types';
import {Link} from "react-router-dom";

const Button = ({
    action = null,
    type = 'submit',
    name = 'Enter Your Text',
    size = 'lg',
    color = 'primary',
    disabled = false,
    children = '',
    margin = '',
    display = '',
    navLink = ''
}) => {

    return (
        <button
            onClick={action}
            type={type}
            disabled={disabled && disabled}
            className={`btn btn-${size} btn-${type ? type + '-' + color : color} ${size} d-${display} m-${margin} cancel`}
        >
                <Link className="text-decoration-none" to={navLink}>{children ? children : name}</Link>
        </button>
    );
};

Button.propTypes = {
    name: PropTypes.string.isRequired,
    action: PropTypes.func,
    type: PropTypes.string,
    size: PropTypes.string,
    color: PropTypes.string,
    disabled: PropTypes.bool,
    children: PropTypes.string,
    data: PropTypes.array,
    navLink: PropTypes.string,
};

export default Button;
