import { createSlice } from "@reduxjs/toolkit"

// giá trị ban đầu của state
const initialState = {
    number: 1,
    giaTriCuoc: false,
    soLanChoi: 0,
    imgSrc: [
       
    ],

}

const btXucXacSlice = createSlice({
    name: 'btXucXac',

    initialState,

    // xử lí action đồng bộ 
    reducers: {
        // 1 action 

        inCreaseAction: (state, action) => {
            const {payload} = action;
            state.number = (state.number + payload > 0 ? state.number + payload : 0);
        },

        deCreaseAction: (state, action) => {
            const {payload} = action;
            state.number = (state.number + payload > 0 ? state.number + payload : 0);
        },

        setGiaTriCuoc: (state, {payload}) => {
            state.giaTriCuoc = payload;
        },

        play: (state, {payload}) => {
            state.soLanChoi = state.soLanChoi + payload;

            const newMangXucXac = [...Array(3)].map((value) => {
                const number = Math.floor(Math.random() * 6 + 1);

                console.log(number);
                

                

            })
        }
    },
    // xử lí action bất đồng bộ 
    extraReducers: (builder) => {},
});

export const {reducer: btXucXacReducer , actions: btXucXacActions } = btXucXacSlice;