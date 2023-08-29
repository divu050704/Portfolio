import tryhackme from "../assets/tryhackme.jpg"
import freeCodeCamp from "../assets/freeCodeCamp.png"
import walkthrough  from "../assets/walkthrough.png"
import "../css/Achievments.css"
export default function Achievments(){
    return(
        <div className="Achievments">
            <div className="Achievments--card">
                <img src={tryhackme} className="Achievments--card-image"/>
                <div className="Achievments--card-info">
                    <h2 >Top 1% on tryhackme</h2>
                    <p>
                    Ranked among the top 1% on TryHackMe, showcasing exceptional cybersecurity skills and a mastery of hacking techniques.
                    </p>
                    <a href="https://tryhackme.com/p/divu050704" className="Achievments--card-info-link" target="next">
                        Check Out
                    </a>
                </div>
                
            </div>
            <div className="Achievments--card">
                <img src={freeCodeCamp} className="Achievments--card-image"/>
                <div className="Achievments--card-info">
                    <h2 >4 certificates from freeCodeCamp</h2>
                    <p style={{fontSize: "1rem"}}>
                    Achieved freeCodeCamp certificates in Responsive Web Design, JavaScript Algorithms and Data Structures, Front End Development Libraries, and Back End Development APIs, validating expertise in full-stack web development and programming.
                    </p>
                    <a href="https://www.freecodecamp.org/fcce68aa1e8-0291-4162-8b06-6a79168f89d7" className="Achievments--card-info-link" target="next">
                        Check Out
                    </a>
                </div>
                
            </div>
            <div className="Achievments--card" style={{marginBottom: "-40rem"}}>
                <img src={walkthrough} className="Achievments--card-image"/>
                <div className="Achievments--card-info">
                    <h2 >Wrote 40+ walkthroughs on tryhackme rooms</h2>
                    <p style={{fontSize: "1rem"}}>
                    Authored over 40 comprehensive walkthroughs for diverse TryHackMe rooms, demonstrating a deep understanding of cybersecurity concepts and a passion for guiding others through hands-on learning experiences
                    </p>
                    <a href="https://divu050704.github.io/blog/tryhackme/" className="Achievments--card-info-link" target="next">
                        Check Out
                    </a>
                </div>
                
            </div>
        </div>
    )
}