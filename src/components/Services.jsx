import React from 'react'
// import service from '../../src/assets/services_data'
const Services = () => {
    return (
        <>
            <div id='service' className="container  mt-5">
                    <h1 className="text-center my-5">My Services</h1>
                <div className="m-auto row gap-3 justify-content-center">
                    <div className="col-sm-5 p-1 py-sm-5 text-center border border-dark bg-secondary rounded-4" >
                        <h3 className="">Website development</h3>
                    </div>
                    <div className="col-sm-5 p-1 py-sm-5 text-center border border-dark bg-secondary rounded-4" >
                        <h3 className="">Content Writing</h3>
                    </div>
                    <div className="col-sm-5 p-1 py-sm-5 text-center border border-dark  bg-secondary rounded-4">
                        <h3>Digital Marketing</h3>
                    </div>
                    <div className="col-sm-5 p-1  py-sm-5 text-center border border-dark bg-secondary rounded-4">
                        <h3>Backend Development</h3>
                    </div>
                    
                </div>
            </div>
        </>
    )
}

export default Services
