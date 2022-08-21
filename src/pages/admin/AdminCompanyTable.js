import axios from 'axios';
import React, { useEffect, useState } from 'react'
import * as XLSX from 'xlsx'
import { Link, useNavigate } from "react-router-dom";
import "../../assets/css/admincompanytable.css"
import AddCompanyForm from './AddCompanyForm'

const AdminCompanyTable = () => {

    const [companyTable, setCompanyTable] = useState([]);
    const [isLoading, setLoading] = useState(true);
    const navigate = useNavigate();

    const [searchQuery, setSearchQuery] = useState("");

    // on change states
    // const[companyId, setCompanyId] = useState('');
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
                .then((res)=>{
                    alert("Compnay round updated")
                    // navigate("/")
                    window.location.reload();
                    console.log(res);
                })
                .catch(function (error) {
                    console.log(error);
                });
            }
        }

    useEffect(() => {
        axios.get("http://localhost:8080/admin/company/jobs", { withCredentials: true })
            .then((res) => {
                console.log(res.data.data);
                setCompanyTable(res.data.data);
                setLoading(false);
            }).catch((err) => {
                console.log('err', err);
                setLoading(false);
            })
    }, [])

    const handleClick = async (e) => {
        e.preventDefault();
        navigate("/admin/add-job", { state: {companyId: e.target.value}});
    }

    if (isLoading) {
        return <div className="text-center">
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>;
    }

    return (
        <div id="adminCOmpanyTable">
                    <div className="col-md-6 col-sm-6 cl-sx-6 col-6"><h3>Company records</h3></div>
            <div className="row my-3">
                <div className="d-flex justify-content-between">
                    <div className="filter col-md-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Search company</label>
                        <input type="text" className="form-control" id="exampleInputEmail1" placeholder='search for...' value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} aria-describedby="emailHelp" />
                        <div id="emailHelp" className="form-text">Enter the name of company</div>
                    </div>
                    <div className="col-md-3"> 
                    <Link to='/admin/add-company'><button className="btn btn-primary"><i className="bi bi-plus-circle"></i> Add a Company</button></Link>
                    </div>
                </div>
            </div>
            {/* <table className="table table-hover">
                <thead className="table-dark darkRow">
                    <tr>
                        <th scope="col">Company name</th>
                        <th scope="col">Job</th>
                        <th scope="col">Round</th>
                        <th scope="col" className='text-center'>Update</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {companyTable.filter(company => company.name.toLowerCase().includes(searchQuery.toLowerCase())).map((company => (
              
                        <tr key={company.name}>
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
                       
                        <td><Link to={`/admin/company/details/${company._id}`}>View</Link></td>
                    </tr>
                   )))}

                </tbody>
            </table> */}
            <div className="row" style={{width:"94%"}}>

                {companyTable.filter(company => company.name.toLowerCase().includes(searchQuery.toLowerCase())).map((company=>(
                            <div key={company.name} className="col-md-5 m-3">
                <div className="card">
                    <div className="card-header">
                        <h5>{company.name}</h5>
                    </div>
                    <div className="card-body">
                       <p className="card-text" style={{fontSize:"15px"}}><i><ol>
                        {company.jobDescriptions.length ? company.jobDescriptions.map((desc=>(
                            <li>{desc.name} : round - {desc.currentRound} <i className="bi bi-arrow-right"></i> <Link to="#" onClick={(e)=>{e.preventDefault(); navigate("/admin/company/details", {state: {jobId: desc._id}})}}>Link</Link></li>
                        ))) : "No job opening record available"}
                        </ol></i>
                        </p>
                        <hr />
                        <button className="btn btn-primary" onClick={(e)=>{e.preventDefault(); navigate("/admin/add-job", { state: {companyId: company._id, companyName: company.name}})}} value={company._id} style={{float:"right"}}>Add job opening</button>
                    </div>
                    </div>
                    </div>
                )))}
            </div>
            <AddCompanyForm />
            </div>
    )
}

export default AdminCompanyTable