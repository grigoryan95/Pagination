import React, {useState} from 'react';
import './TablePage.css';
import {Button, Header, Table} from "../../component";
import {useDispatch, useSelector} from "react-redux";
import {deleteTableIdAction} from "../../redux/actions/deleteTableIdAction/deleteTableIdAction";
import {sortIdDataAction} from "../../redux/actions/sortIdDataAction/sortIdDataAction";
import {setUpdateProduct} from "../../redux/actions/setUpdateProduct/setUpdateProduct";

const TablePage = () => {

    const  dispatch = useDispatch();
    const dataSource = useSelector(data => data.tableDataReducer.dataSource);
    const [editableId, setEditableId] = useState(null);
    const [sort, setSort] = useState(true);


    const deleteHandlerById = id => {
       dispatch(deleteTableIdAction(id))
    }

    const editHandler = id => {
        setEditableId(id)
    }

    const sortData = () => {
        dispatch(sortIdDataAction(sort))
        setSort(!sort)
    }

    const columns = [
        {
            title: 'ID',
            key: 'id',
            handlerClick: () => {
                sortData()
            },
            customRender: () => {
                return <i className={`${sort ? 'bi bi-arrow-up': 'bi bi-arrow-down'}`}/>
            }
        },
        {
            title: 'Name Rus',
            key: 'titleRus',
            editable: true
        },
        {
            title: 'Arm Title',
            key: 'titleArm',
            editable: true,
        },
        {
            title: 'Title',
            key: 'title',
            editable: true,
        },
        {
            title: 'Actions',
            key: 'actions',
            customRenderChild: (item, index, arr) => {
                return (
                    <td key='actions'>
                        <Button
                            action={() => editHandler(item.id)}
                            size="outline-success"
                            name="Edit"
                            key={'edit'}
                        />
                        <Button
                            size="outline-danger"
                            name="Delete"
                            action={() => deleteHandlerById(item.id)}
                            key={'delete'}
                            margin="md-2"
                        />
                    </td>
                )
            },
            saveEditableData: (id, i) => {
                const item = dataSource.find(e => e.id === id);
                setUpdateProduct(id, item)
                setEditableId(null);
            },
            cancelEditable: () => {
                setEditableId(null);
            }

        },
    ];

    return (
        <div className="tablePage">
            <Header name="Products" transform="capitalize" size="2" textCenter="text-center"/>
            <Table
                dataSource={dataSource}
                columns={columns}
                editableId={editableId}
                withCheckbox
                withPagination
            />
            {/*<Button disabled={false}*/}
            {/*    type="outline"*/}
            {/*    color="secondary"*/}
            {/*    size="lg"*/}
            {/*    name="Sign In"*/}
            {/*    margin="auto"*/}
            {/*    display="block"*/}
            {/*/>*/}
        </div>
    );
};

export default TablePage;