import React from 'react';
import {Stack} from "@mui/material";
import PaginationMUI from '@mui/material/Pagination';

const Pagination = ({changeCurrentPage, productsCount, defaultPage = 1}) => {

    return (
            <Stack spacing={2}>
                <PaginationMUI defaultPage={defaultPage} count={Math.ceil(productsCount / 10)} onChange={changeCurrentPage} />
            </Stack>
    );
};

export default Pagination;