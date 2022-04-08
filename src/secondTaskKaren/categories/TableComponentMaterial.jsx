import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import Input from "../input/Input";
import Pagination from "../pagination/Pagination";
import {fetchCategories} from "../../redux/actions/categories/setCategories";


const Categories = () => {
    const products  = useSelector((state) => state.tableDataReducer.categories);
    const productsCount = useSelector((state) => state.tableDataReducer.categoriesCount);
    const [name, setName] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const dispatch = useDispatch();
    const handleChange = (event) => {
        setName(event.target.value);
        setCurrentPage(1);
    };
    const changeCurrentPage = (event, value) => {
        setCurrentPage(value);
    };

    useEffect(() => {
        dispatch(fetchCategories(name, (currentPage - 1)  * 10));
    }, [name, currentPage]);

    return (
        <div className="secondDiv">
            <Input name={name} handleChange={handleChange} />
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Name</TableCell>
                            <TableCell align="right">Price</TableCell>
                            <TableCell align="right">Manufacturer</TableCell>
                            <TableCell align="right">Box Quantity</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {products.map((item) => (
                            <TableRow
                                key={item.id}
                                sx={{ '&:last-child td': { border: 0 } }}
                            >
                                <TableCell>{item.title}</TableCell>
                                <TableCell align="right">{item.price}</TableCell>
                                <TableCell align="right">{item.producer}</TableCell>
                                <TableCell align="right">{item.quantityInBox}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <Pagination changeCurrentPage={changeCurrentPage} productsCount={productsCount}/>
        </div>
    );
}

export default Categories;