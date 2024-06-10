import React, { memo } from 'react'

function Carousel() {
    return (

        < >

            <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="true">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4" aria-label="Slide 5"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="5" aria-label="Slide 6"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="6" aria-label="Slide 7"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="7" aria-label="Slide 8"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="8" aria-label="Slide 9"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="9" aria-label="Slide 10"></button>
                </div>


                <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active" data-bs-interval="10000">
                            <img src="./images/carousel_img.jpg" style={{ height: '550px' }} className="d-block w-100" alt="images" />
                        </div>
                        <div className="carousel-item" data-bs-interval="2000">
                            <img src="./images/carousel_img1.jpg" style={{ height: '550px' }} className="d-block w-100" alt="images" />
                        </div>
                        <div className="carousel-item" data-bs-interval="2000">
                            <img src="./images/carousel_img2.jpg" style={{ height: '550px' }} className="d-block w-100" alt="images" />
                        </div>
                        <div className="carousel-item" data-bs-interval="2000">
                            <img src="./images/carousel_img3.jpg" style={{ height: '550px' }} className="d-block w-100" alt="images" />
                        </div>
                        <div className="carousel-item" data-bs-interval="2000">
                            <img src="./images/carousel_img4.jpg" style={{ height: '550px' }} className="d-block w-100" alt="images" />
                        </div>
                        <div className="carousel-item" data-bs-interval="2000">
                            <img src="./images/carousel_img5.jpg" style={{ height: '550px' }} className="d-block w-100" alt="images" />
                        </div>
                        <div className="carousel-item" data-bs-interval="2000">
                            <img src="./images/carousel_img6.jpg" style={{ height: '550px' }} className="d-block w-100" alt="images" />
                        </div>
                        <div className="carousel-item" data-bs-interval="2000">
                            <img src="./images/carousel_img7.jpg" style={{ height: '550px' }} className="d-block w-100" alt="images" />
                        </div>
                        <div className="carousel-item" data-bs-interval="2000">
                            <img src="./images/carousel_img8.jpg" style={{ height: '550px' }} className="d-block w-100" alt="images" />
                        </div>
                        <div className="carousel-item" data-bs-interval="2000">
                            <img src="./images/carousel_img9.jpg" style={{ height: '550px' }} className="d-block w-100" alt="images" />
                        </div>
                    </div>

                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>

                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>

                </div>

            </div>
        </ >
    )
}

export default memo(Carousel)  