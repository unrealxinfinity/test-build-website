import { useReducer,useEffect } from "react";
import LockedPage from "./LockedPage.js";
const Macros={
    unlockTimeout:2000,//ms
    LockedPage:"LockedPage",
    MainPage:"MainPage",

}
const actions = {
    ChangeToMainPage:"ChangeToMainPage",
}
const initialState={
    page:Macros.LockedPage,
}
const reducer = (state,action)=>{
    switch(action.type){
        case actions.ChangeToMainPage:
            return {page:Macros.MainPage};
        default:
            return {page:Macros.LockedPage};
    }
}

export default function MainPage(){
   
    const [states,dispatch] = useReducer(reducer,initialState);
    useEffect(()=>{
    
    },[states.page])   
    
    return(
        (states.page===Macros.LockedPage)?
            <LockedPage states={states} dispatch={dispatch} macros={Macros} actions={actions}/>
        :null
    );
}