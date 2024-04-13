import { combineReducers } from "redux";
import { btXucXacReducer } from "./BTXUCXAC/slice";
import { btShoeShop } from './btShoeShop/slice'


export const rootReducer = combineReducers({
    btXucXacReducer,
    btShoeShop,

});
