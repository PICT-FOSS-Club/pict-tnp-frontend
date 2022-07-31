import axios from 'axios';
import * as XLSX from 'xlsx'
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import "../../assets/css/admincompanytable.css";


const StudentFilter = () => {
    return (   
        <div id="adminCOmpanyTable">
            <div className="row my-3">
                <div className="d-flex justify-content-between">
                    <div className="col-md-4 col-sm-4 col-sx-4 col-4"><h3>Student table</h3></div>
                    {/* <form className="col-md-5" onSubmit={handleSubmit}>
                        <label htmlFor="formFileSm"><h5>Upload Students:</h5></label>
                        <div className="myFlex">
                            <input className="mx-1 my-input form-control form-control-sm" id="formFileSm" type="file" onChange={handleFile} required />
                            <button type="submit" className="myBtn btn btn-primary">Upload</button>
                        </div>
                    </form> */}
                </div>
            </div>
            <table className="table table-hover">
                <thead className="table-dark darkRow">
                    <tr>
                        <th scope="col">Roll No</th>
                        <th scope="col">Enroll Id</th>
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Mobile No</th>
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
                </tbody>
            </table>

            <div />
        </div>
     );
}
 
export default StudentFilter;