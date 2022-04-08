import React from "react";
import './Input.css';

const Input = ({
                   change,
                   classStyle,
                   iconColor,
                   htmlFor,
                   iconName,
                   label,
                   labelColor,
                   labelSize,
                   name,
                   placeholder,
                   required,
                   type,
                   value
               }) => {

    return (
        <div className={`form-group`}>
            <label className={`${labelSize} text-${labelColor}`} htmlFor={htmlFor}>
                <strong>{label}</strong>
                <strong className='required'> {required}</strong>
            </label>
            <i className={`bi bi-${iconName} text-${iconColor}`}/>
            <input
                id={htmlFor}
                type={type}
                name={name}
                className={classStyle}
                placeholder={placeholder}
                value={value}
                onChange={(e) => change(e.target.value)}
            />
        </div>
    );
};

export default Input;