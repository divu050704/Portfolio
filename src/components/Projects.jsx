import codeEditor from "../assets/Run.gif"
import quoteMachine from "../assets/172864442-9b269f24-9279-48a7-89cd-d9a9c106714b.gif"
export default function Projects() {
    return (
        <div className='Projects--data'>
            <div className='Projects--data-card' style={{ backgroundImage: `url(${codeEditor})`, backgroundSize: "cover" }}>
                <div className='Projects--data-card-head' >
                    <p>Code Editor</p>
                </div>
                <div className='Projects--data-card-info'>
                    <p>
                        Experience seamless code editing across multiple languages with our React.js-based editor, designed for enhanced developer productivity
                    </p>
                    <div className='Projects--data-card-link'>

                        <box-icon name='github' type='logo' color='#000c24' animation="tada-hover" size="md"></box-icon> &emsp;
                    </div>
                </div>
            </div>
            <div className='Projects--data-card' style={{ backgroundImage: `url(${quoteMachine})`, backgroundSize: "cover" }}>
                <div className='Projects--data-card-head' >
                    <p className='Projects--data-card-head' style={{ fontSize: "3rem" }}>Random Quote Machine</p>
                </div>
                <div className='Projects--data-card-info'>
                    <p>
                        Discover wisdom from various languages with our React.js-powered random quote machine, offering inspirational quotes in multiple programming tongues.
                    </p>
                    <div className='Projects--data-card-link'>

                        <box-icon name='github' type='logo' color='#000c24' animation="tada-hover" size="md"></box-icon> &emsp;
                    </div>
                </div>
            </div>
        </div>
    )
}