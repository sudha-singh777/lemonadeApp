import { BUY_LEMONADE, INC_STOCK } from '../type';

const initialState = {
    lemo: 10,
    rev: 0,
}
const lemonadeReducer = (state = initialState, action) => {
    switch (action.type) {
        case BUY_LEMONADE:
            return {
                lemo: state.lemo > 0 ? state.lemo - 1 : state.lemo,
                rev: state.lemo > 0 ? state.rev + 2 : state.rev
            }
        case INC_STOCK:
            return {
                lemo: state.rev > 0 ? state.lemo + 1 : state.lemo,
                rev: state.rev > 0 ? state.rev - 2 : state.rev
            }
        default:
            return state;
    }
}

export default lemonadeReducer;