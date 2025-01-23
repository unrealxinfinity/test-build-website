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
        unlockAnimate(); //buggy code here
        setTimeout(()=>{
            dispatch({type:actions.ChangeToMyPage});
        },macros.unlockTimeout);
    }
    const unlockAnimate = ()=>{
        const leftVideo = document.getElementById("videoLeft");
        const rightVideo = document.getElementById("videoRight");
        leftVideo.classList.add("unlock");
        rightVideo.classList.add("unlock");
    }
    return(
            <div className="lockedpage">
                <video id="videoLeft" className="video-part left" loop autoPlay muted src={LockedPageVid}/>
                    <AnimatedRoundButton props={buttonProps} notifier={unlockNotifier}/>
                <video id="videoRight" className="video-part right" loop autoPlay muted src={LockedPageVid} />
            </div>
    );
}