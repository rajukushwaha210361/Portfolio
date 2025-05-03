
import React from 'react'

const Projects = () => {
    return (
        <>
            <div id='portfolio' className='d-flex flex-column justify-content-center align-items-center px-3 py-5'
                style={{ backgroundColor: '#737171', color: 'black' }}>
                <h1 className='text-center mb-4'>Projects</h1>
                <ul className='d-flex flex-column list-group list-unstyled gap-4 w-100 project'>

                    {/* Project 1 */}
                    {/* <li className='list-group-item p-4 w-100' style={{ backgroundColor: '#f8f9fa', borderRadius: '10px' }}>
                        <div className="row align-items-center">
                            <div className="col-12 col-md-8">
                                <h5 className="mb-2"><strong>EasyStay</strong></h5>
                            </div>
                            <div className="col-12 col-md-4 text-md-end mt-2 mt-md-0">
                                <a className="btn btn-secondary w-100 w-md-auto" href="https://majorproject-ybwl.onrender.com" target="_blank" rel="noreferrer">
                                    Visit Project
                                </a>
                            </div>
                        </div>
                    </li> */}

                    <li className="list-group-item p-4 w-100" style={{ backgroundColor: '#f8f9fa', borderRadius: '10px' }}>
                        <div className="row d-flex flex-column gap-3 align-items-center">

                            <div className="col-12">
                                <h3><strong> EasyStay</strong></h3>
                            </div>
                            <div className="d-flex flex-wrap justify-content-start align-items-center gap-2 ">
                                <button className="btn bg-secondary text-white">Ejs</button>
                                <button className="btn bg-secondary text-white">Node.js</button>
                                <button className="btn bg-secondary text-white">Express.js</button>
                                <button className="btn bg-secondary text-white">MongoDB</button>
                            </div>
                            <p className="px-2 ">
                            A property rental platform inspired by Airbnb, built using EJS, Node.js, Express, and MongoDB. Users can explore listings, view property details, and book stays with ease.
                            </p>

                            <div className="d-flex gap-2">
                                <a className="btn btn-dark text-white" href="https://majorproject-ybwl.onrender.com" target="_blank" rel="noreferrer"> Visit Project</a>
                                <a className="btn btn-dark text-white" href="https://github.com/rajukushwaha210361/major_project" target="_blank" rel="noreferrer"> Github Link</a>
                            </div>
                        </div>
                    </li>
                    <li className="list-group-item p-4 w-100" style={{ backgroundColor: '#f8f9fa', borderRadius: '10px' }}>
                        <div className="row d-flex flex-column gap-3 align-items-center">

                            <div className="col-12">
                                <h3><strong> Employee Management System</strong></h3>
                                
                            </div>
                            <div className="d-flex flex-wrap justify-content-start align-items-center gap-2 ">
                                <button className="btn bg-secondary text-white">Html</button>
                                <button className="btn bg-secondary text-white">CSS</button>
                                <button className="btn bg-secondary text-white">Bootstrap</button>
                                <button className="btn bg-secondary text-white">React</button>
                            </div>
                            <p className="px-2 ">
                            A task assignment website built using HTML, CSS, React, and Bootstrap — designed to quickly assign tasks and streamline your workflow.<br/>
                                <small className="text-muted">
                                    <strong>Admin Login:</strong> admin@gmail.com | password: 123<br />
                                    <strong>User Login:</strong> employee3@example.com | password: 123
                                </small>
                            </p>

                            <div className="d-flex gap-2">
                                <a className="btn btn-dark text-white" href="https://employee-management-system-mnsa.onrender.com/" target="_blank" rel="noreferrer"> Visit Project</a>
                                <a className="btn btn-dark text-white" href="https://github.com/rajukushwaha210361/EMS" target="_blank" rel="noreferrer"> Github Link</a>
                            </div>
                        </div>
                    </li>
                    <li className="list-group-item p-4 w-100" style={{ backgroundColor: '#f8f9fa', borderRadius: '10px' }}>
                        <div className="row d-flex flex-column gap-3 align-items-center">

                            <div className="col-12">
                                <h3><strong> Task Manager</strong></h3>
                            </div>
                            <div className="d-flex flex-wrap justify-content-start align-items-center gap-2 ">
                                <button className="btn bg-secondary text-white">React</button>
                                <button className="btn bg-secondary text-white">MongoDB</button>
                                <button className="btn bg-secondary text-white">Node.js</button>
                                <button className="btn bg-secondary text-white">Express.js</button>
                                <button className="btn bg-secondary text-white">Bootstrap</button>
                            </div>
                            <p className="px-2 ">
                                A simple web app to add, update, and delete daily tasks. Built with the MERN stack, it helps users stay organized by managing their to-do list. It uses MongoDB for storing tasks and React for a smooth user experience.
                            </p>

                            <div className="d-flex gap-2">
                                <a className="btn btn-dark text-white" href="https://task-manager-frontend-9c23.onrender.com" target="_blank" rel="noreferrer"> Visit Project</a>
                                <a className="btn btn-dark text-white" href="https://github.com/rajukushwaha210361/Task-Manager" target="_blank" rel="noreferrer"> Github Link</a>
                            </div>
                        </div>
                    </li>


                </ul>
            </div>
        </>
    )
}

export default Projects

