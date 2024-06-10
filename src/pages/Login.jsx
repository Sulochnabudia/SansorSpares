import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

function Login() {

    // Use Navigate
    const navigate = useNavigate()


    // Use States
    const [userDetail, setUserDetail] = useState({ email: "", password: "" })
    const [regiterUsers, setRegiterUsers] = useState([])
    const [verifyLength, setVerifyLength] = useState(false)
    const [errorMessage, setErrorMessage] = useState("")

    //Handle Input Change
    const handleInput = (e) => setUserDetail({ ...userDetail, [e.target.name]: e.target.value })

    // Handle Login User button
    const handleLogin = () => {
        if (verifyLength && errorMessage.length == 0) {
            const valid = checkValidity()
            if (typeof valid != "string") {
                localStorage.setItem("SensorLogin", JSON.stringify(valid))
                navigate("/")
            } else {
                setErrorMessage(valid)
            }
        } else {
            setErrorMessage("Please enter your details");
        }
    }

    // Check for any input errors and verify length
    useEffect(() => {
        if (userDetail.email.length > 0 && userDetail.password.length > 0) {
            if (!userDetail.email.includes("@gmail.com")) {
                setErrorMessage("Enter valid email");
            }
            else if (userDetail.password.length < 4) {
                setErrorMessage("Password be greater than 4")
            } else {
                setErrorMessage("")
            }
            setVerifyLength(true)
        } else {
            setVerifyLength(false)
        }
    }, [userDetail])

    // Get all the registered users from localstroage
    useEffect(() => {
        setRegiterUsers(JSON.parse(localStorage.getItem("SensorRegisterUser")))
    }, [])

    // Check if email or password exist and are correct
    function checkValidity() {
        for (let i = 0; i < regiterUsers.length; i++) {
            const user = regiterUsers[i];
            if (user.email.toLowerCase() == userDetail.email.toLowerCase()) {
                if (user.password == userDetail.password) {
                    return user
                } else {
                    return ("Password incorrect");
                }
            }
        }
        return ("Email id not found")
    }


    return (
        <>
            <div className='d-flex justify-content-center align-items-center Login-container' style={{ height: "90vh" }}>
                <div className='px-5 py-4  Signup-box' style={{ width: "fit-content" }}>
                    <div className='Signup-content'>
                        <h1 className='text-white text-center mb-4'>Login</h1>
                        <div>
                            {errorMessage.length > 0 && <p className='fs-4 text-center text-danger'>{errorMessage}</p>}
                            <div className="mb-4">
                                <input type="email" className="" name="email" aria-describedby="emailHelp" placeholder='E-mail' onChange={handleInput} />
                            </div>
                            <div className="mb-4">
                                <input type="password" name="password" className="" placeholder='Password' onChange={handleInput} />
                            </div>
                        </div>
                        <button type="submit" className="Form-btn my-4" onClick={handleLogin}>Login</button>
                        <p className='text-center text-white'>Don't have an Account? <Link to="/signup" className='fs-5 text-info text-decoration-none'>Sign Up</Link> </p>

                    </div>
                </div>
            </div>
        </ >
    )
}

export default Login