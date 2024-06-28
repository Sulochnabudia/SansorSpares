import React, { memo } from 'react';

function About() {
    return (
        <>
            <div className='py-4 d-flex flex-column align-items-center' style={{ backgroundColor: "whitesmoke" }}>
                <p className='fw-semibold fst-italic fs-1 mb-5'>About Us</p>

                {/* Image container */}
                <div className='container'>
                    <div className='row mb-2'>
                        <div className='col-12 col-md-4 mb-3'>
                            <img src="./images/carousel_img.jpg" className='rounded img-fluid' alt="" />
                        </div>
                        <div className='col-12 col-md-4 mb-3'>
                            <img src="./images/carousel_img3.jpg" className='rounded img-fluid' alt="" />
                        </div>
                        <div className='col-12 col-md-4 mb-3'>
                            <img src="./images/carousel_img5.jpg" className='rounded img-fluid' alt="" />
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-12 col-md-4 mb-3'>
                            <img src="./images/carousel_img4.jpg" className='rounded img-fluid' alt="" />
                        </div>
                        <div className='col-12 col-md-4 mb-3'>
                            <img src="./images/carousel_img6.jpg" className='rounded img-fluid' alt="" />
                        </div>
                        <div className='col-12 col-md-4 mb-3'>
                            <img src="./images/carousel_img7.jpg" className='rounded img-fluid' alt="" />
                        </div>
                    </div>
                </div>

                {/* Content */}
                <h2 className='mt-5 mb-5 text-primary text-center'>Every Business Needs Great Content</h2>
                <div className='d-flex flex-column flex-md-row justify-content-center align-items-center mb-5' style={{ gap: "20px" }}>
                    <img src="./images/about-1.jpg" alt="" className='img-fluid' style={{ maxWidth: "500px" }} />
                    <div className='d-flex flex-column justify-content-center ' style={{ maxWidth: "500px" }}>
                        <h2 className='mb-4'>Our Mission</h2>
                        <p className='fs-5'>Our mission is to empower individuals and businesses with advanced sensor technology that enhances safety, efficiency, and productivity. We strive to provide accurate and reliable sensor solutions that enable our customers to monitor and analyze environmental conditions, detect changes, and make informed decisions.</p>
                    </div>
                </div>
                <div className='d-flex flex-column flex-md-row justify-content-center align-items-center mb-5' style={{ gap: "20px" }}>
                    <div className='d-flex flex-column justify-content-center ' style={{ maxWidth: "500px" }}>
                        <h2 className='mb-4'>Quality and Reliability</h2>
                        <p className='fs-5'>At SensorSphere, quality and reliability are our top priorities. We source our sensors from reputable manufacturers known for their precision and durability. Each sensor undergoes rigorous testing and quality control measures to ensure it meets our high standards and delivers accurate and consistent performance.</p>
                    </div>
                    <img src="./images/about-2.jpg" alt="" className='img-fluid' style={{ maxWidth: "500px" }} />
                </div>
                <div className='d-flex flex-column flex-md-row justify-content-center align-items-center mb-5' style={{ gap: "20px" }}>
                    <img src="./images/about-3.jpg" alt="" className='img-fluid' style={{ maxWidth: "500px" }} />
                    <div className='d-flex flex-column justify-content-center ' style={{ maxWidth: "500px" }}>
                        <h2 className='mb-4'>Custom Solutions</h2>
                        <p className='fs-5'>In addition to our standard sensor offerings, we also provide custom sensor solutions tailored to meet the specific requirements of our customers. Our team of skilled engineers and technicians work closely with clients to design and develop custom sensor solutions that address unique challenges and applications.</p>
                    </div>
                </div>
                <div className='d-flex flex-column flex-md-row justify-content-center align-items-center mb-5' style={{ gap: "20px" }}>
                    <div className='d-flex flex-column justify-content-center ' style={{ maxWidth: "500px" }}>
                        <h2 className='mb-4'>Customer Support</h2>
                        <p className='fs-5'>At SensorSphere, we are committed to providing exceptional customer support and service. Our knowledgeable and friendly customer support team is available to assist you with any questions, concerns, or issues you may have, ensuring a smooth and hassle-free experience.</p>
                    </div>
                    <img src="./images/about-4.jpg" alt="" className='img-fluid' style={{ maxWidth: "500px" }} />
                </div>
            </div>
        </>
    )
}

export default memo(About)
