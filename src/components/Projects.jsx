import codeEditor from "../assets/Run.gif"
import quoteMachine from "../assets/172864442-9b269f24-9279-48a7-89cd-d9a9c106714b.gif"
import eventDark from "../assets/258420444-bfc76ca9-8444-42f4-92b6-836007aa353c.png"
import imageUploader from "../assets/imageUploader.png"
export default function Projects() {
    return (
        <div className='Projects--data'>
            
            
             <div className='Projects--data-card' style={{ backgroundImage: `url(${codeEditor})`, backgroundSize: "cover" }}>
                <div className='Projects--data-card-head' >
                    <p className='Projects--data-card-head' style={{ fontSize: "3rem" }}>Code Editor</p>
                </div>
                <div className='Projects--data-card-info'>
                <box-icon type='logo' name='react'></box-icon>
                    <p>

                    Experience seamless code editing across multiple languages with our React.js-based editor, designed for enhanced developer productivity.
                    </p>
                    <div className='Projects--data-card-link'>

                        <a href="https://github.com/divu050704/Code-editor" target="next">
                            <box-icon name='github' type='logo' color='#000c24' animation="tada-hover" size="md"></box-icon>
                        </a> &emsp;
                    </div>
                </div>
            </div>
            <div className='Projects--data-card' style={{ backgroundImage: `url(${quoteMachine})`, backgroundSize: "cover" }}>
                <div className='Projects--data-card-head' >
                    <p className='Projects--data-card-head' style={{ fontSize: "3rem"}}>Random Quote Machine</p>
                </div>
                <div className='Projects--data-card-info'>
                <box-icon type='logo' name='react'></box-icon>
                    <p>
                        Discover wisdom from various languages with our React.js-powered random quote machine, offering inspirational quotes in multiple programming tongues.
                    </p>
                    <div className='Projects--data-card-link'>

                        <a href="https://github.com/divu050704/Random-Quote-Machine" target="next">
                            <box-icon name='github' type='logo' color='#000c24' animation="tada-hover" size="md"></box-icon>
                        </a> &emsp;
                    </div>
                </div>
            </div>
            <div className='Projects--data-card' style={{ backgroundImage: `url(${eventDark})`, backgroundSize: "cover" }}>
                <div className='Projects--data-card-head' >
                    <p className='Projects--data-card-head' style={{ fontSize: "3rem" }}>Event Dark</p>
                </div>
                <div className='Projects--data-card-info'>
                <div style={{display: "flex"}}>
                    <box-icon type='logo' name='react'></box-icon>
                    <box-icon name='django' type='logo' ></box-icon>
                </div>
                    <p>
                        Effortlessly manage and explore upcoming events on our platform built with React.js and Django, ensuring smooth event uploading and seamless viewing experience
                    </p>
                    <div className='Projects--data-card-link'>

                        <a href="https://github.com/divu050704/eventDark" target="next">
                            <box-icon name='github' type='logo' color='#000c24' animation="tada-hover" size="md"></box-icon>
                        </a> &emsp;
                    </div>
                </div>
            </div>
            <div className='Projects--data-card' style={{ backgroundImage: `url(${imageUploader})`, backgroundSize: "cover" ,marginRight: "0"}}>
                <div className='Projects--data-card-head' >
                    <p className='Projects--data-card-head' style={{ fontSize: "3rem" }}>Image Uploader</p>
                </div>
                <div className='Projects--data-card-info'>
                <div style={{display: "flex"}}>
                    <box-icon type='logo' name='react'></box-icon>
                    <box-icon name='nodejs' type='logo' ></box-icon>
                    <box-icon name='mongodb' type='logo' ></box-icon>

                </div>
                    <p>
                    Empowering users to effortlessly upload, share, and explore event images on our MERN Stack-based platform, redefining visual event experiences
                   </p>
                    <div className='Projects--data-card-link'>

                        <a href="https://github.com/divu050704/ImageUploader" target="next">
                            <box-icon name='github' type='logo' color='#000c24' animation="tada-hover" size="md"></box-icon>
                        </a> &emsp;
                    </div>
                </div>
            </div>
            
        </div>
    )
}