import { useReducer,useEffect } from "react";
import LockedPage from "./LockedPage.js";
import MyPage from "./MyPage.js";
const Macros={
    unlockTimeout:1000,//ms
    LockedPage:"LockedPage",
    MyPage:"MyPage",
    LightTheme:"Light",
    DarkTheme:"Dark"
}
const actions = {
    ChangeToMainPage:"ChangeToMyPage",
    ChangeTheme:"ChangeTheme"
}
const initialState={
    page:Macros.LockedPage,
    theme:Macros.DarkTheme,
}
const reducer = (state,action)=>{
    switch(action.type){
        case actions.ChangeToMyPage:
            return {...state,page:Macros.MyPage};
        case actions.ChangeTheme:
            console.log({...state,theme:(state.theme===Macros.LightTheme)?Macros.DarkTheme:Macros.LightTheme})
            return {...state,theme:(state.theme===Macros.LightTheme)?Macros.DarkTheme:Macros.LightTheme}
        default:
            return {...state,page:Macros.LockedPage};
    }
}

export default function MainPage(){
   
    const [states,dispatch] = useReducer(reducer,initialState);
    
    useEffect(()=>{
       
    },[states.page])   
    

    return (
        <div className={states.theme===Macros.DarkTheme?"black":"white"}>
            {(states.page===Macros.LockedPage)?
            <LockedPage states={states} dispatch={dispatch} macros={Macros} actions={actions}/>
            :
            <></>
            }
            {(states.page===Macros.MyPage)?
            <MyPage states={states} dispatch={dispatch} macros={Macros} actions={actions} animation={"fade-in"}/>
            :
            <></>}
        </div>
      
    )

}