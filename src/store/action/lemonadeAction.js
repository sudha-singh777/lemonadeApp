import { BUY_LEMONADE, INC_STOCK } from '../type';

export const buyLemonade = () => {
    return {
        type: BUY_LEMONADE
    }
}

export const incStock = () => {
    return {
        type: INC_STOCK
    }
}