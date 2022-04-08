import React, {useEffect, useState} from 'react';
import './Table.css';
import {fetchProducts} from "../../redux/actions/setProducts/setProducts";
import {useDispatch, useSelector} from "react-redux";
import Paginationp from "../pagination/Pagination";
import Input from "../input/Input";

const Table = () => {

    const products  = useSelector((state) => state.tableDataReducer.products);
    const dispatch = useDispatch();
    const [inputValue, setInputValue] = useState('');

    useEffect(() => {
        dispatch(fetchProducts());
    }, []);

    useEffect(() => {
        dispatch(fetchProducts(inputValue));
    }, [inputValue]);

    const search = (e) => {
        setInputValue(e.target.value);
    }

    const  productArray = products.map((item) => {
        return (
            <React.Fragment key={item.id}>
                <tr>
                    <td>{item.title}</td>
                    <td>{item.price}</td>
                    <td>{item.producer}</td>
                    <td>{item.quantityInBox}</td>
                </tr>
            </React.Fragment>
        )
    })

    return (
        <div className="newTable">
            <Input inputValue={inputValue} search={search}/>
            <table>
                <tr>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Manufacturer</th>
                    <th>Box Quantity</th>
                </tr>
                {productArray}
            </table>
            <Paginationp/>
        </div>
    );
};

export default Table;