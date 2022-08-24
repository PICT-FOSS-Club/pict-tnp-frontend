import axios from "axios";
import * as XLSX from "xlsx";
import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import ReactHTMLTableToExcel from "react-html-table-to-excel";
import "../../assets/css/admincompanytable.css";

const AdminStudentRoundTable = () => {
  axios.defaults.withCredentials = true;

  const [studentTable, setStudentTable] = useState([]);

  const [searchQuery, setSearchQuery] = useState("");
  const [filterStudentsList, setFilterStudentList] = useState(null);

  const [isLoading, setLoading] = useState(true);

  const location = useLocation();

  const state = location.state;
  const navigate = useNavigate();

  const [roundDetails, setRoundDetails] = useState({
    jobId: state.jobId,
    roundNo: state.roundNo,
    qualifiedStudentIds: [],
    disqualifiedStudentIds: [],
  });

  useEffect(() => {
    setLoading(true);
    axios
      .get(
        `http://localhost:8080/admin/company/${state.listType}/${state.roundNo}/${state.jobId}`,
        { withCredentials: true }
      )
      .then((res) => {
        // console.log("res", res.data.data);
        setStudentTable(res.data.data);

        res.data.data.map((student) => {
          setRoundDetails({
            ...roundDetails,
            disqualifiedStudentIds: [
              ...roundDetails.disqualifiedStudentIds,
              student._id,
            ],
          });
        });
        setLoading(false);
      })
      .catch((err) => {
        // console.log("err", err);
      });
  }, []);

  if (isLoading) {
    return (
      <div className="text-center">
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  const handleUpdateRound = async () => {
    setLoading(true)
    await axios.post('http://localhost:8080/company/job/round/result/declare', roundDetails, {withCredentials:true})
    .then((res)=>{
      setLoading(false);
      // console.log("res bdhs: ",res);
        if(res.status==200){
            alert("Round updated successfully!");
        }else{
          alert("Email not sent!");
        }
        window.location.reload();
    }).catch((err)=>{
        alert("Something went wrong!");
        setLoading(false);
    })
  }

  return (
    <div id="adminCOmpanyTable">
      <div className="col-md-4 col-sm-4 col-sx-4 col-4">
        <h3>{`${state.companyName} Round ${state.roundNo} - ${state.listType} Students`}</h3>
      </div>
      <div className="row my-3">
        <div className="d-flex justify-content-between">
          <div className="filter col-md-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Search student
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleInputEmail1"
              placeholder="search for..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              aria-describedby="emailHelp"
            />
            <div id="emailHelp" className="form-text">
              Enter the details like firstname, lastname, email, roll no, etc.
            </div>
          </div>
          <div className="col-md-3" style={{ marginTop: "34px" }}>
            <ReactHTMLTableToExcel
              id="test-table-xls-button"
              className="btn btn-success"
              table="table-to-xls"
              filename={`${state.companyName}-Round-${state.roundNo}-${state.listType}`}
              sheet="tablexlsx"
              buttonText="Download Excel"
            />
          </div>
         
        </div>
      </div>
      <table id="table-to-xls" className="table table-hover">
        <thead className="table-dark darkRow">
          <tr>
            <th scope="col">Reg ID</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Profile</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {studentTable
            .filter(
              (student) =>
                student.middleName
                  .toLowerCase()
                  .includes(searchQuery.toLowerCase()) ||
                student.lastName
                  .toLowerCase()
                  .includes(searchQuery.toLowerCase()) ||
                student.firstName
                  .toLowerCase()
                  .includes(searchQuery.toLowerCase()) ||
                student.aadharCard.toString().includes(searchQuery) ||
                student.lastName
                  .toLowerCase()
                  .includes(searchQuery.toLowerCase()) ||
                student.email.includes(searchQuery) ||
                student.phone.toString().includes(searchQuery) ||
                student.pictRegistrationId.includes(searchQuery) ||
                student.rollNumber.toString().includes(searchQuery)
            )
            .map((student, key) => (
              <tr key={key}>
                <td>{student.pictRegistrationId}</td>
                <td>
                  {student.firstName} {student.middleName} {student.lastName}
                </td>
                <td>{student.email}</td>
                <td
                  onClick={(e) => {
                    e.preventDefault();
                    navigate("/admin/student/profile", {
                      state: { studentId: student._id },
                    });
                  }}
                >
                  <Link to="#">View</Link>
                </td>
                <td>
                  <div className="form-check form-switch">
                    <input
                      className="form-check-input"

                      onChange={(e) => {
                       

                        e.target.checked
                          ? setRoundDetails({
                              ...roundDetails,
                              qualifiedStudentIds: [
                                ...roundDetails.qualifiedStudentIds,
                                student._id,
                              ],
                              disqualifiedStudentIds:
                                roundDetails.disqualifiedStudentIds.filter(
                                  (id) => {
                                    return id != student._id;
                                  }
                                ),
                            })
                          : setRoundDetails({
                              ...roundDetails,
                              disqualifiedStudentIds: [
                                ...roundDetails.disqualifiedStudentIds,
                                student._id,
                              ],
                              qualifiedStudentIds:
                                roundDetails.qualifiedStudentIds.filter(
                                  (id) => {
                                    return id != student._id;
                                  }
                                ),
                            });
                      }}
                      type="checkbox"
                      role="switch"
                      id="flexSwitchCheckDefault"
                    />
                    <label
                      className="form-check-label"
                      htmlFor="flexSwitchCheckDefault"
                    >
                      Toggle to promote
                    </label>
                  </div>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
      <div className="col-md-3" style={{float:"right" }}>
            <button onClick={handleUpdateRound}
              className="btn btn-primary"
            >Update</button>
          </div>
      <div />
    </div>
  );
};

export default AdminStudentRoundTable;
