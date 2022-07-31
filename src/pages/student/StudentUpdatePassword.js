import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './StudentUpdatePassword.css'
const axios = require('axios');

const StudentCompanyTable = () => {

    const [curPass, setCurPass] = useState('');
    const [newPass, setNewPass] = useState('');
    const [confirmPass, setConfirmPass] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        //validate whether newPass and confirmPass are same:
        if (newPass !== confirmPass) {
            alert('Passwords do not match!');
            setNewPass(''); setConfirmPass('');
            return;
        }

        //making an axios post request to backend to update the password:
        const res = await axios.post("http://localhost:8080/student/password/update", {
            "oldPassword": curPass,
            "newPassword": newPass
        }, { withCredentials: true });

        if (res.status === 200 || res.status === 201) {
            return navigate("/student/dashboard");
            // console.log('sucessful login')
        }else {
            return alert("Old Password did not matched");
        }
        //navigate the user to signin page:

    }

    return (
        <div>
                 <div id="signInForm">
            <main className="form-signin w-100 m-auto">
                <form onSubmit={handleSubmit} >
                        <h3>Update Password</h3>
                        <div className="form-group mt-3">
                            <label>
                                Current Password
                            </label>
                            <input
                                onChange={(e) => setCurPass(e.target.value)}
                                value={curPass}
                                type="password"
                                className="form-control mt-1"
                                placeholder="Enter Current Password"
                            />
                        </div>

                        <div className="form-group mt-3">
                            <label>New Password</label>
                            <input
                                onChange={(e) => setNewPass(e.target.value)}
                                value={newPass}
                                type="password"
                                className="form-control mt-1"
                                placeholder="Enter New Password"
                            />
                        </div>

                        <div className="form-group mt-3">
                            <label>Confirm New Password</label>
                            <input
                                onChange={(e) => setConfirmPass(e.target.value)}
                                value={confirmPass}
                                type="password"
                                className="form-control mt-1"
                                placeholder="Confirm New Password"
                            />
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

export default StudentCompanyTable;