import axios from 'axios';
import * as XLSX from 'xlsx'
import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import ReactHTMLTableToExcel from 'react-html-table-to-excel';
import "../../assets/css/admincompanytable.css";


const AdminStudentRoundTable = () => {
    axios.defaults.withCredentials = true

    const [studentTable, setStudentTable] = useState([]);

    const [searchQuery, setSearchQuery] = useState("");
    const [filterStudentsList, setFilterStudentList] = useState(null);

    const [isLoading, setLoading] = useState(true);

    const location = useLocation();

    const state = location.state;
    
    useEffect(() => {
        setLoading(false);
        console.log(state.jobId, state.roundNo);
        axios.get(`http://localhost:8080/admin/company/${state.listType}`, { jobId: state.jobId, roundNo: parseInt(state.roundNo) })
            .then((res) => {
                console.log('res', res.data.studentList);
                setStudentTable(res.data.studentList);
                setLoading(false);
            }).catch((err) => {
                console.log('err', err);
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
                    <div className="col-md-4 col-sm-4 col-sx-4 col-4"><h3>{`${state.companyName} Round ${state.roundNo} - ${state.listType} Students`}</h3></div>
            <div className="row my-3">
                <div className="d-flex justify-content-between">
                    <div className="filter col-md-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Search student</label>
                        <input type="text" className="form-control" id="exampleInputEmail1" placeholder='search for...' value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} aria-describedby="emailHelp" />
                        <div id="emailHelp" className="form-text">Enter the details like firstname, lastname, email, roll no, etc.</div>
                    </div>
                    <div className="col-md-3" style={{marginTop: "34px"}}>
                    <ReactHTMLTableToExcel
                    id="test-table-xls-button"
                    className="btn btn-success"
                    table="table-to-xls"
                    filename={`${state.companyName}-Round-${state.roundNo}-${state.listType}`}
                    sheet="tablexlsx"
                    buttonText="Download Excel"/>
                    </div>
                </div>
            </div>
            <table id="table-to-xls" className="table table-hover">
                <thead className="table-dark darkRow">
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {studentTable.filter(student => student.studentName.toLowerCase().includes(searchQuery.toLowerCase())).map((student, key) => (
                        <tr key={key}>
                        <td>{student.studentName}</td>
                        <td>{student.studentEmail}</td>
                        <td><Link to={`/admin/student/profile/${student.studentId}`}>View</Link></td>
                    </tr>
                    ))}
                </tbody>
            </table>

            <div />
        </div>
    )
}

export default AdminStudentRoundTable;