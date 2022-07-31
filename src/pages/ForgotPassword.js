import axios from 'axios';
import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import "../authentication/css/login.css"

const ForgotPassword = () => {

    const [email, setEmail] = useState('');

    const [usertype,setUserType] = useState("student");

    const handleSubmit = async (e) => {
        e.preventDefault();

        setEmail(email);

        await axios.post(`http://localhost:8080/${usertype}/password/forgot`, {
            email: email
        }, { withCredentials: true })
            .then((res) => {
                console.log('Response after post request in axios:', res);

                alert('Email sent your email successfully! Please check your email id.');
            })
            .catch((err) => {
                if (err.response.data === 'student not found' ) {
                    alert("Email is not registered")
                } else {
                    alert("Email not sent")
                }
            })
        setEmail('');
    }

    const handleUserType = (event) => {
        setUserType(event.target.value);
    }

    return (
        <div>
             <div className="card text-center">
                    <div className="card-body">
                 <Link to="/" style={{textDecoration:"none",color:"gray"}}>  PICT TnP Platform </Link>
                    </div>
                </div>
             <div id="signInForm">
            <main className="form-signin w-100 m-auto">
                <form onSubmit={handleSubmit} >
                        <h3 className="form-label">Forgot Password</h3>
                        <div className="form-group mt-3">
                            <label>Enter Email</label>
                            <input
                                onChange={(e) => setEmail(e.target.value)}
                                value={email}
                                type="email"
                                className="form-control mt-1"
                                placeholder="Enter your Email"
                            />
                        </div>
                        <br />
                        <div className="mb-3 d-flex form-check" onChange={handleUserType}>
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="usertype" id="flexRadioDefault1" value="admin" />
                                <label className="form-check-label" htmlFor="flexRadioDefault1">
                                    Admin
                                </label>
                            </div>
                            <div className="mx-3 form-check">
                                <input className="form-check-input" type="radio" name="usertype" id="flexRadioDefault2" value="student" defaultChecked="checked" />
                                <label className="form-check-label" htmlFor="flexRadioDefault2">
                                    Student
                                </label>
                            </div>
                        </div>
                        <div className="d-grid gap-2 mt-3">
                            <button type="submit" className="btn btn-primary">
                                Submit
                            </button>
                        </div>
                </form>
                </main>
            </div>
        </div>
    )
}

export default ForgotPassword