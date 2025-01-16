import { createSelector, createSlice } from "@reduxjs/toolkit";

const initialState = {
    items: [],
    delivery : 20,
    deliveryFreeFrom : 200,
};

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addCartItem: (state,action) =>{
            const newProduct = action.payload.product;
            const cartItem = state.items.find(
                (item)=>item.product.id == newProduct.id);
            if(cartItem){
                cartItem.quantity += 1;
                //cartItem.quantity = cartItem.quantity + 1;
            }else{
                state.items.push({ product : newProduct, quantity: 1})
            }
        },

        changeQuantity: (state, action) =>{
            const {productId, amount} = action.payload;
            const cartItem = state.items.find(
                (item)=>item.product.id == productId);
            if(cartItem){
                cartItem.quantity += amount;
            }

            if(cartItem.quantity <= 0){
                state.items = state.items.filter((item)=> item !== cartItem);
            }
        },
    }
});

export const selectedNumberItems = (state) => state.cart.items.length;

export const selectedSubTotal = (state) => state.cart.items.reduce(
    (sum, cartItem)=> sum + cartItem.product.price * cartItem.quantity, 0 
);

const cartSelector = state => state.cart;

export const selectedDeliveryPrice = createSelector(
    cartSelector,
    selectedSubTotal,
    (cart, subTotal) => subTotal == 0 ? 0 : (subTotal > cart.deliveryFreeFrom ? 0 : cart.delivery)
);

export const selectedTotal = createSelector(
    selectedSubTotal,
    selectedDeliveryPrice,
    (subTotal, delivery) => subTotal + delivery
);



