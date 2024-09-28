import { useContext } from "react";
import { AppContext } from "../App";

export default function useCheckLogin(){
    const {state} = useContext(AppContext);
    const user = state.user;
    return user;
}