import { useState } from "react"
export default function Skills() {
    const [categoryOpen, setCategoryOpen] = useState("Frontend")
    return (
        <>
            <div className='Skills--card-category'>
                <div className={categoryOpen === "Frontend" ? 'Skills--card-category-selected' : "Skill--card-category-unselected"} onClick={() => setCategoryOpen("Frontend")}>
                    <box-icon name='component' type='solid' color={categoryOpen === "Frontend" ? '#ffffff' : "#000c24"} ></box-icon>
                    <p>Frontend</p>
                </div>
                <div className={categoryOpen === "Backend" ? 'Skills--card-category-selected' : "Skill--card-category-unselected"} onClick={() => setCategoryOpen("Backend")}>
                    <box-icon name='server' type='solid' color={categoryOpen === "Backend" ? '#ffffff' : "#000c24"} ></box-icon>
                    <p>Backend</p>
                </div>
                <div className={categoryOpen === "Cloud" ? 'Skills--card-category-selected' : "Skill--card-category-unselected"} onClick={() => setCategoryOpen("Cloud")}>
                    <box-icon name='cloud' type='solid' color={categoryOpen === "Cloud" ? '#ffffff' : "#000c24"} ></box-icon>
                    <p>Cloud</p>
                </div>
                <div className={categoryOpen === "Cyber" ? 'Skills--card-category-selected' : "Skill--card-category-unselected"} onClick={() => setCategoryOpen("Cyber")}>
                    <box-icon type='solid' name='check-shield' color={categoryOpen === "Cyber" ? '#ffffff' : "#000c24"} ></box-icon>
                    <p>Cyber Security</p>
                </div>
            </div>
            {categoryOpen === "Frontend" && <div className='Skills--card-content'>


                <div className='Skills--card-info'>
                    <div className='Skills--card-info-head'>
                        <box-icon name='react' type='logo' color='#000c24' ></box-icon>
                        React JS
                    </div>
                    <div className='Skills--card-info-progress'>
                        <div className='Skills--card-info-progress-filled' style={{ width: "90%" }}></div>
                    </div>
                </div>
                <div className='Skills--card-info'>
                    <div className='Skills--card-info-head'>
                        <box-icon name='html5' type='logo' color='#000c24' ></box-icon>
                        HTML
                    </div>
                    <div className='Skills--card-info-progress'>
                        <div className='Skills--card-info-progress-filled' style={{ width: "99%" }}></div>
                    </div>
                </div>
                <div className='Skills--card-info'>
                    <div className='Skills--card-info-head'>
                        <box-icon name='css3' type='logo' color='#000c24' ></box-icon>
                        CSS
                    </div>
                    <div className='Skills--card-info-progress'>
                        <div className='Skills--card-info-progress-filled' style={{ width: "80%" }}></div>
                    </div>
                </div>
                <div className='Skills--card-info'>
                    <div className='Skills--card-info-head'>
                        <box-icon name='html5' type='logo' color='#000c24' ></box-icon>
                        JS
                    </div>
                    <div className='Skills--card-info-progress'>
                        <div className='Skills--card-info-progress-filled' style={{ width: "99%" }}></div>
                    </div>
                </div>
            </div>}
            {categoryOpen === "Backend" &&
                <div className='Skills--card-content'>


                    <div className='Skills--card-info'>
                        <div className='Skills--card-info-head'>
                            <box-icon name='nodejs' type='logo' color='#000c24' ></box-icon>
                            Express JS
                        </div>
                        <div className='Skills--card-info-progress'>
                            <div className='Skills--card-info-progress-filled' style={{ width: "80%" }}></div>
                        </div>
                    </div>
                    <div className='Skills--card-info'>
                        <div className='Skills--card-info-head'>
                            <box-icon name='mongodb' type='logo' color='#000c24' ></box-icon>
                            MongoDB
                        </div>
                        <div className='Skills--card-info-progress'>
                            <div className='Skills--card-info-progress-filled' style={{ width: "99%" }}></div>
                        </div>
                    </div>
                    <div className='Skills--card-info'>
                        <div className='Skills--card-info-head'>
                            <box-icon name='django' type='logo' color='#000c24' ></box-icon>
                            Django
                        </div>
                        <div className='Skills--card-info-progress'>
                            <div className='Skills--card-info-progress-filled' style={{ width: "80%" }}></div>
                        </div>
                    </div>


                </div>
            }
            {
                categoryOpen === "Cloud" &&
                <div className='Skills--card-content'>


                    <div className='Skills--card-info'>
                        <div className='Skills--card-info-head'>
                            <box-icon name='aws' type='logo' color='#000c24' ></box-icon>
                            AWS
                        </div>
                        <div className='Skills--card-info-progress'>
                            <div className='Skills--card-info-progress-filled' style={{ width: "50%" }}></div>
                        </div>
                    </div>



                </div>
            }
            {
                categoryOpen === "Cyber" &&
                <div className='Skills--card-content'>

                    <div className='Skills--card-info'>
                        <div className='Skills--card-info-head'>
                            <box-icon name='network-chart' color='#000c24' type="solid"></box-icon>
                            Network Security
                        </div>
                        <div className='Skills--card-info-progress'>
                            <div className='Skills--card-info-progress-filled' style={{ width: "50%" }}></div>
                        </div>
                    </div>
                    <div className='Skills--card-info'>
                        <div className='Skills--card-info-head'>
                            <box-icon name='sort-up' color='#000c24' ></box-icon>
                            OWASP Top 10
                        </div>
                        <div className='Skills--card-info-progress'>
                            <div className='Skills--card-info-progress-filled' style={{ width: "80%" }}></div>
                        </div>
                    </div>
                    <div className='Skills--card-info'>
                        <div className='Skills--card-info-head'>
                            <box-icon name='terminal' color='#000c24' ></box-icon>
                            Linux
                        </div>
                        <div className='Skills--card-info-progress'>
                            <div className='Skills--card-info-progress-filled' style={{ width: "80%" }}></div>
                        </div>
                    </div>
                    <div className='Skills--card-info'>
                        <div className='Skills--card-info-head'>
                            <box-icon name='plane-take-off' type='solid' color='#000c24' ></box-icon>
                            Privilege Escalation
                        </div>
                        <div className='Skills--card-info-progress'>
                            <div className='Skills--card-info-progress-filled' style={{ width: "60%" }}></div>
                        </div>
                    </div>
                    <div className='Skills--card-info'>
                        <div className='Skills--card-info-head'>
                            <box-icon name='invader' type='solid' color='#000c24' ></box-icon>
                            Automation
                        </div>
                        <div className='Skills--card-info-progress'>
                            <div className='Skills--card-info-progress-filled' style={{ width: "70%" }}></div>
                        </div>
                    </div>
                </div>
            }
        </>
    )
}