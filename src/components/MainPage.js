import { useReducer,useEffect } from "react";
import LockedPage from "./LockedPage.js";
const Macros={
    unlockTimeout:1000,//ms
    LockedPage:"LockedPage",
    MyPage:"MyPage",

}
const actions = {
    ChangeToMainPage:"ChangeToMyPage",
}
const initialState={
    page:Macros.LockedPage,
}
const reducer = (state,action)=>{
    switch(action.type){
        case actions.ChangeToMyPage:
            return {page:Macros.MyPage};
        default:
            return {page:Macros.LockedPage};
    }
}

export default function MainPage(){
   
    const [states,dispatch] = useReducer(reducer,initialState);
    useEffect(()=>{
    
    },[states.page])   
    
    let activePage = null;

    switch(states.page){
        case Macros.LockedPage:
            activePage = <LockedPage states={states} dispatch={dispatch} macros={Macros} actions={actions}/>
            break;
        case Macros.MyPage:
            activePage = <div className="temp center">Ola</div>
            break;
        default:
            activePage = <div></div>
            break;
    }

    return activePage

}