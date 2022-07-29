import React from 'react'
import "../../assets/css/admincompanytable.css"

const AdminCompanyTable = () => {
    return (
        <div id="adminCOmpanyTable">
            <div className="row my-3">
                <div className="d-flex justify-content-between">
                    <div className="col-md-6 col-sm-6 cl-sx-6 col-6"><h3>Company table</h3></div>
                    <div className="col-md-3" /> 
                    <button className="col-md-2 btn btn-primary col-sm-6 cl-sx-6 col-6">+ Add a Company</button>
                    <div className="col-md-1" /> 
                </div>
            </div>
            <table className="table table-hover">
                <thead className="table-dark darkRow">
                    <tr>
                        <th scope="col" className="text-center">Company name</th>
                        <th scope="col" className="text-center">Job</th>
                        <th scope="col" className="text-center">Round</th>
                        <th scope="col" className="text-center">Update</th>
                        <th scope="col" className="text-center">Schedule</th>
                        <th scope="col" className="text-center">Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Deutch Back</td>
                        <td>Software Development</td>
                        <td><span className="badge px-3 bg-success">Round - 5</span></td>
                        <td className="td">
                            <form>
                                <div className="myFlex">
                                    <input className="my-input mx-1 mx-1 mx-1 form-control form-control-sm" id="formFileSm" type="file" />
                                    <button type="submit" className="myBtn btn btn-primary">Update</button>
                                </div>
                            </form>
                        </td>
                        <td>25/11/2022</td>
                        <td><a href="#">View</a></td>
                    </tr>
                    <tr>
                        <td>Paytm</td>
                        <td>Software Engineering Development</td>
                        <td><span className="badge px-3 bg-danger">Round - 4</span></td>
                        <td className="td">
                            <form>
                                <div className="myFlex">
                                    <input className="my-input mx-1 mx-1 mx-1 form-control form-control-sm" id="formFileSm" type="file" />
                                    <button type="submit" className="myBtn btn btn-primary">Update</button>
                                </div>
                            </form>
                        </td>
                        <td>19/01/2022</td>
                        <td><a href="#">View</a></td>
                    </tr>
                    <tr>
                        <td>TCS</td>
                        <td>Software Testing</td>
                        <td><span className="badge px-3 bg-info">Upcoming</span></td>
                        <td className="td">
                            <form>
                                <div className="myFlex">
                                    <input className="my-input mx-1 mx-1 mx-1 form-control form-control-sm" id="formFileSm" type="file" />
                                    <button type="submit" className="myBtn btn btn-primary">Update</button>
                                </div>
                            </form>
                        </td>
                        <td>17/05/2022</td>
                        <td><a href="#">View</a></td>
                    </tr>
                </tbody>
            </table>
            </div>
    )
}

export default AdminCompanyTable