import React from 'react'
import { useState } from 'react';
const navbar = () => {
    const [menu, setMenu] = useState("home");
    return (
        <>
            <nav id='navbar' className="navbar navbar-expand-lg navbar-light bg-light sticky-top" >
                <div className=" container-fluid ">
                    <div>
                        <h2 className="border bg-dark-subtle p-3 rounded-4">Raju kushwaha</h2>
                    </div>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav  ms-auto gap-2">
                            <li className="nav-item mx-4"><a className="nav-link" href="#home" onClick={()=>{setMenu("home")}}>Home</a>{menu==='home'?<hr className="border-5 border-danger"/>:''}</li>
                            <li className="nav-item mx-4"><a className="nav-link" href="#about" onClick={()=>{setMenu("about")}}>About Me</a>{menu==='about'?<hr className="border-5 border-danger"/>:''}</li>
                            <li className="nav-item mx-4"><a className="nav-link" href="#service" onClick={()=>{setMenu("service")}}>Service</a>{menu==='service'?<hr className="border-5 border-danger"/>:''}</li>
                            <li className="nav-item mx-4"><a className="nav-link" href="#portfolio" onClick={()=>{setMenu("portfolio")}}>Projects</a>{menu==='portfolio'?<hr className="border-5 border-danger"/>:''}</li>
                            <li className="nav-item mx-4 btn btn-secondary rounded-5 text-center h-25 con-nav"><a className="nav-link" href="#contact" onClick={()=>{setMenu("contact")}}>Contact with me</a></li>
                           
                        </ul>
                    </div>
                </div >
            </nav>
        </>
    )
}

export default navbar
