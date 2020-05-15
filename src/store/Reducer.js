/**
 * Reducer can only directly talk to the Redux store , whenever some action(state change)
 * ned to perform , then component send the message to Redux and Redux will resolve that
 */

import * as data from '../database/data.json';

const initalState = {
    email: '',
    password: '',
    loginData:data.loginData,
    userData:data.userData,

}

const Reducer = (state = initalState, action) => {
    if (action.type === 'INPUT') {
        if (action.payload.email) {
            return {
                ...state,
                email: action.payload.email
            }
        } else {
            return {
                ...state,
                password: action.payload.password
            }
        }
    }
    return state;
}

export default Reducer;