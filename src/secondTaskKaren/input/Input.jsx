import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

const Input = ({name, handleChange}) => {

    return (
        <>
            <Box
                component="form"
                sx={{
                    '& > :not(style)': { m: 1, width: '25ch' },
                }}
                noValidate
                autoComplete="off"
            />
                <TextField
                    id="outlined-name"
                    label="Name"
                    value={name}
                    onChange={handleChange}
                />
        </>

    );
};

export default Input;