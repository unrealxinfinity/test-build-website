import WUWA from "../../assets/wuwa.webp";
import PGR from "../../assets/pgr.webp";
import ZZZ from "../../assets/zzzIcon.jpeg";
import HSR from "../../assets/hsr.png";
import HI3 from "../../assets/hi3.jpeg";
import BackgroundVideo from "../../assets/miyabiWSound.mp4"
import Arrow from "../../assets/arrowRight.png";
import { useState,useEffect, useRef} from "react";


export default function GamesSection({states=null,Macros=null,id=null}){
    const listOfGames = [ZZZ,WUWA,PGR,HSR,HI3];
    const [currentGame,setGame] = useState(0);
    const selectedGameIcon = useRef(0);
    const videoRef = useRef(0);
    const onClickLeft = ()=>{
        
        const i = (currentGame - 1 + listOfGames.length) % listOfGames.length;
        setGame(i);
        selectedGameIcon.current.scrollIntoView({
            behavior: "smooth",
            block: "nearest",
            inline: "center"
          });
    }
    const onClickRight = ()=>{
        const i = (currentGame+1)%listOfGames.length;
        setGame(i);
        selectedGameIcon.current.scrollIntoView({
            behavior: "smooth",
            block: "nearest",
            inline: "center"
          });
    }
    

    
    const videoVolumeScrollHandler = ()=>{

        const video = videoRef.current;
        const rect = video.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        const visibleHeight = Math.max(0, Math.min(rect.bottom, windowHeight) - Math.max(rect.top, 0));
        const percentageInView = (visibleHeight / rect.height);
        if(percentageInView){
            video.muted=false;
            video.play();
            video.loop=true;
            video.volume = percentageInView/2;
        }
    }

    useEffect(()=>{
        window.addEventListener("scroll",videoVolumeScrollHandler);
        return () => {
            window.removeEventListener("scroll", videoVolumeScrollHandler);
          };
    })

    function determineGameText(i){
        switch(listOfGames[i]){
            case ZZZ:
                return "This game is called Zenless Zone Zero, a fantastic game developed by Hoyoverse. I like its story (its boring at the beggining but interesting stuff happens later).A bit of post-apocalyptic vibes with a lot of action (You can see in the background)!"
                
            case WUWA:
                return "Wuthering Waves. I was drawn by the godly character designs and combat system, story wise is okay, also post-apocalyptic. Overall it's a good game to play."
                   
            case PGR:
                return "Punishing Gray Ravens. Games made by Kuro are always action driven, this game too has a good combat mechanics, very flashgy. I like it!"
            case HSR:
                return "Honkai Star Rail. Very good story and themes. Game themed on spacial exploration where each planet has their own culture and history. It is a turn based RPG"
            case HI3:
                return "Honkai Impact 3rd. One of the first anime themed games I have played. At the time it was revolutionary given the graphics for the mobile platforms. Action based game too and story is good (haven't played further into the story mode)"
            default:
                return ""
        }

    }
    const themeClass = states.theme === Macros.DarkTheme ? "dark" : "light";

    return(
            <section className={`games-section ${themeClass}`} id={id}>
            <h1 style={{textAlign:"center",fontSize:"2em",margin:"1em"}}>My Favourite Games</h1>
            <video className="video" src={BackgroundVideo} loop muted ref={videoRef} />
            <div className="selectable-area">
                <button className="select-button left" onClick={onClickLeft}>
                    <img src={Arrow} alt="Left Arrow" />
                </button>
                <ul className="games list">
                    {listOfGames.map((src, index) => {
                    return (
                        <li
                        className={`gameIcons ${currentGame === index ? "selected" : ""}`}
                        key={index}
                        ref={currentGame===index?selectedGameIcon:null}
                        >
                            <img src={src} alt="game icon" className="game-icon" />
                        </li>
                    );
                    })}
                </ul>
                <button className="select-button right" onClick={onClickRight}>
                    <img src={Arrow} alt="Right Arrow" />
                </button>
            </div>
            <p className="game-description fira-sans-regular" key={currentGame}>
                {determineGameText(currentGame)}
            </p>
        </section>
    )
}