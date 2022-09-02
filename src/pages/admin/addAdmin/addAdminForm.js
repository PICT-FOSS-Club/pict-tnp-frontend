import { useState } from "react";

// import axios from "axios";
// import { useNavigate } from "react-router-dom";

const AddadminForm = () => {

    const [admin, setAdmin] = useState({
        email: "",
        password: "",
      });

    //   const navigate = useNavigate();

      const handleSubmit = (e) => {
        e.preventDefault();

        var pass1 = document.getElementById("validationCustom03").value;
        var pass2 = document.getElementById("validationCustom089").value;

        if(pass1===pass2){
            // await axios.post('http://localhost:8080/company/add', company,{withCredentials:true})
            // .then((res)=>{
            //   // console.log("Res: ",res);
            //   alert("Company added successfully!");
            //   // window.location.reload();
            //   navigate("/admin/company-table");
            // })
            // .catch((err)=>{
            //   // console.log("err: ",err);
            // })
        }else{
            alert("Both the passwords should match!");
        }
      }

    return ( 
<div className="modal fade" id="addadminform" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="staticBackdropLabel">Fill the admin details</h5>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
      <form onSubmit={handleSubmit}>
              <p style={{ fontSize: "15px" }}>
                <span style={{ color: "red" }}>*</span> All fields are mandatory
              </p>
              <hr />
              {/* <form className="row g-3 needs-validation" onSubmit={handleSubmit}> */}
              <h5>About company</h5>
             <div className="row" id="companyFormadd">
                <div className="col-md-10">
                  <label htmlFor="validationCustom02" className="form-label">
                    Admin email<span style={{ color: "red" }}>*</span>
                  </label>
                  <input
                    type="email"
                    value={admin.email}
                    onChange={(e) =>
                      setAdmin({ ...admin, email: e.target.value })
                    }
                    className="form-control"
                    placeholder="Admin email address"
                    id="validationCustom02"
                    required
                  />
                </div>
             <div className="col-md-10">
                  <label htmlFor="validationCustom03" className="form-label">
                    Secure password<span style={{ color: "red" }}>*</span>
                  </label>
                  <input
                    type="password"
                    value={admin.password}
                    onChange={(e) =>
                      setAdmin({ ...admin, password: e.target.value })
                    }
                    className="form-control"
                    placeholder="Secure password"
                    id="validationCustom03"
                    required
                  />
            </div>

            <div className="col-md-10">
                  <label htmlFor="validationCustom089" className="form-label">
                    Confirm password<span style={{ color: "red" }}>*</span>
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Confirm password"
                    id="validationCustom089"
                    required
                  />
            </div>

<hr className="my-2" />
             <div className="col-md-12 mx-3 my-2">
                  <button className="btn btn-primary" type="submit">
                    Add admin
                  </button>
            </div>

        </div>
        </form>
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>
     );
}
 
export default AddadminForm;