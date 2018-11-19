import axios from "axios";
import * as actionTypes from './actionTypes'

const changeDeatail = (title, content) => ({
    type: actionTypes.CHANGE_DETAIL,
    title,
    content
});

export const getDetail = (id) => {
    return (dispatch) => {
        axios.get('/api/detail.json?id='+id).then((res) => {
            const result = res.data.data;
            dispatch(changeDeatail(result.title, result.content))
        })
    }
};