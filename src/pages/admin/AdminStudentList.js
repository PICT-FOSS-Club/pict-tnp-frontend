import React from 'react';
import "../../assets/css/admincompanytable.css"


const AdminStudentTable = () => {
    return (
        <div id="adminCOmpanyTable">
            <div className="row my-3">
                <div className="d-flex justify-content-between">
                    <div className="col-md-6 col-sm-6 cl-sx-6 col-6"><h3>Student table</h3></div>
                    <form className="col-md-5">
                    <label htmlFor="formFileSm"><h5>Upload Students:</h5></label>
                        <div className="myFlex">
                            <input className="mx-1 my-input form-control form-control-sm" id="formFileSm" type="file" />
                            <button type="submit" className="myBtn btn btn-primary">Upload</button>
                        </div>
                    </form>
                </div>
            </div>
            <table className="table table-hover">
                <thead className="table-dark darkRow">
                    <tr>
                        <th scope="col">Name</th>
                        {/* <th scope="col" className="text-center">Company name</th> */}
                        {/* <th scope="col" className="text-center">20 LPA above</th>
                        <th scope="col" className="text-center">20 LPA below</th> */}
                        <th scope="col">Is placed?</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Abhinav Singh</td>
                        {/* <td>Amazon</td>
                        <td>Software Development - (44.62 LPA)</td>
                        <td><span className="badge rounded-pill px-3 bg-danger">Round - 4</span></td> */}
                        <td>Yes</td>
                        <td><a href="#">View</a></td>
                    </tr>
                    <tr>
                        <td>Pratik Jadhav</td>
                        {/* <td>Paytm</td>
                        <td>Software Engineering Development - (24.62 LPA)</td>
                        <td><span className="badge rounded-pill px-3 bg-warning">Round - 3</span></td> */}
                        <td>No</td>
                        <td><a href="#">View</a></td>
                    </tr>
                    <tr>
                        <td>Ankit Joshi</td>
                        {/* <td>TCS</td>
                        <td>Software Testing - (14.62 LPA)</td>
                        <td><span className="badge rounded-pill px-3 bg-success">Round - 5</span></td> */}
                        <td>Yes</td>
                        <td><a href="#">View</a></td>
                    </tr>
                </tbody>
            </table>

        <div/>
        </div>
    )
}

export default AdminStudentTable