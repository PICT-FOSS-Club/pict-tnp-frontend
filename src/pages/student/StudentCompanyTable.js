import React from 'react';
// import {Link } from 'react-router-dom';
import "../../assets/css/admincompanytable.css"

const StudentCompanyTable = () => {
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
                        {/* <th scope="col" className="text-center">Update</th> */}
                        <th scope="col" >Schedule</th>
                        <th scope="col" >Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Deutch Back</td>
                        <td>Software Development</td>
                        <td><span className="badge rounded-pill px-3 bg-danger">Round - 4</span></td>
                        {/* <td className="td">
                            <form>
                                <div className="myFlex">
                                    <input className="my-input mx-1 form-control form-control-sm" id="formFileSm" type="file" />
                                    <button type="submit" className="myBtn btn btn-primary">Upload</button>
                                </div>
                            </form>
                        </td> */}
                        <td>35/11/2995</td>
                        <td><a href="/">View</a></td>
                    </tr>
                    <tr>
                        <td>Paytm</td>
                        <td>Software Engineering Development</td>
                        <td><span className="badge rounded-pill px-3 bg-warning">Round - 3</span></td>
                        {/* <td className="td">
                            <form>
                                <div className="myFlex">
                                    <input className="my-input mx-1 form-control form-control-sm" id="formFileSm" type="file" />
                                    <button type="submit" className="myBtn btn btn-primary">Upload</button>
                                </div>
                            </form>
                        </td> */}
                        <td>19/01/2022</td>
                        <td><a href="#">View</a></td>
                    </tr>
                    <tr>
                        <td>TCS</td>
                        <td>Software Testing</td>
                        <td><span className="badge rounded-pill px-3 bg-success">Round - 5</span></td>
                        {/* <td className="td">
                            <form>
                                <div className="myFlex">
                                    <input className="my-input mx-1 form-control form-control-sm" id="formFileSm" type="file" />
                                    <button type="submit" className="myBtn btn btn-primary">Upload</button>
                                </div>
                            </form>
                        </td> */}
                        <td>17/05/2002</td>
                        <td><a href="#">View</a></td>
                    </tr>
                </tbody>
            </table>

        <div/>
    </div>
  )
}

export default StudentCompanyTable   