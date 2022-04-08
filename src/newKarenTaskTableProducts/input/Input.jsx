import React from 'react';

const Input = ({inputValue, search}) => {
    return (
        <>
            <input
                type="text"
                id="myInput"
                onChange={(e) => search(e)}
                placeholder="Search for names.."
                title="Type in a name"
                value={inputValue}
            />
        </>
    );
};

export default Input;