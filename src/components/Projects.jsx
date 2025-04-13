import React from 'react'

const Projects = () => {
    return (
        <>
            <div id='portfolio' className='d-flex  mt-3 flex-column justify-content-center align-items-centem-5  py-5' style={{ backgroundColor: '#737171', color: 'black' }}>
                <h1 className='text-center'>Projects</h1>
                <ul className='d-flex flex-column list-group list-unstyled gap-1 m-1 mt-3'>
                    <div className="d-flex justify-content-between m-1 gap-2">
                        <li className='list-group-item border-3 px-5 w-100'>
                            EasyStay
                        </li>
                        <button className='btn btn-secondary w-50'><a className="text-decoration-none text-dark fs-5" href="https://majorproject-ybwl.onrender.com">Link</a> </button>
                    </div>
                    <div className="d-flex justify-content-between m-1 gap-2">
                        <li className='list-group-item border-3 px-5 w-100'>
                        <strong>Employee management system</strong>
                          <br/>  <small className="text-muted">
                        <strong>Admin Login:</strong> admin@gmail.com | password: 123<br />
                        <strong>User Login:</strong> employee3@example.com | password: 123
                    </small>
                        </li>
                        <button className='btn btn-secondary w-50'><a className="text-decoration-none text-dark fs-5" href="https://employee-management-system-mnsa.onrender.com/">Link</a> </button>
                    </div>
        

                    <div className="d-flex justify-content-between m-1 gap-2">
                        <li className='list-group-item border-3 px-5 w-100'>
                            Todolist
                        </li>
                        <button className='btn btn-secondary w-50'><a className="text-decoration-none text-dark fs-5" href="https://todo-list-dr0a.onrender.com">Link</a> </button>
                    </div>
                    <div className="d-flex justify-content-betwee m-1 gap-2">
                        <li className='list-group-item border-3 px-5 w-100'>
                            WeatherApp
                        </li>
                        <button className='btn btn-secondary w-50'><a className="text-decoration-none text-dark fs-5" href="https://live-weather-d15d.onrender.com/">Link</a> </button>
                    </div>

                </ul>
            </div>

        </>
    )
}

export default Projects
