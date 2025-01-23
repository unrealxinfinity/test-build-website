import LockedPageVid from "../assets/lockedpage.mp4"
import AnimatedRoundButton from "./AnimatedRoundButton.js";
import Fingerprint from "../assets/fingerprint.png"

export default function LockedPage({state=null,dispatch=null,macros={},actions={}}){
   
    const buttonIcon = <img src={Fingerprint} className="fingerprint" alt="icon of fingerprint scanner"/>
    const buttonProps={
        className:"rotating-button",
        icon:buttonIcon,
        style: { width: '9vw', height: '9vw' }
    };
    const unlockNotifier = ()=>{
        //unlockAnimate(); buggy code here
        setTimeout(()=>{
            dispatch({type:actions.ChangeToMainPage});
        },macros.unlockTimeout);
    }
    const unlockAnimate = ()=>{
        const leftVideo = document.getElementsByClassName("video-part left");
        const rightVideo = document.getElementsByClassName("video-part right");
        leftVideo.classList.add("unlock-left");
        rightVideo.classList.add("unlock-right");
    }
    return(
            <div className="lockedpage">
                <video className="video-part left" loop autoPlay muted src={LockedPageVid}/>
                    <AnimatedRoundButton props={buttonProps} notifier={unlockNotifier}/>
                <video className="video-part right" loop autoPlay muted src={LockedPageVid} />
            </div>
    );
}