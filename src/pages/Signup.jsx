import React, { useEffect, useState } from 'react'
import toast, { Toaster } from 'react-hot-toast'
import { Link, useNavigate } from 'react-router-dom'

function Signup() {

    //Use Navigate
    const navigate = useNavigate()
    const navigateToLogin = () => {
        setTimeout(() => {
            navigate("/login")
        }, 2000)
    }

    //Use States
    const [userDetail, setUserDetail] = useState({
        name: "",
        email: "",
        password: ""
    })
    const [previousUsers, setPreviousUsers] = useState([])
    const [confirmPassword, setConfirmPassword] = useState("")
    const [errorMessage, setErrorMessage] = useState("")
    const [verifyLength, setVerifyLength] = useState(false)

    //Handle Input values
    const handleInput = (e) => {
        if (e.target.name == "confirmPsd") {
            setConfirmPassword(e.target.value)
        } else {
            setUserDetail({ ...userDetail, [e.target.name]: e.target.value })
        }
    }

    //Handle SignUp button
    const handleSignUp = () => {
        if (verifyLength && errorMessage.length == 0) {
            if (checkEmail()) {
                setErrorMessage('Email already exist');
            } else {
                localStorage.setItem("SensorRegisterUser", JSON.stringify(previousUsers.concat(userDetail)))
                setUserDetail({ name: "", email: "", password: "" })
                setConfirmPassword("")
                toast.success('SignUp Successfully')
                navigateToLogin()

            }
        } else {
            setErrorMessage("Please enter details")
        }
    }

    //Check if email alredy exist or not
    function checkEmail() {
        for (let i = 0; i < previousUsers.length; i++) {
            const user = previousUsers[i]
            if (user.email.toLowerCase() == userDetail.email.toLowerCase()) {
                return true
            }
        }
        return false
    }

    //check input error and verify length
    useEffect(() => {
        if (userDetail.name.length > 0 && userDetail.email.length > 0 && userDetail.password.length > 0 && confirmPassword.length > 0) {
            if (!userDetail.email.includes("@gmail.com")) {
                setErrorMessage("Enter valid email id")
            }
            else if (confirmPassword != userDetail.password) {
                setErrorMessage("Password don't match")
            } else {
                setErrorMessage("")
            }
            setVerifyLength(true)
        } else {
            setVerifyLength(false)
        }
    }, [userDetail, confirmPassword])


    useEffect(() => {
        if (!localStorage.getItem("SensorRegisterUser")) {
            localStorage.setItem("SensorRegisterUser", "[]")
        } else {
            setPreviousUsers(JSON.parse(localStorage.getItem("SensorRegisterUser")))
        }
    }, [])


    return (
        <>
            <Toaster />
            <div className='d-flex justify-content-center align-items-center Signup-container' style={{ height: "90vh" }}>
                <div className='px-5 py-4  Signup-box' style={{ width: "fit-content" }}>
                    <div className='Signup-content'>
                        <h1 className='text-white text-center mb-3'>Sign Up</h1>
                        <div>
                            {errorMessage.length > 0 && <p className='fs-4 text-center text-danger'>{errorMessage}</p>}
                            <div className="mb-3">
                                <input type="text" className="" name="name" placeholder='Name' style={{ width: "300px" }} onChange={handleInput} value={userDetail.name} />
                            </div>
                            <div className="mb-3">
                                <input type="email" className="" name="email" aria-describedby="emailHelp" placeholder='E-mail' onChange={handleInput} value={userDetail.email} />
                            </div>
                            <div className="mb-3">
                                <input type="password" name="password" className="" placeholder='Password' onChange={handleInput} value={userDetail.password} />
                            </div>
                            <div className="mb-3">
                                <input type="password" className="" name='confirmPsd' placeholder='Confirm Password' onChange={handleInput} value={confirmPassword} />
                            </div>
                        </div>
                        <button type="submit" className="Form-btn my-3" onClick={handleSignUp}>Sign up</button>
                        <p className='text-center text-white'>Already have an Account? <Link to="/Login" className='fs-5 text-info text-decoration-none'>Login</Link> </p>

                    </div>
                </div>

            </div>
        </>
    )
}

export default Signup