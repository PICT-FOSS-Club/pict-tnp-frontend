import React, { useEffect, useState } from 'react';
import {Link } from 'react-router-dom';
import "../../assets/css/admincompanytable.css"
import axios from 'axios';

const StudentCompanyTable = () => {

    const [studentCompanyTable, setStudentCompanyTable] = useState([]);
    const [isLoading, setLoading] = useState(true);

    useEffect(() => {
        axios.get("http://localhost:8080/student/company/jobs", { withCredentials: true }).then((res) => {
            // console.log('res', res.data.data);
            setStudentCompanyTable(res.data.data)
            setLoading(false);
        }).catch((err) => {
            console.log('err', err)
            setLoading(false);
        })
    }, [])

    if (isLoading) {
        return <div className="text-center">
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>;
    }


    return (
        <div id="adminCOmpanyTable">
            <div className="row my-3">
                <div className="d-flex justify-content-between">
                    <div className="col-md-6 col-sm-6 cl-sx-6 col-6"><h3>Company table</h3></div>
                    <div className="col-md-3" />
                    <div className="col-md-1" />
                </div>
            </div>
            <table className="table table-hover">
                <thead className="table-dark darkRow">
                    <tr>
                        <th scope="col" >Company name</th>
                        <th scope="col" >Job</th>
                        <th scope="col" className="text-center">Round</th>
                        <th scope="col" >Schedule</th>
                        <th scope="col" >Action</th>
                    </tr>
                </thead>
                <tbody>
                    {studentCompanyTable.map((studentCompany) => (
                        <tr key={studentCompany._id}>
                            <td>{studentCompany.name}</td>
                            <td>{studentCompany.profile}</td>
                            <td><span className={`badge px-3 ${studentCompany.currentRound >= studentCompany.totalRounds ? "bg-danger" : !studentCompany.currentRound ? "bg-primary" : "bg-success"} `}>{(studentCompany.currentRound >= studentCompany.totalRounds) ? "Complete" : (!studentCompany.currentRound) ? "Upcoming" : `Round - ${studentCompany.currentRound}`}</span></td>
                            <td>{studentCompany.currentRound >= studentCompany.totalRounds ? "Completed" : !studentCompany.currentRound ? studentCompany.driveDetails[0].date : studentCompany.driveDetails[studentCompany.currentRound].date}</td>
                            <td><Link to={`/student/company/details/${studentCompany._id}`}>View</Link></td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <div />
        </div>
    )
}

export default StudentCompanyTable   