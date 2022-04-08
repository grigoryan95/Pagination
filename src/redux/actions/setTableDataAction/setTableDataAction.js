import {SET_TABLE_DATA} from "../../actionTypes/actionTypes";
import axios from "axios";

export const fetchTableData = (offset = 10, limit= 10) => {
    return (dispatch) => {
        axios({
            method: "get",
            url: `https://hihub-dev.kree.dev/api/categories/?offset=${offset}&limit=${limit}`
        }).then(response => {
                dispatch({
                    type: SET_TABLE_DATA,
                    payload: response.data
                })
            }
        ).catch(error => console.error(error));
    };
};