import {EDD_TABLE_INPUT_VALUE} from "../../actionTypes/actionTypes";

export const setTableInputValueAction = (id, key, value) => {
    return {
        type: EDD_TABLE_INPUT_VALUE,
        payload: {id, key, value},
    }
};