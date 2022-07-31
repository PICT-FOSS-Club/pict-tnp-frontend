import axios from 'axios';
import React, { useEffect, useState } from 'react'
import * as XLSX from 'xlsx'
import { Link, useNavigate } from "react-router-dom";
import "../../assets/css/admincompanytable.css"
import AddCompanyForm from './AddCompanyForm'

const AdminCompanyTable = () => {

    const [companyTable, setCompanyTable] = useState([]);

    const navigate = useNavigate();

    // on change states
    const[companyId, setCompanyId] = useState('');
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
                console.log(e.target.value);
                // setCompanyId(e.target.value);
                console.log(json)
                const result = { companyId: e.target.value, qualifiedStudents: data };
                console.log(result);
                axios.post('http://localhost:8080/company/round/result',result , {withCredentials: true})
                .then(function (res) {
                    navigate("#")
                    console.log(res);
                })
                .catch(function (error) {
                    console.log(error);
                });
            }
        }

    useEffect(() => {
        axios.get("http://localhost:8080/admin/company/all", { withCredentials: true })
            .then((res) => {
                setCompanyTable(res.data.data);
            }).catch((err) => {
                console.log('err', err);
            })
    }, [])


    return (
        <div id="adminCOmpanyTable">
            <div className="row my-3">
                <div className="d-flex justify-content-between">
                    <div className="col-md-6 col-sm-6 cl-sx-6 col-6"><h3>Company table</h3></div>
                    <div className="col-md-3" /> 
                    <button className="col-md-2 btn btn-primary col-sm-6 cl-sx-6 col-6" data-bs-toggle="modal" data-bs-target="#AddCompanyForm"><i className="bi bi-plus-circle"></i> Add a Company</button>
                    <div className="col-md-1" /> 
                </div>
            </div>
            <table className="table table-hover">
                <thead className="table-dark darkRow">
                    <tr>
                        <th scope="col">Company name</th>
                        <th scope="col">Job</th>
                        <th scope="col">Round</th>
                        <th scope="col" className='text-center'>Update</th>
                        <th scope="col">Schedule</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {/* <tr>
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
                    </tr> */}
                    {companyTable.map((company, key) => (
                        <tr key={key}>
                            <td>{company.name}</td>
                            <td>{company.profile}</td>
                            <td><span className={`badge px-3 ${company.currentRound === company.totalRounds ? "bg-danger" : !company.currentRound ? "bg-primary" : "bg-success" } `}>{ (company.currentRound === company.totalRounds) ? "Complete" : (!company.currentRound) ? "Upcoming" : `Round - ${company.currentRound}` }</span></td>
                            <td className="td">
                                <form>
                                    <div className="myFlex">
                                        <input className="my-input mx-1 mx-1 mx-1 form-control form-control-sm" type="file" onChange={handleFile}/>
                                        <button type="submit" className="myBtn btn btn-primary" onClick={handleSubmit} value={company._id}>Update</button>
                                    </div>
                                </form>
                            </td>
                            <td>{company.currentRound >= company.totalRounds ? "Completed" : !company.currentRound ? company.driveDetails[0].date : company.driveDetails[company.currentRound + 1].date }</td>
                            <td><Link to={`/admin/company/details/${company._id}`}>View</Link></td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <AddCompanyForm />
            </div>
    )
}

export default AdminCompanyTable