import React from 'react';

const Button = (props) => {

    const size = `btn-${props.size}`;
    const disabled = props.disabled && 'btn-disabled';
    const color = `btn-${props.type?props.type + '-' + props.color:props.color}`;

    return (
        <div>
            <button
                onClick={props.action}
                type="submit"
                disabled={props.disabled && props.disabled}
                className={`btn ${color} ${size} ${disabled}`}
            >
                {props.children ? props.children : props.name}
            </button>
        </div>
    );
};

export default Button;
