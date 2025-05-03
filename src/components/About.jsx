
import React, { useState } from 'react';

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
        { name: 'Java', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
    ];

    return (
        <>
            <div id='about' className="d-flex flex-column align-items-center py-5 justify-content-center" style={{ background: 'linear-gradient(to right, #e0eafc, #cfdef3)', color: 'black' }}>
                <div className="mb-4">
                    <h1>About Me</h1>
                </div>

                <div className="d-sm-flex align-items-center gap-3 mt-3 justify-content-center mx-3">
                    <div>
                        <p className="p-3 fs-5">
                            Hi, <strong>I'm Raju Kushwaha</strong>, a fresher web developer who loves building websites using the MERN stack (MongoDB, Express, React, Node.js).  
                            I completed my B.Tech in Information Technology and worked on real projects during internships, like a Task Manager, Weather App, and an Airbnb-style website.  
                            I enjoy coding, learning new skills, and solving problems. I’m looking for a good opportunity to grow as a developer and work with a great team.
                        </p>

                        <div className="mt-5">
                            <h2 className='text-center'>My Skills</h2>
                            <div className="container mt-4">
                                <div className="row justify-content-start">
                                    {skills.map((skill, index) => (
                                        <div key={index} className="col-4 col-md-3 d-flex justify-content-between">
                                            <SkillItem skill={skill} />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    );
};

const SkillItem = ({ skill }) => {
    const [imgError, setImgError] = useState(false);

    return (
        <div className="card d-flex align-items-center gap- border-2 shadow-sm my-2 p-3" style={{ width: "23rem", height:'10rem' }}>
            <img
                className="text-center mx-3 p-1 rounded-4"
                src={imgError ? 'https://via.placeholder.com/50' : skill.icon}
                alt={skill.name}
                onError={() => setImgError(true)}
                style={{ width: '100px', height: '100px', objectFit: 'contain' }}
            />
            <div className="card-body p-2 text-center">
                <p className="card-text" style={{ fontSize: '0.8rem' }}><strong> {skill.name}</strong> </p>
            </div>
        </div>
    );
};

export default About;
