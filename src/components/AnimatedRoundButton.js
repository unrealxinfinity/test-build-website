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
    
    //This is a workaround for the button visual bug that the expanding animation affects the outter ring too instead of only the fingerprint
    //Added an separate animation for fingerprint for expanding while the other animation for outter ring is independent.
    const {className,icon,...restProps} = props;
    const {props:iconProps,...restIcon} = icon;
    const {className:iconClassName,...restIconProps} = iconProps;
    const iconCopy = {
        ...restIcon,
        props: {
            ...restIconProps,
            className: click?iconClassName + " clicked":iconClassName
        }
    };

    //Add icon/img for button if theres any
    return(
        <div {...restProps} className={click?className+" clicked":className} onClick={onClickHandler}>
            {iconCopy}
        </div>
    );
}