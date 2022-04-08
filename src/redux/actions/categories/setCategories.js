import {SET_CATEGORIES} from "../../actionTypes/actionTypes";
import axios from "axios";

export const fetchCategories = (textValue = '',offset = 0, limit= 10 ) => {
    return (dispatch) => {
        axios({
            method: "get",
            url: `http://18.223.35.168:5005/api/categories/search?limit=${limit}&offset=${offset}&beginning=${textValue}`
        }).then(response => {
                console.log(response.data)
                dispatch({
                    type: SET_CATEGORIES,
                    payload: response.data
                })
            }
        ).catch(error => console.error(error));
    };
};