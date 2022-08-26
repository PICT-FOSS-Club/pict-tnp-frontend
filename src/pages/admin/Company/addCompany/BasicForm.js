import { useState } from "react";
import "../../../../assets/css/admincompanytable.css";
import "../../../../assets/css/studentprofile.css"
import axios from "axios";
import { useNavigate } from "react-router-dom";

const BasicForm = () => {

    const [company, setCompany] = useState({
        name: "",
        websiteUrl: "",
        email: "",
        companyLocation: "",
      });

      const navigate = useNavigate();

      const handleSubmit = async (e) => {
        e.preventDefault();

        await axios.post('http://localhost:8080/company/add', company,{withCredentials:true})
        .then((res)=>{
          // console.log("Res: ",res);
          alert("Company added successfully!");
          // window.location.reload();
          navigate("/admin/company-table");
        })
        .catch((err)=>{
          // console.log("err: ",err);
        })
      }

    return ( 
        <div id="adminCOmpanyTable">
             <div className="col-md-6 col-sm-6 cl-sx-6 col-6"><h3>Fill the company details</h3></div>
             <form onSubmit={handleSubmit}>
              <p style={{ fontSize: "15px" }}>
                <span style={{ color: "red" }}>*</span> All fields are mandatory
              </p>
              <hr />
              {/* <form className="row g-3 needs-validation" onSubmit={handleSubmit}> */}
              <h5>About company</h5>
             <div className="row" id="companyFormadd">
             <div className="col-md-5">
                  <label htmlFor="validationCustom01" className="form-label">
                    Company name<span style={{ color: "red" }}>*</span>
                  </label>
                  <input
                    type="text"
                    value={company.name}
                    onChange={(e) =>
                      setCompany({ ...company, name: e.target.value })
                    }
                    className="form-control"
                    id="validationCustom01"
                    placeholder="Company name"
                    required
                  />
                </div>
                <div className="col-md-5">
                  <label htmlFor="validationCustom02" className="form-label">
                    Company Email<span style={{ color: "red" }}>*</span>
                  </label>
                  <input
                    type="email"
                    value={company.email}
                    onChange={(e) =>
                      setCompany({ ...company, email: e.target.value })
                    }
                    className="form-control"
                    placeholder="Company email address"
                    id="validationCustom02"
                    required
                  />
                </div>
             <div className="col-md-10">
                  <label htmlFor="validationCustom03" className="form-label">
                    Company website url<span style={{ color: "red" }}>*</span>
                  </label>
                  <input
                    type="text"
                    value={company.websiteUrl}
                    onChange={(e) =>
                      setCompany({ ...company, websiteUrl: e.target.value })
                    }
                    className="form-control"
                    placeholder="Company url address"
                    id="validationCustom03"
                    required
                  />
            </div>

                            {/* Company Location */}
                <div className="col-md-10">
                  <label htmlFor="validationUrl" className="form-label">
                    Company address<span style={{ color: "red" }}>*</span>
                  </label>
                  <div className="input-group has-validation">
                    <textarea
                      type="text"
                      value={company.companyLocation}
                      onChange={(e) =>
                        setCompany({
                          ...company,
                          companyLocation: e.target.value,
                        })
                      }
                      className="form-control"
                      id="validationUrl"
                      aria-describedby="inputGroupPrepend"
                      required
                    />
                  </div>
                </div>
<hr className="my-2" />
             <div className="col-md-12 mx-3 my-2">
                  <button className="btn btn-primary" type="submit">
                    Add company
                  </button>
            </div>

        </div>
        </form>
        </div>
     );
}
 
export default BasicForm;