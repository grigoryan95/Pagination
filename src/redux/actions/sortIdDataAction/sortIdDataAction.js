import {SORT_ID_DATA} from "../../actionTypes/actionTypes";

export const sortIdDataAction = (sort) => {
    return {
        type: SORT_ID_DATA,
        payload: sort
    }
};