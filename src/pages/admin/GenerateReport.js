import "../../assets/css/admincompanytable.css";
import axios from "axios";
import React, { useEffect, useState } from "react";
import ReportTable from "./Company/Report/ReportTable";


const GenerateReport = () => {
    const [searchQuery, setSearchQuery] = useState("");
    const [companyTable, setCompanyTable] = useState([]);
    const [isLoading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchJobs() {
            await axios
                .get("http://localhost:8080/admin/student/report/generate", {
                    withCredentials: true,
                })
                .then((res) => {
                    // console.log(res.data.data);
                    setCompanyTable(res.data.data);
                    setLoading(false);
                })
                .catch((err) => {
                    // console.log("err", err);
                    setLoading(false);
                });
        }
        fetchJobs();
    }, []);

    if (isLoading) {
        return (
            <div className="text-center">
                <div className="spinner-border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>
        );
    }


    return (
        <div id="adminCOmpanyTable">
            <div className="col-md-6 col-sm-6 cl-sx-6 col-6">
                <h3>Placement Report</h3>
            </div>
            {/* <div className="row my-3">
                <div className="d-flex justify-content-between">
                    <div className="filter col-md-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">
                            Search company
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            id="exampleInputEmail1"
                            placeholder="search for..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            aria-describedby="emailHelp"
                        />
                        <div id="emailHelp" className="form-text">
                            Enter the name of company
                        </div>
                    </div>
                </div>
            </div> */}

            {/* <table className="table table-striped table-hover">
                <thead className="table-dark">
                    <tr>
                        <th scope="col" className='text-center' colSpan="15">Sudent placement report (Company wise)</th>
                    </tr>
                    <tr>
                        <th scope="col" className='text-center'>Sr No</th>
                        <th scope="col" className='text-center'>Company</th>
                        <th scope="col" className='text-center'>
                            Criteria
                            <table className="table table-hover">
                                <thead className="table-dark">

                                    <th scope="col" className='text-center'>CGPA</th>
                                    <th scope="col" className='text-center'>Branches</th>

                                </thead>
                            </table>
                        </th>
                        <th scope="col" className='text-center'>
                            UG
                            <table className="table table-hover">
                                <thead className="table-dark">
                                    <th scope="col" className='text-center'>CE</th>
                                    <th scope="col" className='text-center'>E&TC</th>
                                    <th scope="col" className='text-center'>IT</th>
                                </thead>
                            </table>
                        </th>
                        <th scope="col" className='text-center'>
                            PG
                            <table className="table table-hover">
                                <thead className="table-dark">
                                    <th scope="col" className='text-center'>CE</th>
                                    <th scope="col" className='text-center'>E&TC</th>
                                    <th scope="col" className='text-center'>IT</th>
                                </thead>
                            </table>
                        </th>
                        <th scope="col" className='text-center'>
                            Total
                            <table className="table table-hover">
                                <thead className="table-dark">
                                    <th scope="col" className='text-center'>M</th>
                                    <th scope="col" className='text-center'>F</th>
                                    <th scope="col" className='text-center'>T</th>
                                </thead>
                            </table>
                        </th>
                        <th scope="col" className='text-center'>Sal. LPA</th>
                        <th scope="col" className='text-center'>Visited Date</th>
                    </tr>
                </thead>
                <tbody>
                    {companyTable.filter(company => company.name.toLowerCase().includes(searchQuery.toLowerCase())).map((company, key) => (

                        <tr key={key}>
                            <td>{key + 1}</td>
                            <td>{company.name}</td>
                            <td>
                                <tbody>
                                    <td>{company.cgpa}</td>
                                </tbody>
                            </td>
                        </tr>
                    ))}

                </tbody>
            </table> */}
            <ReportTable reportData={companyTable} />
        </div>
    );
}

export default GenerateReport;