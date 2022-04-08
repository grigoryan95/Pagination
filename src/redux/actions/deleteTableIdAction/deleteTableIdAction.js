import {DELETE_TABLE_ID} from "../../actionTypes/actionTypes";

export const deleteTableIdAction = (id) => {

    return {
        type: DELETE_TABLE_ID,
        payload: id
    }

};