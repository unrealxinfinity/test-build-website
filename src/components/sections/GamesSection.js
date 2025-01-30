import WUWA from "../../assets/wuwa.webp";
import PGR from "../../assets/pgr.webp";
import ZZZ from "../../assets/zzzIcon.jpeg";
import HSR from "../../assets/hsr.png";
import HI3 from "../../assets/hi3.jpeg";
import BackgroundVideo from "../../assets/miyabiWSound.mp4"
import Arrow from "../../assets/arrowRight.png";
import { useState,useEffect, useRef} from "react";
export default function GamesSection({id=null}){
    const listOfGames = [ZZZ,WUWA,PGR,HSR,HI3];
    const [currentGame,setGame] = useState(0);
    const selectedGameIcon = useRef(0);
    const videoRef = useRef(0);
    const onClickLeft = ()=>{
        const i = (currentGame - 1 + listOfGames.length) % listOfGames.length;
        setGame(i);
    }
    const onClickRight = ()=>{
        const i = (currentGame+1)%listOfGames.length;
        setGame(i);
    }

    
    useEffect(()=>{
        selectedGameIcon.current.scrollIntoView({
            behavior: "smooth",
            block: "nearest",
            inline: "center"
          });
        videoRef.current.volume=0.5;
          //Add an event listener here and track window scroll and alter volume with the scroll
    })

    function determineGameText(i){
        switch(listOfGames[i]){
            case ZZZ:
                return(
                    <p>
                        This game is called Zenless Zone Zero, a fantastic game developed by Hoyoverse. 
                        I like its story (its boring at the beggining but interesting stuff happens later).
                        A bit of post-apocalyptic vibes with a lot of action (You can see in the background)!
                    </p>
                );
            case WUWA:
                return(
                    <p>
                        template
                    </p>
                )
            default:
                return(
                    <p>
                        template
                    </p>
                )
        }

    }
    return(
        <section className="games-section" id={id}>
            <video className="video" src={BackgroundVideo} loop autoPlay ref={videoRef} />
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
            <div className="game-description" key={currentGame}>
                {determineGameText(currentGame)}
            </div>
        </section>
    )
}