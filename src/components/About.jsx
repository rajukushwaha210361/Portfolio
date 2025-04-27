
import React, { useState } from 'react';
import profile from '../../src/assets/raju.jpg';

const About = () => {
    const skills = [
        { name: 'HTML', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
        { name: 'CSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
        { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
        { name: 'Bootstrap', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-plain.svg' },
        { name: 'Tailwind CSS', icon: 'https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg' },
        { name: 'Reactjs', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
        { name: 'Nodejs', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
        { name: 'Expressjs', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg' },
        { name: 'MongoDB', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
    ];

    return (
        <>
            <div id='about' className="d-flex flex-column align-items-center py-5 justify-content-center" style={{ background: 'linear-gradient(to right, #e0eafc, #cfdef3)', color: 'black' }}>
                <div className="mb-4">
                    <h1>About me</h1>
                </div>

                <div className="d-sm-flex align-items-center gap-3 mt-3 justify-content-center mx-3">
                   
                    <div className="d-flex justify-content-center">
                        <img className="mb-5 m-2 rounded-4" src={profile} alt="Profile" style={{ width: '300px' }} />
                    </div>

                 
                    <div>
                        <p>
                            I'm <strong>Raju Kushwaha</strong>, a MERN Stack Developer. I build modern, user-friendly websites using MongoDB, Express.js, React.js, and Node.js.
                        </p>

                        <div className="mt-4">
                            <h2>My Skills</h2>
                            <ul className="list-group skill list-unstyled mx-3 mt-3" style={{ backgroundColor: '#f5f7fa', borderRadius: '10px' }}>
                                {skills.map((skill, index) => (
                                    <SkillItem key={index} skill={skill} />
                                ))}
                            </ul>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

const SkillItem = ({ skill }) => {
    const [imgError, setImgError] = useState(false);

    return (
        <li
            className="list-group-item d-flex align-items-center gap-3 border-2 shadow-sm my-2 "
            style={{ backgroundColor: '#ffffff', borderRadius: '8px' }}
        >
            {!imgError && skill.icon && (
                <img className="text-center mx-3 p-1"
                    src={skill.icon}
                    alt={skill.name}
                    style={{ width: '30px', height: '30px' }}
                    onError={() => setImgError(true)}
                />
            )}
            <span className="text-center">{skill.name}</span>
        </li>
    );
}

export default About;
