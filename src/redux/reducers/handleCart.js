import { ADD_ITEM, DELETE_ITEM } from "../constants";

const cart = [];

const handleCart = (state = cart, action) => {
    const product = action.payload;

    switch (action.type) {
        case ADD_ITEM:
            // Check if product is already added
            const exist = state.find(item => item.id === product.id);

            if (exist) {
                // Increase the Quantity
                return state.map(item => (
                    item.id === product.id ? { ...item, qty: item.qty + 1 } : item
                ));
            }
            else {
                const product = action.payload;

                return [
                    ...state,
                    {
                        ...product,
                        qty: 1,
                    }
                ]
            }
            break;

            case DELETE_ITEM:
                const existItem = state.find(item => item.id === product.id);
                if(existItem.qty === 1){
                    return state.filter(item => item.id !== existItem.id)
                }
                else{
                    return state.map(item => (
                        item.id === product.id ? {...item, qty: item.qty - 1} : item
                    ));
                }

        default:
            return state;
            break;
    }
}

export default handleCart;