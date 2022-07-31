import axios from 'axios';
import * as XLSX from 'xlsx'
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import "../../assets/css/admincompanytable.css";


const AdminStudentTable = () => {

    const [studentTable, setStudentTable] = useState([]);

    // on change states
    const [excelFile, setExcelFile] = useState(null);
    const [excelFileError, setExcelFileError] = useState(null);

    // handle File
    const fileType = ['application/vnd.ms-excel', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'];
    const handleFile = (e) => {
        let selectedFile = e.target.files[0];
        if (selectedFile) {
            console.log(selectedFile.type);
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
        }
        else {
            console.log('plz select your file');
        }
    }

    // submit function
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (excelFile !== null) {
            const workbook = XLSX.read(excelFile, { type: 'buffer' });
            const worksheetName = workbook.SheetNames[0];
            const worksheet = workbook.Sheets[worksheetName];
            const data = XLSX.utils.sheet_to_json(worksheet);
            console.log(data)
            const json = JSON.stringify(data);
            console.log(json)
            axios.post('http://localhost:8080/admin/register/students',data , {withCredentials: true})
            .then(function (res) {
                console.log(res);
            })
            .catch(function (error) {
                console.log(error);
            });
        }
    }

    useEffect(() => {
        axios.get("http://localhost:8080/admin/student/all", { withCredentials: true })
            .then((res) => {
                // console.log('res', res.data.data);
                setStudentTable(res.data.data);
                // console.log(res.data)
            }).catch((err) => {
                console.log('err', err);
            })
    }, [])

    return (
        <div id="adminCOmpanyTable">
            <div className="row my-3">
                <div className="d-flex justify-content-between">
                    <div className="col-md-4 col-sm-4 col-sx-4 col-4"><h3>Student table</h3></div>
                    <form className="col-md-5" onSubmit={handleSubmit}>
                        <label htmlFor="formFileSm"><h5>Upload Students:</h5></label>
                        <div className="myFlex">
                            <input className="mx-1 my-input form-control form-control-sm" id="formFileSm" type="file" onChange={handleFile} required />
                            <button type="submit" className="myBtn btn btn-primary">Upload</button>
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
                    {studentTable.map((student, key) => (
                        <tr key={key}>
                            <td>{student.firstName} {student.middleName} {student.lastName}</td>
                            <td>{(student.isGT20 || student.isLTE20) ? "Yes" : "No"}</td>
                            <td>{(student.isGT20) ? "Yes" : "No"}</td>
                            <td>{(student.isLTE20) ? "Yes" : "No"}</td>
                            <td><Link to={`/admin/student/profile/${student._id}`}>View</Link></td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <div />
        </div>
    )
}

export default AdminStudentTable;