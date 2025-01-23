import { useState } from "react";
/**
 * Component to represent a rotating interactive button
 * @param {*} props An object containing the properties of the button, "style" propertie with the size of the button is mandatory for customizable button size.
 * @returns 
 */
export default function AnimatedRoundButton({props={}, notifier=null}){
    const [click,setClicked] = useState(false);
    const onClickHandler = (e)=> {
        e.stopPropagation();
        setClicked((click)=>!click);
        notifier();
    }
    
    const {className,icon,...restProps} = props;
    
    //Add icon/img for button if theres any
    return(
        <div {...restProps} className={click?className+" clicked":className} onClick={onClickHandler}>
            {icon}
        </div>
    );
}