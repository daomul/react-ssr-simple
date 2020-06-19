import { CHNAGE_LIST } from "./constants";
const defaultState = {
    name: 'defaultName',
    newsList: []
}
export default (state = defaultState, action) => {
    switch(action.type) {
        case CHNAGE_LIST:
            return {
                ...state,
                newsList: action.list
            }
        default: 
            return state
    }
}