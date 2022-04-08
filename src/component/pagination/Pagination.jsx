import React, {useEffect, useState} from 'react';
import './Pagination.css';
import {useSelector, useDispatch} from "react-redux";
import {fetchTableData} from "../../redux/actions/setTableDataAction/setTableDataAction";
import {Next, Prev} from "../index";

const Pagination = () => {
    const dataCount = useSelector(data => data.tableDataReducer.dataCount);
    const [page, setPage] = useState(1);


    const dispatch = useDispatch()
    const item = []

    const handleClick = i => {
        setPage(i)
    }

    useEffect(() => {
        dispatch(fetchTableData((page-1) * 10))
    }, [page])

    for (let i = 1; i <= Math.ceil(dataCount / 10); i++) {
        item.push(i)
    }

    let test = item.filter(e => {
        return e === page || e === page - 1 || e === page - 2 || e === page + 1 || e === page + 2
    }).map((i) => {
        return (
            <a key={i} className={i === page ? 'active' : null} onClick={() => handleClick(i)}>{i}</a>
        )
    })
    return (
        <>
            <div className="pagination">
                <Prev page={page} handleClick={handleClick}/>
                {test}
                <Next page={page} handleClick={handleClick} dataCount={dataCount} item={item}/>
            </div>
        </>
    );
};

export default Pagination;