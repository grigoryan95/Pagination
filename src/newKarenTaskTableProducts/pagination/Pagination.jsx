import React, {useEffect, useState} from 'react';
import Pagination from "react-pagination-library";
import "react-pagination-library/build/css/index.css";
import {useDispatch, useSelector} from "react-redux";
import {fetchProducts} from "../../redux/actions/setProducts/setProducts";

const Paginationp = () => {
    const dispatch = useDispatch()
    const [currentPage, setCurrentPage] = useState(1);
    const productsCount  = useSelector((state) => state.tableDataReducer.productsCount);
    const changeCurrentPage = numPage => {
        setCurrentPage(numPage)
    };

    useEffect(() => {
        dispatch(fetchProducts('', currentPage))
    }, [currentPage])

    return (
        <div>
            <Pagination
                currentPage={currentPage}
                totalPages={Math.ceil(productsCount / 10)}
                changeCurrentPage={changeCurrentPage}
                theme="bottom-border"
            />
            <h2>current Page:{currentPage}</h2>
        </div>
    );
};

export default Paginationp;