import React from 'react';
import './TBody.css';
import {NoData} from "../../../utils";
import {useDispatch} from "react-redux";
import {Button, Input} from "../../index";
import {setTableInputValueAction} from "../../../redux/actions/setTableInputValue/setTableInputValueAction";

const TBody = ({dataSource, columns, checked, editableId}) => {
    const  dispatch = useDispatch();

    const dataArr = dataSource.map((item, index, arr) => {
        return (
            <tr key={item.id} className={checked.includes(item.id) ? 'bg-info' : null}>
                {
                    columns.map(column => {
                        const { key, customRenderChild, editable } = column;
                        const cell = item.hasOwnProperty(key) && item[key];
                        if (editableId && editable) {
                            if (item.id === editableId) {
                                return <td>
                                    <Input
                                        change={(e) => dispatch(setTableInputValueAction(editableId, key, e.value))}
                                        value={cell}
                                        key={key}
                                        type={'text'}
                                        width={'100'}
                                        inputSize={'sm'}
                                        height={'25'}
                                    />
                                </td>

                            }
                        }
                        if (item.id === editableId && key === 'actions') {
                            return <td>
                                <Button
                                    type="outline"
                                    size="outline-success"
                                    name='save'
                                    action={() => column.saveEditableData(item.id, item)}
                                />
                                <Button
                                    type="outline"
                                    margin="ml-2"
                                    size="outline-danger"
                                    name='cancel'
                                    action={() => column.cancelEditable()}
                                />
                            </td>
                        }
                        if (cell && customRenderChild) {
                            return (
                                <td onClick={cell.handlerClickChild ? columns.handlerClickChild : null} key={key}>
                                    {customRenderChild(item, index, arr)}
                                </td>
                            );
                        }
                        if (!cell) {
                            if (customRenderChild) {
                                return customRenderChild(item, index, arr);
                            }
                            return <td key={key}>Data is Empty</td>
                        }
                        return (
                            <td onClick={(cell && cell.handlerClickChild) ? () => cell.handlerClickChild(item, index, arr) : null}
                                key={key}>
                                {item[key]}
                            </td>
                        )
                    })
                }
            </tr>
        );
    });

    return (
        <>
            <tbody className="tBody">
                {
                    dataSource
                        ? dataArr
                        : <tr>
                            <td colSpan={columns.length}>
                                <NoData/>
                            </td>
                          </tr>
                }
            </tbody>
        </>
    );
};

export default TBody;