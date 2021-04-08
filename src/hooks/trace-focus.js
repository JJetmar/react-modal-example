import {useState, useCallback, useReducer, useRef } from "react";
import focusReducer from "../reducers/focus-reducer";

export default function useTraceFocus() {

    const [focusStack, focusDispatch] = useReducer(focusReducer, []);

    return useRef((e) => {
        focusDispatch({ type: "focus", payload: e.target});
        console.log("FOCUSED", focusStack);
    }).current;
}