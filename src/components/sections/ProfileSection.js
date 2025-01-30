import Me from "../../assets/me2.jpg"

export default function ProfileSection({states=null,Macros=null,id=null}){
    const themeClass = states.theme === Macros.DarkTheme ? "dark" : "light";

    return(
        <section className={`profile-section ${themeClass}`} id={id} >
            <h1 style={{textAlign:"center",fontSize:"2em",margin:"0"}} >Dive into the world of Fu</h1>
            <div className="profile-row">
                <img src={Me} className="profile-picture" alt="Random me in a library doing a thumbs up" />
                <p className="profile-description fira-sans-regular">
                    Hi, My name is HaoChang Fu, a graduate Frontend Software Engineer (also a geek)! 
                    <br/>
                    I live in Porto, Portugal but I was born in China, so that makes me a chinese.
                    <br/>
                    My pronouns are He/Him (I'm straight).
                </p>
            </div>
            
        </section>
    )
}