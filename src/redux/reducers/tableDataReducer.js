import {
    DELETE_TABLE_ID,
    EDD_TABLE_INPUT_VALUE,
    SET_PRODUCTS,
    SET_TABLE_DATA,
    SORT_ID_DATA,
    SET_CATEGORIES
} from "../actionTypes/actionTypes";

const initialState = {
    dataSource: [],
    dataCount: 0,
    loadNow: false,
    products: [],
    productsCount: 0,
    categories: [],
    categoriesCount: 0
};

export const tableDataReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_TABLE_DATA: {
            return {
                ...state,
                dataSource: action.payload.result,
                dataCount: action.payload.count
            }
        }
        case SET_CATEGORIES: {
            return {
                ...state,
                categories: action.payload.result,
                categoriesCount: action.payload.count
            }
        }
        case SET_PRODUCTS: {
            return {
                ...state,
                products: action.payload.result,
                productsCount: action.payload.count
            }
        }
        case DELETE_TABLE_ID: {
            return {
                ...state,
                dataSource: state.dataSource.filter(e => e.id !== action.payload)
            }
        }
        case SORT_ID_DATA: {
            if (action.payload) {
                return {
                    ...state,
                    dataSource: [...state.dataSource.sort((a, b) => a.id - b.id)]
                }
            } else {
                return {
                    ...state,
                    dataSource: [...state.dataSource.sort((a, b) =>b.id - a.id  )]
                }
            }

        }
        case EDD_TABLE_INPUT_VALUE: {
            return {
                ...state,
                dataSource: state.dataSource.map(e => e.id === action.payload.id ? ({...e, [action.payload.key]: action.payload.value}) : (e))
            }
        }
        default:
            return state
    }
};