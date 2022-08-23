import axios from "axios";
import React, { useState } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";

const AdminResetPassword = () => {
  const [newPass, setNewPass] = useState("");
  const [confirmPass, setconfirmPass] = useState("");
  const navigate = useNavigate();
  const { token, id } = useParams();

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log("token:", token, " id:", id);

    //validate whether newPass and confirmPass are same:
    if (newPass !== confirmPass) {
      alert("Passwords do not match!");
      setNewPass("");
      setconfirmPass("");
      return;
    }

    const data = {
      newPassword: newPass,
      confirmPassword: confirmPass,
    };

    const url = `http://localhost:8080/admin/password/reset?token=${token}&id=${id}`;

    await axios
      .post(url, data, { withCredentials: true })
      .then(async (res) => {
        // console.log("Response after Updating Password:", res.data);

        // cookies are set after new password has been set, so we'll make user redirect to logout so he can relogin
        await axios.post(
          "http://localhost:8080/admin/logout",
          {},
          { withCredentials: true }
        );
        return navigate("/signIn");
      })
      .catch((err) => {
        alert("Email not found ");
        // console.log('Error in Updating Password:', err);
      });
  };

  return (
    <div>
      <div className="card text-center">
        <div className="card-body">
          <Link to="/" style={{ textDecoration: "none", color: "gray" }}>
            {" "}
            PICT TnP Platform{" "}
          </Link>
        </div>
      </div>
      <div id="signInForm">
        <main className="form-signin w-100 m-auto">
          <form onSubmit={handleSubmit}>
            <h3>Reset Password</h3>

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
  );
};

export default AdminResetPassword;
