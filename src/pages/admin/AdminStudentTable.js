import axios from 'axios';
import * as XLSX from 'xlsx'
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import "../../assets/css/admincompanytable.css";


const AdminStudentTable = () => {

    const [studentTable, setStudentTable] = useState([]);

    const [searchQuery, setSearchQuery] = useState("");
    const [filterStudentsList, setFilterStudentList] = useState(null);

    const [isLoading, setLoading] = useState(true);

    // on change states
    const [excelFile, setExcelFile] = useState(null);
    const [excelFileError, setExcelFileError] = useState(null);

    const navigate = useNavigate();

    // handle File
    const fileType = ['application/vnd.ms-excel', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'];
    const handleFile = (e) => {
        let selectedFile = e.target.files[0];
        setLoading(true);
        if (selectedFile) {
            // console.log(selectedFile.type);
            if (selectedFile && fileType.includes(selectedFile.type)) {
                let reader = new FileReader();
                reader.readAsArrayBuffer(selectedFile);
                reader.onload = (e) => {
                    setExcelFileError(null);
                    setExcelFile(e.target.result);
                }
            }
            else {
                setExcelFileError('Please select only excel file types');
                setExcelFile(null);
            }
            setLoading(false);
        }
        else {
            // console.log('Please select your file');
        }
    }

    // submit function
    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        if (excelFile !== null) {
            const workbook = XLSX.read(excelFile, { type: 'buffer' });
            const worksheetName = workbook.SheetNames[0];
            const worksheet = workbook.Sheets[worksheetName];
            const data = XLSX.utils.sheet_to_json(worksheet);
            // console.log(data)
            const json = JSON.stringify(data);
            setLoading(true);
            // console.log(json)
            axios.post('http://localhost:8080/admin/register/students', data, { withCredentials: true })
                .then(function (res) {
                    // console.log(res);
                    setLoading(false);
                })
                .catch(function (error) {
                    // console.log(error);
                    setLoading(false);
                });
        }else{
            setLoading(false);
        }
    }

    useEffect(() => {
        axios.get("http://localhost:8080/admin/student/all", { withCredentials: true })
            .then((res) => {
                // console.log('res', res.data.data);
                setStudentTable(res.data.data);
                setLoading(false);
                // console.log(res.data)
            }).catch((err) => {
                // console.log('err', err);
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
            <div className="col-md-4 col-sm-4 col-sx-4 col-4"><h3>Student table</h3></div>
            <div className="row my-3">
                <div className="d-flex justify-content-between">

                    <div className="filter col-md-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Search student</label>
                        <input type="text" className="form-control" id="exampleInputEmail1" placeholder='search for...' value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} aria-describedby="emailHelp" />
                        <div id="emailHelp" className="form-text">Enter the details like firstname, lastname, email, roll no, etc.</div>
                    </div>

                    <form className="col-md-5" onSubmit={handleSubmit}>
                        <div className="myFlex">
                            <div>
                                <label htmlFor="formFileSm" className="form-label">Upload Students</label>
                                <input className="form-control" id="formFileSm" type="file" onChange={handleFile} required />
                            </div>
                            <button type="submit" className="myBtn mx-1 btn btn-primary">Upload</button>
                        </div>
                    </form>
                </div>
            </div>
            <table className="table table-hover">
                <thead className="table-dark darkRow">
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Is placed?</th>
                        <th scope="col">Regular</th>
                        <th scope="col">Niche</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {/* {studentTable.map((student, key) => (
                        <tr key={key}>
                            <td>{student.firstName} {student.middleName} {student.lastName}</td>
                            <td>{(student.isGT20 || student.isLTE20) ? "Yes" : "No"}</td>
                            <td>{(student.isGT20) ? "Yes" : "No"}</td>
                            <td>{(student.isLTE20) ? "Yes" : "No"}</td>
                            <td><Link to={`/admin/student/profile/${student._id}`}>View</Link></td>
                        </tr>
                    ))} */}

                    {studentTable.filter(student => student.firstName.toLowerCase().includes(searchQuery.toLowerCase()) || student.aadharCard.toString().includes(searchQuery) || student.lastName.toLowerCase().includes(searchQuery.toLowerCase()) || student.email.includes(searchQuery) || student.phone.toString().includes(searchQuery) || student.pictRegistrationId.includes(searchQuery) || student.rollNumber.toString().includes(searchQuery)).map((student) => (
                        <tr key={student.pictRegistrationId}>
                            <td>{student.firstName} {student.middleName} {student.lastName}</td>
                            <td>{(student.GT20.status || student.LTE20.status) ? "Yes" : "No"}</td>
                            <td>{(student.LTE20.status) ? "Yes" : "No"}</td>
                            <td>{(student.GT20.status) ? "Yes" : "No"}</td>
                            <td onClick={(e) => {
                                e.preventDefault();
                                navigate("/admin/student/profile", { state: { studentId: student._id } });
                            }}><Link to='#'>View</Link></td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <div />
        </div>
    )
}

export default AdminStudentTable;