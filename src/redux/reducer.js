import { PERFUME } from "../shared/perfume";
import { COMMENTS } from "../shared/comments";
import { CATEGORY } from "../shared/category";
import { CAROUSELS } from "../shared/carousel";
import { ADD_TO_CART, REMOVE_ITEM, SUB_QUANTITY, ADD_QUANTITY, CLEAR_CART } from '../redux/cart-actions';

export const initialState = {
    perfumes: PERFUME,
    comments: COMMENTS,
    categories: CATEGORY,
    carousels: CAROUSELS,
    numberCart: 0,
    total: 0,
    cart: [],
};

export const Reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_CART: {

            const addedItem = state.perfumes.find(item => item.id === action.id)
            const existed_item = state.cart.find(item => action.id === item.id)
            if (existed_item) {
                addedItem.quantity += 1
                return {
                    ...state,
                    total: state.total + parseInt(addedItem.price),
                    numberCart: state.numberCart + 1
                }
            }
            else {
                addedItem.quantity = 1;
                let newTotal = state.total + parseInt(addedItem.price)

                return {
                    ...state,
                    cart: [...state.cart, addedItem],
                    total: newTotal,
                    numberCart: state.numberCart + 1
                }
            }
        }
        case REMOVE_ITEM: {
            let itemToRemove = state.cart.find(item => action.id === item.id)
            let new_items = state.cart.filter(item => action.id !== item.id)

            let newTotal = state.total - (parseInt(itemToRemove.price) * itemToRemove.quantity)

            return {
                ...state,
                cart: new_items,
                total: newTotal,
                numberCart: state.numberCart - itemToRemove.quantity
            }
        }
        case ADD_QUANTITY: {
            let addedItem = state.perfumes.find(item => item.id === action.id)
            addedItem.quantity += 1
            let newTotal = state.total + parseInt(addedItem.price)
            return {
                ...state,
                total: newTotal,
                numberCart: state.numberCart + 1
            }
        }
        case SUB_QUANTITY: {
            let addedItem = state.perfumes.find(item => item.id === action.id)
            if (addedItem.quantity === 1) {
                let new_items = state.cart.filter(item => item.id !== action.id)
                let newTotal = state.total - parseInt(addedItem.price)
                return {
                    ...state,
                    cart: new_items,
                    total: newTotal,
                    numberCart: state.numberCart - 1
                }
            }
            else {
                addedItem.quantity -= 1
                let newTotal = state.total - parseInt(addedItem.price)
                return {
                    ...state,
                    total: newTotal,
                    numberCart: state.numberCart - 1
                }
            }
        }
        case CLEAR_CART: {
            let new_items = state.cart.filter(item => item.id === action.id)
            return {
                ...state,
                cart: new_items,
                numberCart: 0,
                total: 0
            }
        }
        default:
            return { ...state };

    }
}
