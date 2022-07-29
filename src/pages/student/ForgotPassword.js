import axios from 'axios';
import React, { useState } from 'react'

const ForgotPassword = () => {

    const [email, setEmail] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        setEmail(email);
        // console.log('email', email);

        //making a post request using axios
        await axios.post('http://localhost:8080/student/password/forgot', {
            email: email
        }, { withCredentials: true })
            .then((res) => {
                console.log('Response after post request in axios:', res);

                // if (res.status === 200) {
                alert('Email sent your email successfully! Please check your email id.');
                // }
            })
            .catch((err) => {
                if (err.response.data === 'student not found') {
                    alert("Email is not registered")
                } else {
                    alert("Email not sent")
                }
            })
        setEmail('');


    }


    return (
        <div>
            <div className="Auth-form-container">
                <form className="Auth-form" onSubmit={handleSubmit} >
                    <div className="Auth-form-content">
                        <h3 className="Auth-form-title">Forgot Password</h3>

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


                        <div className="d-grid gap-2 mt-3">
                            <button type="submit" className="btn btn-primary">
                                Submit
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default ForgotPassword