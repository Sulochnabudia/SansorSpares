import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
    return (
        < >
            <div className="card">
                <div className="card-body Footer-body d-flex justify-content-center gap-5 py-4">
                    <div className=' d-flex flex-column gap-5' style={{ width: "500px" }}>
                        <Link className="navbar-brand fs-4" to="/" style={{ color: "#E6E7E9" }}>SansorSpares</Link>
                        <p className='text-wrap'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque ex obcaecati rem reiciendis, tempora natus amet aspernatur exercitationem ratione cum corporis est expedita facilis doloribus.</p>
                    </div>
                    <div>
                        <h4 className='mb-5'>Latest News</h4>
                        <div className='mb-4'>
                            <img src="./images/card_img-1.jpeg" alt="" />
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        </div>
                        <div>
                            <img src="./images/card_img-2.jpeg" alt="" />
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        </div>
                    </div>
                    <div className='d-flex gap-5'>
                        <div>
                            <h4 className='mb-5'>Quick Links</h4>
                            <ul>
                                <li><Link className='text-decoration-none text-reset' to={"/"}>Home</Link> </li>
                                <li><Link className='text-decoration-none text-reset' to={"/about"}>About</Link></li>
                                <li><Link className='text-decoration-none text-reset' to={"/product"}>Products</Link></li>
                                <li><Link className='text-decoration-none text-reset' to={"/faq"}>FAQ's</Link></li>
                                <li><Link className='text-decoration-none text-reset' to={"/"}>Contact Us</Link></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className='mb-5'>Other Links</h4>
                            <ul>
                                <li>Privacy Notice</li>
                                <li>Terms Of Use</li>
                                <li>Security</li>
                                <li>Blog</li>
                                <li>Sevice Status</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="card-footer text-muted py-3 fs-6 Footer-reserved text-center">
                    ©2024.| Designed By: Sulochna Budiya.| All rights reserved...
                </div>
            </div>
        </ >
    )
}

export default Footer