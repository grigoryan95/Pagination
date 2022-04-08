import {SET_PRODUCTS} from "../../actionTypes/actionTypes";
import axios from "axios";

export const fetchProducts = (textValue = '',offset = 0, limit= 10 ) => {
    return (dispatch) => {
        axios({
            method: "get",
            url: `https://hihub-dev.kree.dev/api/storage/search?offset=${offset}&limit=${limit}&beginning=${textValue}`
        }).then(response => {
            console.log(response.data)
                dispatch({
                    type: SET_PRODUCTS,
                    payload: response.data
                })
            }
        ).catch(error => console.error(error));
    };
};