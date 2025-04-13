import React from 'react'
import profile from '../../src/assets/raju.jpg'
const About = () => {
    return (

        <>
            <div id='about' className="d-flex  flex-column align-items-center py-5 justify-content-center" style={{ backgroundColor: '', color: 'black' }}>
                <div className="mb-4">
                    <h1>About me</h1>
                </div>
                <div className="d-sm-flex align-items-center gap-3 mt-3 justify-content-center mx-3">
                    <div className="d-flex justify-content-center ">
                    <img className="mb-5 m-2 rounded-4" src={profile} alt="img" style={{ width: '300px' }} />
                    </div>
                    <div>
                        <div>
                            <p>
                                I'm <strong>Raju Kushwaha</strong>, a MERN Stack Developer. I build modern, user-friendly websites using MongoDB, Express.js, React.js, and Node.js.
                            </p>
                        </div>
                        <div className="" >
                            <h1>My Skills</h1>
                            <ul className="list-group skill list-unstyled mx-3" style={{ backgroundColor: '#c0bebe', color: 'black' }}>
                                <li className="list-group-item text-center border-2">HTML</li>
                                <li className="list-group-item text-center border-2">CSS</li>
                                <li className="list-group-item text-center border-2">JavaScript</li>
                                <li className="list-group-item text-center border-2">Bootstrap</li>
                                <li className="list-group-item text-center border-2">Reactjs</li>
                                <li className="list-group-item text-center border-2">Nodejs</li>
                                <li className="list-group-item text-center border-2">Expressjs</li>
                                <li className="list-group-item text-center border-2">MongoDB</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            
        </>
    )
}

export default About
