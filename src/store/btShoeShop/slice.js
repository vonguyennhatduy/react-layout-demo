import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    carts: [],
}

const btShoeShopSlice = createSlice({
    name: 'btshoeshop',

    initialState,

    reducers: {
        handleCarts: (state, {payload}) => {
            const idx = state.carts.findIndex((val) => val.id === payload.id);

            if(idx === -1) {
                state.carts.push({
                    ...payload,
                    cartQuantity: 1,
                })
            }else {
                state.carts[idx].cartQuantity += 1;
            }
        },

        handleCartsIncrease: (state, {payload}) => {
            const idx = state.carts.findIndex((val) => val.id === payload.id);
            state.carts[idx].cartQuantity += 1;
        },

        handleCartsDecrease: (state, {payload}) => {
            const idx = state.carts.findIndex((val) => val.id === payload.id);
            if(state.carts[idx].cartQuantity > 1){
                state.carts[idx].cartQuantity--;
            }else {
                const newCarts = [];
                for(let i = 0; i < state.carts.length; i++){
                    if(i !== idx){
                        newCarts.push(state.carts[i]);
                    }
                }
                state.carts = newCarts;
            }
        },

        handleCartsDeleteItem: (state , {payload}) => {
            const newCarts = [];
            for(let i = 0; i < state.carts.length; i++){
                if(state.carts[i].id !== payload.id){
                    newCarts.push(state.carts[i]);
                }
            }
            state.carts = newCarts;
        }


    },

    extraReducers: (builder) => {},

})

export const {reducer: btShoeShop, actions: btShoeShopActions} = btShoeShopSlice;