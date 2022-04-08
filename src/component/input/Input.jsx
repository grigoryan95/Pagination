import React from "react";
import './Input.css';
import PropTypes from "prop-types";

const Input = ({
    change = null,
    classStyle = 'form-control',
    iconColor = '',
    htmlFor = 'text',
    iconName = '',
    label = '',
    labelColor = 'primary',
    labelSize,
    name = 'Enter Your Text',
    placeholder = 'Enter Your Text',
    required = '*',
    type = 'text',
    value = undefined,
    width = '',
    height = '',
    inputSize = '',
    marginBottom = '',
    formCheckInput = '',
    checked = false,
    defaultChecked = false
}) => {

    return (
        <div className={`form-group w-${width} h-${height} input-group-${inputSize} `}>
            {
                label
                ?   <label className={`${labelSize ? labelSize : ''} text-${labelColor} `} htmlFor={htmlFor}>
                        <strong>{label}</strong>
                        <strong className='required'> {required}</strong>
                    </label>
                    : ''
            }
            {iconName && <i className={`bi bi-${iconName} text-${iconColor ? iconColor : ''}`}/>}
            <input
                defaultChecked={defaultChecked}
                id={htmlFor}
                type={type}
                name={name}
                className={`${classStyle} mb-${marginBottom} ${formCheckInput}`}
                placeholder={placeholder}
                value={value}
                onChange={(e) => change(e.target)}
                checked={checked}
            />
        </div>
    );
};

Input.propTypes = {
    change: PropTypes.func,
    classStyle: PropTypes.string,
    iconColor: PropTypes.string,
    htmlFor: PropTypes.string,
    iconName: PropTypes.string,
    label: PropTypes.string,
    labelColor: PropTypes.string,
    labelSize: PropTypes.string,
    name: PropTypes.string,
    placeholder: PropTypes.string,
    required: PropTypes.string,
    type: PropTypes.string,
    width: PropTypes.string,
    height: PropTypes.string,
    inputSize: PropTypes.string,
    marginBottom: PropTypes.string,
    formCheckInput: PropTypes.string

}

export default Input;