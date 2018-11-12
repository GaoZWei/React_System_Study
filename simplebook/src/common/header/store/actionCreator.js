import * as actionTypes from './actionTypes';
import axios from 'axios';
import {fromJS} from 'immutable'
export const searchFocus = () => ({
    type: actionTypes.SEARCH_FOCUS
})
export const searchBlur = () => ({
    type: actionTypes.SEARCH_BLUR
})
export const handleMouseEnter = () => ({
    type: actionTypes.MOUSE_ENTER
})
export const handleMouseLeave = () => ({
    type: actionTypes.MOUSE_LEAVE
})
export const handleChangePage = (page) => ({
    type: actionTypes.CHANGE_PAGE,
    page
})


//修改列表元素
const changeList = (data) => ({
    type: actionTypes.CHANGE_LIST,
    //数据转换为immutable格式
    data: fromJS(data),
    totalPage:Math.ceil(data.length/10)
})

export const getList = () => {
    return (dispatch) => {
        axios.get('./api/getSearchList.json').then(
            (res) => {
               const data=res.data
               dispatch(changeList(data.data))
            }
        ).catch(() => {
            console.log('error')
        })
    }
}