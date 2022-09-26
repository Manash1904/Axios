import { types } from "./types";

export const incrementBy7 = () => {
    console.log("func action");
    return {
        type: types.INCREMENT_BY_7
    }
}

export const incrementBy4 = () => {
    return {
        type: types.INCREMENT_BY_4
    }
}

export const incrementBy5 = () => {
    return {
        type: types.INCREMENT_BY_5
    }
}