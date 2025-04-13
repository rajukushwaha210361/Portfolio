import React from 'react'
// import profile from '../../src/assets/profile_img.svg'
import rajuprofile from '../../src/assets/raju.jpg'
// import resume from '../assets/Resume'
import Resume from '../../src/assets/Resume.PDF';

const Hero = () => {
    return (

        <>
            <div id='home' className="d-flex  flex-column  align-items-center justify-content-center py-5" style={{ backgroundColor: '#c0bebe', color: 'black' }} >
                <img src={rajuprofile} alt="" className="rounded-circle" style={{ width: '200px', }} />
                <div className="text-center mt-4">
                    <h1 ><span className=""> I'm Raju Kushwaha </span>,MERN <br /> Stack developer</h1>
                </div>
                <div className="text-center mt-3">
                    <p>I"m a MERN Stack developer from Lucknow , India</p></div>
                <div className="d-flex gap-3 mt-3 ">

                    <button className="btn btn-primary text-light"> <a href="#contact" className="text-light text-decoration-none ">Contact with me</a></button>
                    <button className="btn btn-success"><a className="text-white text-decoration-none fw-bold" href={Resume} download>Resume
                    </a></button>
                </div>
            </div>
        </>
    )
}

export default Hero
