import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../authentication/css/login.css'
const axios = require('axios');

const AdminCompanyTable = () => {
    const [curPass, setCurPass] = useState('');
    const [newPass, setnewPass] = useState('');
    const [confirmPass, setconfirmPass] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        //validate whether newPass and confirmPass are same:
        if (newPass !== confirmPass) {
            alert('Passwords do not match!');
            setnewPass(''); setconfirmPass('');
            return;
        }

        //making an axios post request to backend to update the password:
        const res = await axios.post(`http://localhost:8080/admin/password/update`, {
            "oldPassword": curPass,
            "newPassword": newPass,
            "confirmPassword": confirmPass
        }, { withCredentials: true }).catch((error)=>{
            // console.log('eeee',error)
            alert("Old Password did not matched");
        });

        if (res.status === 200 || res.status === 201) {
            return navigate("/admin/dashboard");
            // console.log('sucessful login')
        } else {
            alert("Email not sent!");
        }
        //navigate the user to signin page:

    }

    return (
        <div>
            <div id="signInForm">
            <main className="form-signin w-100 m-auto">
                <form onSubmit={handleSubmit} >
                    <h3 className="form-label">Update Password</h3>
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
                                onChange={(e) => setnewPass(e.target.value)}
                                value={newPass}
                                type="password"
                                className="form-control mt-1"
                                placeholder="Enter New Password"
                            />
                        </div>

                        <div className="form-group mt-3">
                            <label>Confirm New Password</label>
                            <input
                                onChange={(e) => setconfirmPass(e.target.value)}
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

export default AdminCompanyTable;