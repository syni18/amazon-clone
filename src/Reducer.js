export const initalState = {
    basket: [],
    user: null,
};

//selector
export const getBasketTotal = (basket) => basket?.reduce((amount, items) => items.price + amount , 0);
const reducer = (state,action) => {
    // console.log(action);
    switch (action.type){
        case 'ADD_TO_BASKET':
            return {
                ...state,
                basket: [...state.basket, action.items],
            };
        
        case 'REMOVE_ITEM_BASKET':
             const index = state.basket.findIndex(
                (basketItem) => basketItem.id === action.id
             );
             let newBasket = [...state.basket];

             if(index >=0){
                newBasket.splice(index, 1);
             }else {
                console.warn(
                  `can't remove product (id : ${action.id}) as its not in the basket!`
                );
             }
             return {
                ...state,
                basket: newBasket
             };

            case 'SET_USER':
                return {
                    ...state,
                    user: action.user
                }

            case 'EMPTY_BASKET':
                return {
                    ...state,
                    basket: []
                }

            default:
                return state;
    }
};

export default reducer;
