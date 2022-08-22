import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link, useParams, useNavigate, useLocation } from 'react-router-dom';
import "../../assets/css/studentprofile.css"

const AdminCompanyDetails = () => {
    const params = useParams();
    const [isLoading, setLoading] = useState(true);
    const [company, setCompany] = useState({});
    const navigate = useNavigate();
    const location = useLocation();
    const state = location.state;



        const handleNewRound = async (e) =>{
            e.preventDefault();

           await axios.post('http://localhost:8080/company/job/round/add', newRound, {withCredentials: true})
            .then((res)=>{
                console.log('After adding new round: ',res);
                alert("Added new round successfully!");
                window.location.reload();
            })
            .catch((err)=>{
                console.log("Err: ",err);
            })
        }
        
        const handleUpdateRound = async (e) =>{
            e.preventDefault();

            await axios.post('http://localhost:8080/company/job/round/update', updateRound, {withCredentials:true})
            .then((res)=>{
                console.log('After updating rounds: ', res);
                alert("Updating round details was successfull!");
                window.location.reload();
            })
            .catch((err)=>{
                console.log("err: ",err);
            })
        }

    useEffect(() => {
        console.log(state.jobId);
    axios.get(`http://localhost:8080/admin/company/job/details/${state.jobId}`, { withCredentials: true })
            .then((res) => {
                console.log('After get request:', res.data.data);
                setCompany(res.data.data);
                setLoading(false);
            })
            .catch((err) => {
                console.log('Error in get req:', err);
            })
    }, []);

    const [newRound, setNewRound] = useState({
        jobId: state.jobId,
        round:{
            roundNo: 4,
            activity: "",
            date: "",
            day: "",
            time: "",
            venue: ""
        }
    })

    const [updateRound, setupdateRound] = useState({
        jobId: state.jobId,
        round:{
            roundNo: 4,
            activity: "",
            date: "",
            day: "Monday",
            time: "",
            venue: ""
        }
    })

    
    const updateRoundState = (roundNo) =>{
        let roundArray = company.roundDetails[roundNo-1];
        // console.log(roundArray);
        setupdateRound({...updateRound,round:{...updateRound.round,roundNo:roundNo,activity:roundArray.activity,date:roundArray.date,time:roundArray.time,venue:roundArray.venue}});
    }

    if (isLoading) {
        return <div className="text-center">
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>;
    }

    const handleClick = async (e) => {
        e.preventDefault();
        navigate("/admin/student-round-table", { state: {jobId: company._id, companyName: company.name, roundNo:e.target.id, listType: e.target.value}});
    }

    return (
        <div className="container company bootstrap snippets bootdey">
            <div>
                <div className="profile-info">
                    <div className="panel">
                    </div>
                    <div className="panel">
                        <div className="bio-graph-heading">
                            <h1>{company.company[0].name}</h1>
                            <span>{company.name}</span>
                            <p>₹ {company.ctc} LPA</p>
                        </div>
                        <div className="panel-body bio-graph-info">
                            <h3>About company criteria</h3>
                            <div className="row">
                                {/* <div className='companyInfo'>
                                    PhonePe is an Indian digital payments and financial technology company headquartered in Bengaluru, Karnataka, India. PhonePe was founded in December 2015, by Sameer Nigam, Rahul Chari and Burzin Engineer. The PhonePe app, based on the Unified Payments Interface (UPI), went live in August 2016. It is owned by Flipkart, a subsidiary of Walmart.
                                </div> */}
                                {/* <div className='companyROInfo'>
                                    <b> Date Time:  </b>
                                    {company.startDate}
                                </div> */}
                                <div className='companyROInfo'>
                                    <b> Branch:    </b>
                                   <b>UG:</b> {company.criteria.ug.cs ? " CE" : ""} {company.criteria.ug.it ? " IT" : ""} {company.criteria.ug.entc ? " E&TC" : ""}

                                    

                                    ,<b> PG:</b> {company.criteria.pg.cs ? " CE" : ""} {company.criteria.pg.it ? " IT" : ""} {company.criteria.pg.entc ? " E&TC" : ""}
                                    {/* {company.criteria.branch.cs ? "CE" : ""} {company.criteria.branch.it ? ", IT" : ""} {company.criteria.branch.entc ? "and E&TC" : ""} ({company.criteria.courseName.ug ? "UG" : ""} {company.criteria.courseName.pg ? ", PG" : ""}) */}
                                </div>
                                <div className='companyROInfo'>
                                    <b>Minimum CGPA Criteria:  </b>
                                    {company.criteria.aggrCgpa}
                                </div>
                                <div className='companyROInfo'>
                                    <b>Email:  </b>
                                    {company.company[0].email}
                                </div>
                                <div className='companyROInfo'>
                                    <b>Website:  </b><a href={`http://${company.company[0].websiteUrl}`}><i className="bi bi-globe"></i></a>

                                </div>
                            </div>
                        </div>
                        <div className="panel-body bio-graph-info">
                            <div className="roundHead">
                                <h3>Round details</h3>
                                <button type="button" data-bs-toggle="modal" data-bs-target="#addCompanyForm" className="btn btn-outline-dark"><i className="bi bi-plus-circle"></i> Add round</button>
                            </div>

                            <div className="row">
                                {company.roundDetails.map((round, key)=> (
                                    <div className="alert my-2 roundDetails alert-secondary" title={'Date: '+round.date+' Time: '+round.time+' Venue: '+round.venue} role="alert" key={key}>
                                        <div>
                                            <h6> Round {round.roundNo} ({round.activity})</h6>
                                            <div className="options">
                                            <button id={key+1} type="button" className="btn btn-secondary" data-tooltip="Applied students" value="applied" onClick={handleClick}>Applied</button>
                                            <button id={key+1} type="button" className="btn btn-success" data-tooltip="Cleared students" value="qualified" onClick={handleClick}>Cleared</button>
                                            <button id={key+1} type="button" className="btn btn-warning" data-tooltip="Uncleared students" value="disqualified" onClick={handleClick}>Uncleared</button>
                                            <button id={key+1} type="button" className="btn btn-dark" data-bs-toggle="modal" data-bs-target="#UpdateCompanyForm" data-tooltip="Edit round" value="editround" onClick={()=>updateRoundState(round.roundNo)}><i class="bi bi-pencil-square"></i></button>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="panel-body  bio-graph-info">
                            <h3>Skills required</h3>
                            <div className="row companySkillBody">
                                <div>
                                    {company.skillsRequired.map((skill, key) => <div key={key}><i className="bi bi-arrow-right-circle"></i> {skill.skill}</div>)}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="modal fade" id="addCompanyForm" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-scrollable">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="staticBackdropLabel">Fill the round details</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form className="row g-3" onSubmit={handleNewRound}>
                                <div className="col-md-12">
                                    <label htmlFor="validationDefault01" className="form-label">Round title</label>
                                    <input type="text" className="form-control" name='activity' value={newRound.round.activity}
                                    onChange={(e)=>{
                                        e.preventDefault();
                                        setNewRound({...newRound,round:{...newRound.round,activity:e.target.value,roundNo: company.roundDetails.length+1}});
                                    }}
                                    id="validationDefault01" required />
                                </div>
                                <div className="col-md-6">
                                    <label htmlFor="validationDefault02" className="form-label">Round date</label>
                                    <input type="datetime-local" className="form-control" name='date' 
                                    // value={newRound.round.date}
                                    // onChange={(e)=>{
                                    //     e.preventDefault();
                                    //     setNewRound({...newRound,round:{...newRound.round,date:e.target.value}});
                                    // }}
                                    id="validationDefault02" required />
                                </div>
                                <div className="col-md-6">
                                    <label htmlFor="validationDefaultUsername" className="form-label">Round time</label>
                                    <input type="time" className="form-control" name='time' value={newRound.round.time}
                                    onChange={(e)=>{
                                        e.preventDefault();
                                        setNewRound({...newRound,round:{...newRound.round,time:e.target.value}});
                                    }}
                                    id="validationDefaultUsername" aria-describedby="inputGroupPrepend2" required />
                                </div>
                                <div className="col-md-12">
                                    <label htmlFor="validationDefault03" className="form-label">Round venue</label>
                                    <input type="text" className="form-control" name='venue' value={newRound.round.venue}
                                    onChange={(e)=>{
                                        e.preventDefault();
                                        setNewRound({...newRound,round:{...newRound.round,venue:e.target.value}});
                                    }}
                                    id="validationDefault03" required />
                                </div>
                                <div className="col-12">
                                    <button className="btn btn-primary" type="submit">Add round</button>
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="modal fade" id="UpdateCompanyForm" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-scrollable">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="staticBackdropLabel">Update the round details</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form className="row g-3" onSubmit={handleUpdateRound}>
                                <div className="col-md-12">
                                    <label htmlFor="validationDefault01" className="form-label">Round title</label>
                                    <input type="text" className="form-control" name='activity' value={updateRound.round.activity}
                                    onChange={(e)=>{
                                        e.preventDefault();
                                        setupdateRound({...updateRound,round:{...updateRound.round,activity:e.target.value}});
                                    }}
                                    id="validationDefault01" required />
                                </div>
                                <div className="col-md-6">
                                    <label htmlFor="validationDefault02" className="form-label">Round date</label>
                                    <input type="date" className="form-control" name='date' value={updateRound.round.date}
                                    onChange={(e)=>{
                                        e.preventDefault();
                                        setupdateRound({...updateRound,round:{...updateRound.round,date:e.target.value}});
                                    }}
                                    id="validationDefault02" required />
                                </div>
                                <div className="col-md-6">
                                    <label htmlFor="validationDefaultUsername" className="form-label">Round time</label>
                                    <input type="time" className="form-control" name='time' value={updateRound.round.time}
                                    onChange={(e)=>{
                                        e.preventDefault();
                                        setupdateRound({...updateRound,round:{...updateRound.round,time:e.target.value}});
                                    }}
                                    id="validationDefaultUsername" aria-describedby="inputGroupPrepend2" required />
                                </div>
                                <div className="col-md-12">
                                    <label htmlFor="validationDefault03" className="form-label">Round venue</label>
                                    <input type="text" className="form-control" name='venue' value={updateRound.round.venue}
                                    onChange={(e)=>{
                                        e.preventDefault();
                                        setupdateRound({...updateRound,round:{...updateRound.round,venue:e.target.value}});
                                    }}
                                    id="validationDefault03" required />
                                </div>
                                <div className="col-12">
                                    <button className="btn btn-primary" type="submit">Update round</button>
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
       
    );
}

export default AdminCompanyDetails;