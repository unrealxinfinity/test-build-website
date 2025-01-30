import Me from "../../assets/me3.jpg"

export default function ProfileSection({id=null}){
    return(
        <section className="profile-section" id={id}>
            <img src={Me} className="profile-picture" alt="Random me in a library doing a thumbs up" />
            <p className="profile-description">
                Hi, My name is HaoChang Fu, a graduate Frontend Software Engineer (also a geek)! 
                <br/>
                I live in Porto, Portugal but I was born in China, so that makes me a chinese.
                <br/>
                My pronouns are He/Him (I'm straight).
            </p>
        </section>
    )
}