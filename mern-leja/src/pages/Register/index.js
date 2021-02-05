import React from 'react'
import { RegisterBg } from '../../assets'
import './register.scss'

const Register = () => {
    return (
        <div className="main-page">
        <div className="left">
            <img src={RegisterBg} className="bg-image"/>
        </div>
        <div className="right">
            <p>Register Page</p>
        </div>
    </div>
    )
}

export default Register
