import React, { memo, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function Navbar() {

    //Use states 
    const [loggedUser, setLoggedUser] = useState(false)
    const [showUser, setShowUser] = useState(false)

    //Logout user
    const logoutUser = () => {
        localStorage.removeItem("SensorLogin")
        setShowUser(false)
    }

    useEffect(() => {
        if (localStorage.getItem("SensorLogin")) {
            setShowUser(true)
            setLoggedUser(JSON.parse(localStorage.getItem("SensorLogin")))
        }
    }, [])


    return (
        < >
            <nav className="navbar navbar-expand-lg bg-body-tertiary" style={{ backgroundColor: "#124076" }}>
                <div className="container-fluid align-items-center" >

                    <Link className="navbar-brand" to="/" style={{ color: "#E6E7E9" }}>SansorSpares </Link>

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse d-flex justify-content-center" id="navbarSupportedContent">
                        <ul className="navbar-nav mb-2 mb-lg-0 ">
                            <li className="nav-item Navbar-link">
                                <Link className="nav-link active" aria-current="page" to="/" style={{ color: "#E6E7E9" }}>Home</Link>
                            </li>
                            <li className="nav-item Navbar-link">
                                <Link className="nav-link active" to="/products" style={{ color: "#E6E7E9" }}>Products</Link>
                            </li>
                            <li className="nav-item Navbar-link">
                                <Link className="nav-link active" to="/faq" style={{ color: "#E6E7E9" }}>FAQ'S</Link>
                            </li>
                            <li className="nav-item Navbar-link">
                                <Link className="nav-link active" to="/about" style={{ color: "#E6E7E9" }}>About Us</Link>
                            </li>
                        </ul>
                    </div>


                    {
                        showUser === true
                        &&
                        <div className="dropdown" style={{ marginRight: "100px" }}>
                            <button type="button fs-5 text-white" className="btn" data-bs-toggle="dropdown" aria-expanded="false">
                                <span className='text-white'>Hello {loggedUser.name}</span>
                            </button>
                            <ul className="dropdown-menu">
                                <li><button className='dropdown-item' onClick={logoutUser}>Logout</button></li>
                                <li><hr className="dropdown-divider" /></li>
                                <li><span className="dropdown-item">Something else here</span></li>
                            </ul>
                        </div>

                    }
                    {
                        showUser === false
                        &&
                        <div className='d-flex gap-2'>
                            <Link to="login">
                                <button type="button" className="btn btn-primary"> Login</button>
                            </Link>
                            <Link to="signup">
                                <button type="button" className="btn btn-primary">SignUp</button>

                            </Link>
                        </div>
                    }

                </div >
            </nav >
        </ >
    )
}

export default memo(Navbar)