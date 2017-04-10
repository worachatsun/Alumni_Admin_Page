import { ADD_NEWS } from '../actions/types'

const INITIAL_STATE = {
    news: {}
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ADD_NEWS:
            return {
                ...state,
                news: action.payload
            }
        default:
            return state
    }
}