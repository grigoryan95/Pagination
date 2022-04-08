import React from 'react';

const Checkbox = ({
  change = null,
  classStyle = 'form-control',
  htmlFor = 'text',
  name = 'Enter Your Text',
  marginBottom = '',
  formCheckInput = '',
  checked = false,
  defaultChecked = false,
  labelName = ''
}) => {

    return (
        <label className={`custom-checkbox`}>
            <span>{labelName}</span>
            <input
                defaultChecked={defaultChecked}
                id={htmlFor}
                type="checkbox"
                name={name}
                className={`${classStyle} mb-${marginBottom} ${formCheckInput} inputCheckBox`}
                onChange={(e) => change(e.target)}
                checked={checked}
            />
            <span className="checkmark"/>
        </label>
    );
};

export default Checkbox;
