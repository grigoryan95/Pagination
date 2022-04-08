import React from 'react';
import './Container.css';
import PropTypes from "prop-types";

const Container = ({children}) => {
    return (
        <div className="container">
            {children ? children : null}
        </div>
    );
};

Container.propTypes = {
    children: PropTypes.element.isRequired
};

export default Container;