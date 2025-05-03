// import React from 'react'
// const Services = () => {
//     return (
//         <>
//             <div id='service' className="container  mt-5">
//                     <h1 className="text-center my-5">My Services</h1>
//                 <div className="m-auto row gap-3 justify-content-center myservice">
//                     <div className="col-sm-5 p-1 py-sm-5 text-center border border-dark bg-secondary rounded-4" >
//                         <h3 className="">Website development</h3>
//                     </div>
//                     <div className="col-sm-5 p-1 py-sm-5 text-center border border-dark bg-secondary rounded-4" >
//                         <h3 className="">Content Writing</h3>
//                     </div>
//                     <div className="col-sm-5 p-1 py-sm-5 text-center border border-dark  bg-secondary rounded-4">
//                         <h3>Digital Marketing</h3>
//                     </div>
//                     <div className="col-sm-5 p-1  py-sm-5 text-center border border-dark bg-secondary rounded-4">
//                         <h3>Backend Development</h3>
//                     </div>
                    
//                 </div>
//             </div>
//         </>
//     )
// }

// export default Services
import React from 'react';

const Services = () => {
    const services = [
        {
            title: "Frontend Development",
            img: "https://static.thenounproject.com/png/487779-200.png", // Frontend Development icon
        },
        {
            title: "Backend Development",
            img: "https://static.vecteezy.com/system/resources/previews/007/570/850/non_2x/backend-development-line-icon-vector.jpg", // Backend Development icon
        },
        {
            title: "Full-Stack Web Development",
            img: "https://static.thenounproject.com/png/2230389-200.png", // Full-stack Development icon
        },
        {
            title: "API Integration",
            img: "https://www.shutterstock.com/image-vector/api-integration-icon-line-style-600nw-2529168901.jpg", // API Integration icon
        },
        {
            title: "MongoDB Database Design",
            img: "https://static-00.iconduck.com/assets.00/database-mongo-db-icon-1954x2048-wrw32e9l.png", // MongoDB icon
        },
        {
            title: "Responsive Website Design",
            img: "https://static.vecteezy.com/system/resources/previews/002/206/010/non_2x/responsive-design-icon-free-vector.jpg", // Responsive Design icon
        },
        {
            title: "Website Deployment",
            img: "https://cdn-icons-png.flaticon.com/512/6822/6822231.png", // Deployment icon
        },
    ];

    return (
        <div id='service' className="container mt-5">
            <h1 className="text-center my-5">My Services</h1>
            <div className="row justify-content-start gap-4">
                {services.map((service, index) => (
                    <div key={index} className="mx-1 col-sm-5 col-md-4 col-lg-2">
                        <div className="card h-100 text-center border-dark rounded-4 shadow-sm">
                            <img
                                src={service.img}
                                className="card-img-top p-3"
                                alt={service.title}
                                style={{ height: '100px', objectFit: 'contain' }}
                            />
                            <div className="card-body bg-secondary text-white rounded-bottom-4">
                                <h5 className="card-title">{service.title}</h5>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Services;
