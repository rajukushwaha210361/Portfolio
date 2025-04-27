
import React from 'react'

const Projects = () => {
    return (
        <>
            <div id='portfolio' className='d-flex flex-column justify-content-center align-items-center px-3 py-5'
                style={{ backgroundColor: '#737171', color: 'black' }}>
                <h1 className='text-center mb-4'>Projects</h1>
                <ul className='d-flex flex-column list-group list-unstyled gap-4 w-100 project'>

                    {/* Project 1 */}
                    <li className='list-group-item p-4 w-100' style={{ backgroundColor: '#f8f9fa', borderRadius: '10px' }}>
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
                    </li>

                    {/* Project 2 */}
                    <li className='list-group-item p-4 w-100' style={{ backgroundColor: '#f8f9fa', borderRadius: '10px' }}>
                        <div className="row align-items-center">
                            <div className="col-12 col-md-8">
                                <h5 className="mb-2"><strong>Employee Management System</strong></h5>
                                <small className="text-muted">
                                    <strong>Admin Login:</strong> admin@gmail.com | password: 123<br />
                                    <strong>User Login:</strong> employee3@example.com | password: 123
                                </small>
                            </div>
                            <div className="col-12 col-md-4 text-md-end mt-2 mt-md-0">
                                <a className="btn btn-secondary w-100 w-md-auto" href="https://employee-management-system-mnsa.onrender.com/" target="_blank" rel="noreferrer">
                                    Visit Project
                                </a>
                            </div>
                        </div>
                    </li>

                    {/* Project 3 */}
                    <li className='list-group-item p-4 w-100' style={{ backgroundColor: '#f8f9fa', borderRadius: '10px' }}>
                        <div className="row align-items-center">
                            <div className="col-12 col-md-8">
                                <h5 className="mb-2"><strong>TodoList</strong></h5>
                            </div>
                            <div className="col-12 col-md-4 text-md-end mt-2 mt-md-0">
                                <a className="btn btn-secondary w-100 w-md-auto" href="https://todo-list-dr0a.onrender.com" target="_blank" rel="noreferrer">
                                    Visit Project
                                </a>
                            </div>
                        </div>
                    </li>

                    {/* Project 4 */}
                    <li className='list-group-item p-4 w-100' style={{ backgroundColor: '#f8f9fa', borderRadius: '10px' }}>
                        <div className="row align-items-center">
                            <div className="col-12 col-md-8">
                                <h5 className="mb-2"><strong>WeatherApp</strong></h5>
                            </div>
                            <div className="col-12 col-md-4 text-md-end mt-2 mt-md-0">
                                <a className="btn btn-secondary w-100 w-md-auto" href="https://live-weather-d15d.onrender.com/" target="_blank" rel="noreferrer">
                                    Visit Project
                                </a>
                            </div>
                        </div>
                    </li>

                </ul>
            </div>
        </>
    )
}

export default Projects

