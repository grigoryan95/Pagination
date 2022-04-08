import React from 'react';
import Stack from '@mui/material/Stack';
import ButtonMUI from '@mui/material/Button';

const Button = ({name, click}) => {
    return (
        <Stack spacing={2} direction="row">
            <ButtonMUI onClick={click} variant="contained">{name}</ButtonMUI>
        </Stack>
    );
};

export default Button;