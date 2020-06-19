import { CHNAGE_LIST } from "./constants";

const changeList = (list) => ({
    type: CHNAGE_LIST ,
    list
})

export const getHomeList = (isServer) => {

    // https://api.apiopen.top/musicRankings
    // 浏览器运行
    // http://localhost:3000/musicRankings
    // 服务端运行
    // 服务器根目录下的 /musicRankings
    // let request = isServer ? sererAxios : clientAxios
    return (dispatch, getState, axiosInstance) => {
        return axiosInstance.get('/musicRankings').then(res => {
            dispatch(changeList(res.data.result))
        }).catch(e => {
            console.log(e)
        })
    }
}