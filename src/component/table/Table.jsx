import React, {useState} from 'react';
import './Table.scss';
import {Button, Checkbox, Pagination, TBody, THead} from "../index";

const Table = ({dataSource, columns, withCheckbox, editableId, withPagination}) => {

    const [checked, setChecked] = useState([]);
    const handleChangeInput = (item) => {
        const newData = checked.includes(item.id)
            ? checked.filter(e => e !== item.id)
            : [...checked, item.id];
        setChecked(newData);
    }

    // const saxranit = () => {
    //     console.log('saxranit')
    // }
    // const otmena = () => {
    //     console.log('otmena')
    // }
    // console.log(columns.slice(-1))
    // if (test) {
    //     columns = columns.pop()
    // }
    // if (test) {
    //     columns = columns.splice(-1, 1, {
    //         title: 'aaa',
    //         key: 'aaa',
    //         customRenderChild: (item, index, arr) => {
    //             return <td className="with-check">
    //                 <Button
    //                     action={() => saxranit(item.id)}
    //                     size="outline-success"
    //                     name="saxranit"
    //                     key={'edit'}
    //                 />
    //                 <Button
    //                     size="outline-danger"
    //                     name="otmena"
    //                     action={() => otmena(item.id)}
    //                     key='delete'
    //                     margin="md-2"
    //                 />
    //             </td>
    //         }
    //     })
    // }

    // if (test) {
    //     console.log('mta',columns)
    //     let a = columns.pop()
    //     columns = [...columns,{
    //         title: 'Save',
    //         key: 'save',
    //         customRenderChild: (item, index, arr) => {
    //             return <td className="with-check">
    //                 <Button
    //                     action={() => saxranit(item.id)}
    //                     size="outline-success"
    //                     name="saxranit"
    //                     key={'edit'}
    //                 />
    //                 <Button
    //                     size="outline-danger"
    //                     name="otmena"
    //                     action={() => otmena(item.id)}
    //                     key='delete'
    //                     margin="md-2"
    //                 />
    //             </td>
    //         }
    //     }
    //     ];
    // }

    if (withCheckbox) {
        columns = [{
            title: '#',
            key: '#',
            customRenderChild: (item, index, arr) => {
                return <td className="with-check">
                    <Checkbox
                        checked={checked.includes(item.id)}
                        defaultChecked={false}
                        labelName='Click'
                        key={index}
                        change={(e) => handleChangeInput(item, index, arr, e)}
                        type='checkbox'
                        width='100'
                        inputSize='sm'
                        height='25'
                        formCheckInput='form-check-input'
                    />
                </td>
            }
        },
            ...columns
        ];
    }

    return (
        <>
            <table className="table table-bordered  border border-dark border-2 w-50 h-auto mx-auto tableComponent">
                <THead columns={columns} />
                <TBody checked={checked} columns={columns} dataSource={dataSource} editableId={editableId}/>
            </table>
            <div className="tablePagination">
                {withPagination ? <Pagination /> : null}
            </div>
        </>

    );
};

export default Table;