import { useState } from "react";
import "../../../assets/css/admincompanytable.css";
import "../../../assets/css/studentprofile.css"
import { Link, useLocation } from 'react-router-dom';
import axios from "axios";

const AddJobOpen = () => {

    const location = useLocation();
    const state = location.state;
    console.log(state.companyId);
    const [company, setCompany] = useState({
        companyId: state.companyId,
        ctc: "",
        name: "",
        totalRounds: "3",
        currentRound: 0,
        // startDate: "",
        endDate: "27-08-2022",
        criteria: {
          ug: {
            cs: false,
            it: false,
            entc: false,
          },
          pg: {
            cs: false,
            it: false,
            entc: false,
          },
          gender: { male: false, female: false, both: false },
          cgpa: "",
          sscPercentage: "",
          hscPercentage: "",
          courseName: {
            ug: false,
            pg: false,
          },
        },
        skillsRequired: [],
        roundDetails: [],
      });


        // Making a state specifically for branches:
  const [ug, setug] = useState({
    cs: false,
    it: false,
    entc: false,
  });

  const [pg, setpg] = useState({
    cs: false,
    it: false,
    entc: false,
  });

  // Making a state specifically for gender:
  const [gender, setGender] = useState({
    male: false,
    female: false,
    both: false,
  });

  // Making a state for Graduation:
  const [grad, setGrad] = useState({
    ug: false,
    pg: false,
  });

  const[addcriteria, setAddcriteria] = useState({
    amcat: false,
    backlog: false,
    yeargap: false,
    attendance: false
  })

      const [JDinputList, setJDInputList] = useState([{ jobDes: "", ctc:""}]);
      const [skills, setSkill] = useState([{ skill: ""}]);
      const [drive, setDrive] = useState([{ roundNo: "",
      activity: "",
      venue: "",
      date: "",
      time: ""}]);
 
  // handle input change
  const handleInputChange = (e, index) => {
    const { name, value } = e.target;
    const list = [...JDinputList];
    list[index][name] = value;
    setJDInputList(list);
  };
 
  // handle click event of the Remove button
  const handleRemoveClick = index => {
    const list = [...JDinputList];
    list.splice(index, 1);
    setJDInputList(list);
  };
 
  // handle click event of the Add button
  const handleAddClick = () => {
    setJDInputList([...JDinputList, { jobDes: "",ctc:"" }]);
    console.log(JDinputList);
  };

    // handle input change
    const handleSkillInputChange = (e, index) => {
        const { name, value } = e.target;
        const list = [...skills];
        list[index][name] = value;
        setSkill(list);
        setCompany({...company,skillsRequired:list});
      };
     
      // handle click event of the Remove button
      const handleSkillRemoveClick = index => {
        const list = [...skills];
        list.splice(index, 1);
        setSkill(list);
        setCompany({...company,skillsRequired:list});
      };
     
      // handle click event of the Add button
      const handleSkillAddClick = () => {
        setSkill([...skills, { skill:"" }]);
        // console.log(skills);
      };

    // handle input change
    const handleRoundInputChange = (e, index) => {
        const { name, value } = e.target;
        const list = [...drive];
        list[index][name] = value;
        setDrive(list);
        var lislen = list.length;
        setCompany({...company,roundDetails:list,totalRounds:lislen,endDate:list[lislen-1].date});
      };
     
      // handle click event of the Remove button
      const handleRoundRemoveClick = index => {
        const list = [...drive];
        list.splice(index, 1);
        setDrive(list);
        var lislen = list.length;
        setCompany({...company,roundDetails:list,totalRounds:lislen,endDate:list[lislen-1].date});
      };
     
      // handle click event of the Add button
      const handleRoundAddClick = () => {
        setDrive([...drive, { roundNo: "",
        activity: "",
        venue: "",
        date: "",
        time: "" }]);
        // console.log(drive);
      };

      const handleSubmit = async(e) =>{
        e.preventDefault();

        await axios.post('http://localhost:8080/company/job/add', company, {withCredentials: true})
        .then((res)=>{
          console.log("Res: ",res);
          alert("New job opening added successfully!");
          window.location.reload();
        })
        .catch((err)=>{
          console.log("err: ",err);
        })
      }
    return ( 
        <div id="adminCOmpanyTable">
             <div className="col-md-6 col-sm-6 cl-sx-6 col-6"><h3>{state.companyName} - Add new job opening</h3></div>
             <form onSubmit={handleSubmit}>
              <p style={{ fontSize: "15px" }}>
                <span style={{ color: "red" }}>*</span> All fields are mandatory
              </p>
              <hr />
              {/* <form className="row g-3 needs-validation" onSubmit={handleSubmit}> */}
              <h5>About profile</h5>
             <div className="row" id="companyFormadd">
                 {/* Profile */}
                 <div className="col-md-10">
                  <label
                    htmlFor="validationCustomUsername"
                    className="form-label"
                  >
                    Profile/Job description details
                    <span style={{ color: "red" }}>*</span>
                  </label>
                  <div id="inputjd">
                  <div className="input-group row has-validation">
           <div className="col-md-12">
            <div className="row">
                <div className="col-md-6">
                    <input className="form-control"
                    name="name"
                    value={company.name}
                    onChange={(e)=>{setCompany({...company,name: e.target.value})}}
                    placeholder="Job description"
                    />
                </div>
                <div className="col-md-4">
                    <input className="form-control"
                    name="ctc"
                    value={company.ctc}
                    onChange={(e)=>{setCompany({...company,ctc: e.target.value})}}
                    placeholder="CTC in LPA"
                    />
                </div>
            </div>
            </div>
                  </div>
                </div>
             </div>

                <div className="col-md-10">
                  <label htmlFor="branch" className="form-label">
                    Upload pdf of company details<span style={{ color: "red" }}>*</span>
                  </label>
                  <div className="row" style={{alignItems: "center"}}>
                    <div className="col-md-6">
                    <input className="form-control" type="file" id="formFile" />
                  </div>
                  <div className="col-md-4">
                  <button type="button" className="btn btn-primary">Upload</button>
                  </div>
                  </div>
                </div>

                {/* Branch */}
                <h5 style={{ paddingTop: "30px" }}>About criteria</h5>

                <div className="col-md-4">
                  <label htmlFor="branch" className="form-label">
                   UG Branch<span style={{ color: "red" }}>*</span>
                  </label>
                  {/* Comp */}
                  <div>
                  <div className="form-check form-switch">
                    <input
                      checked={ug.cs}
                      onChange={() => {
                        setug({ ...ug, cs: !ug.cs }); //setting the branch

                        //setting the company
                        setCompany({
                          ...company,
                          criteria: {
                            ...company.criteria,
                            ug: {
                              ...ug,
                              cs: !ug.cs,
                            },
                          },
                        });
                      }}
                      type="checkbox"
                      className="form-check-input"
                      role="switch"
                      value="Computer Engineering"
                      name="comp"
                      id="comp"
                    />{" "}
                    <label htmlFor="comp"> Computer Engineering</label>
                    </div>
                    {/* It */}
                    <div className="form-check form-switch">
                    <input
                      checked={ug.it}
                      onChange={() => {
                        setug({ ...ug, it: !ug.it }); //setting the branch

                        //setting the company
                        setCompany({
                          ...company,
                          criteria: {
                            ...company.criteria,
                            ug: {
                              ...ug,
                              it: !ug.it,
                            },
                          },
                        });
                      }}
                      type="checkbox"
                      value="IT"
                      role="switch"
                      className="form-check-input"
                      name="IT"
                      id="IT"
                    />{" "}
                    <label htmlFor="IT"> Infomation Technology</label>
                    </div>
                    {/* Entc */}
                    <div className="form-check form-switch">
                    <input
                      checked={ug.entc}
                      onChange={() => {
                        setug({ ...ug, entc: !ug.entc }); //setting the branch

                        //setting the company
                        setCompany({
                          ...company,
                          criteria: {
                            ...company.criteria,
                            ug: {
                              ...ug,
                              entc: !ug.entc,
                            },
                          },
                        });
                      }}
                      type="checkbox"
                      value="E&TC"
                      name="etc"
                      role="switch"
                      className="form-check-input"
                      id="etc"
                    />{" "}
                    <label htmlFor="etc"> E&TC</label> 
                    </div>
                  </div>
                </div>

                <div className="col-md-3">
                  <label htmlFor="g" className="form-label">
                    PG Branch<span style={{ color: "red" }}>*</span>
                  </label>
                  <div>
                  <div className="form-check form-switch">
                    <input
                      checked={pg.cs}
                      onChange={() => {
                        setpg({ ...pg, cs: !pg.cs }); //setting the branch

                        //setting the company
                        setCompany({
                          ...company,
                          criteria: {
                            ...company.criteria,
                            pg: {
                              ...pg,
                              cs: !pg.cs,
                            },
                          },
                        });
                      }}
                      type="checkbox"
                      className="form-check-input"
                      role="switch"
                      value="Computer Engineering"
                      name="comp"
                      id="pgcomp"
                    />{" "}
                    <label htmlFor="pgcomp"> Computer Engineering</label>
                    </div>
                    {/* It */}
                    <div className="form-check form-switch">
                    <input
                      checked={pg.it}
                      onChange={() => {
                        setpg({ ...pg, it: !pg.it }); //setting the branch

                        //setting the company
                        setCompany({
                          ...company,
                          criteria: {
                            ...company.criteria,
                            pg: {
                              ...pg,
                              it: !pg.it,
                            },
                          },
                        });
                      }}
                      type="checkbox"
                      value="IT"
                      role="switch"
                      className="form-check-input"
                      name="IT"
                      id="pgIT"
                    />{" "}
                    <label htmlFor="pgIT"> Infomation Technology</label>
                    </div>
                    {/* Entc */}
                    <div className="form-check form-switch">
                    <input
                      checked={pg.entc}
                      onChange={() => {
                        setpg({ ...pg, entc: !pg.entc }); //setting the branch

                        //setting the company
                        setCompany({
                          ...company,
                          criteria: {
                            ...company.criteria,
                            pg: {
                              ...pg,
                              entc: !pg.entc,
                            },
                          },
                        });
                      }}
                      type="checkbox"
                      value="E&TC"
                      name="etc"
                      role="switch"
                      className="form-check-input"
                      id="pgetc"
                    />{" "}
                    <label htmlFor="pgetc"> E&TC</label> 
                    </div>
                  </div>
                </div>

                <div className="col-md-3">
                  <label className="form-label">
                    Gender<span style={{ color: "red" }}>*</span>
                  </label>
                  <br />
                  <div className="form-check form-check">
                    <input
                      checked={gender.male}
                      onChange={(e) => {
                        setGender({
                          male: !gender.male,
                          female: false,
                          both: false,
                        });

                        //setting the company
                        setCompany({
                          ...company,
                          criteria: {
                            ...company.criteria,
                            gender: {
                              male: !gender.male,
                              female: false,
                              both: false,
                            },
                          },
                        });
                      }}
                      className="form-check-input"
                      type="radio"
                      name="genderOption1"
                      id="genderOption1"
                      value={gender.male}
                    />
                    <label className="form-check-label" htmlFor="genderOption1">
                      Male
                    </label>
                  </div>
                  <div className="form-check form-check">
                    <input
                      checked={gender.female}
                      onChange={(e) => {
                        setGender({
                          male: false,
                          female: !gender.female,
                          both: false,
                        });

                        //setting the company
                        setCompany({
                          ...company,
                          criteria: {
                            ...company.criteria,
                            gender: {
                              male: false,
                              female: !gender.female,
                              both: false,
                            },
                          },
                        });
                      }}
                      className="form-check-input"
                      type="radio"
                      name="genderOption2"
                      id="genderOption2"
                      value={gender.female}
                    />
                    <label className="form-check-label" htmlFor="genderOption2">
                      Female
                    </label>
                  </div>
                  <div className="form-check form-check">
                    <input
                      checked={gender.both}
                      onChange={(e) => {
                        setGender({
                          male: false,
                          female: false,
                          both: !gender.both,
                        });

                        //setting the company
                        setCompany({
                          ...company,
                          criteria: {
                            ...company.criteria,
                            gender: {
                              male: false,
                              female: false,
                              both: !gender.both,
                            },
                          },
                        });
                      }}
                      className="form-check-input"
                      type="radio"
                      name="genderOption3"
                      id="genderOption3"
                      value={gender.both}
                    />
                    <label className="form-check-label" htmlFor="genderOption3">
                      Both
                    </label>
                  </div>
                </div>

                {/* Hsc and Ssc Percentage */}
                <div className="col-md-3">
                  <label htmlFor="10per" className="form-label">
                    10th percentage<span style={{ color: "red" }}>*</span>
                  </label>
                  <div className="input-group has-validation">
                    <input
                      value={company.sscPercentage}
                      onChange={(e) =>
                        setCompany({
                          ...company,
                          criteria: {
                            ...company.criteria,
                            sscPercentage: e.target.value,
                          },
                        })
                      }
                      type="text"
                      className="form-control"
                      placeholder="10th percentage"
                      id="10per"
                      aria-describedby="inputGroupPrepend"
                      required
                    />
                  </div>
                </div>
                <div className="col-md-3">
                  <label htmlFor="12per" className="form-label">
                    12th/Diploma percentage
                    <span style={{ color: "red" }}>*</span>
                  </label>
                  <div className="input-group has-validation">
                    <input
                      value={company.hscPercentage}
                      onChange={(e) =>
                        setCompany({
                          ...company,
                          criteria: {
                            ...company.criteria,
                            hscPercentage: e.target.value,
                          },
                        })
                      }
                      type="text"
                      className="form-control"
                      placeholder="12th percentage"
                      id="12per"
                      aria-describedby="inputGroupPrepend"
                      required
                    />
                  </div>
                </div>

                <div className="col-md-4">
                  <label htmlFor="cgpa" className="form-label">
                   Engineering Cgpa<span style={{ color: "red" }}>*</span>
                  </label>
                  <div className="input-group has-validation">
                    <input
                      value={company.criteria.cgpa}
                      onChange={(e) =>
                        setCompany({
                          ...company,
                          criteria: {
                            ...company.criteria,
                            cgpa: e.target.value,
                          },
                        })
                      }
                      type="text"
                      className="form-control"
                      id="cgpa"
                      placeholder="Engineering cgpa"
                      aria-describedby="inputGroupPrepend"
                      required
                    />
                  </div>
                </div>

                {/* add new criteria */}
                <h5 style={{ paddingTop: "30px" }}>Create new criteria 
                <span className="dropdown mx-2">
              <button
                className="btn btn-secondary dropdown-toggle"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Add 
              </button>
              <ul className="dropdown-menu">
              <li>
                  <a className="dropdown-item">
                    <div className="form-check form-switch">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        checked={addcriteria.attendance}
                        onChange={()=>{
                          setAddcriteria({...addcriteria,attendance:!addcriteria.attendance});
                          var attendinput = document.getElementById("attendinput");
                          
                          if(!addcriteria.attendance){
                            attendinput.style.display = "block";
                          }else{
                            attendinput.style.display = "none";
                          }
                        }}
                        role="switch"
                        id="flexSwitchCheckDefault40"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="flexSwitchCheckDefault40"
                      >
                        Attendance
                      </label>
                    </div>
                  </a>
                </li>
                <li>
                  <a className="dropdown-item">
                    <div className="form-check form-switch">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        checked={addcriteria.amcat}
                        onChange={()=>{
                          setAddcriteria({...addcriteria,amcat:!addcriteria.amcat});
                          var amcatinput = document.getElementById("amcatinput");
                          
                          if(!addcriteria.amcat){
                            amcatinput.style.display = "block";
                          }else{
                            amcatinput.style.display = "none";
                          }
                        }}
                        role="switch"
                        id="flexSwitchCheckDefault40"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="flexSwitchCheckDefault40"
                      >
                        AMCAT Result
                      </label>
                    </div>
                  </a>
                </li>
                <li>
                  <a className="dropdown-item">
                    <div className="form-check form-switch">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        checked={addcriteria.backlog}
                        onChange={()=>{
                        setAddcriteria({...addcriteria,backlog: !addcriteria.backlog});
                        var loginput = document.getElementById("loginput");
                          
                          if(!addcriteria.backlog){
                            loginput.style.display = "block";
                          }else{
                            loginput.style.display = "none";
                          }
                      }}
                        role="switch"
                        id="flexSwitchCheckDefault50"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="flexSwitchCheckDefault50"
                      >
                        Active and passive backlog
                      </label>
                    </div>
                  </a>
                </li>
                {/* <li>
                  <a className="dropdown-item">
                    <div className="form-check form-switch">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        checked={addcriteria.yeargap}
                        onChange={()=>{
                          setAddcriteria({...addcriteria,yeargap: !addcriteria.yeargap});
                          var gapinput = document.getElementById("gapinput");
                          
                          if(!addcriteria.yeargap){
                            gapinput.style.display = "block";
                          }else{
                            gapinput.style.display = "none";
                          }
                        }
                        }
                        role="switch"
                        id="flexSwitchCheckDefault501"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="flexSwitchCheckDefault501"
                      >
                        Year gap
                      </label>
                    </div>
                  </a>
                </li> */}
              </ul>
                  </span> 
                </h5>
                
                <div id="attendinput" style={{display:"none"}} className="col-md-4">
                <div className="col-md-12">
                  <label htmlFor="attend" className="form-label">
                    Attendance percentage
                    <span style={{ color: "red" }}>*</span>
                  </label>
                  <div className="input-group has-validation">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Attendance percentage"
                      id="attend"
                      aria-describedby="inputGroupPrepend"
                      
                    />
                  </div>
                </div>
                 </div>


                 <div id="loginput" style={{display:"none"}}  className="col-md-6">
                  <div className="row">
                <div className="col-md-5">
                  <label htmlFor="alog" className="form-label">
                    Active backlog
                    <span style={{ color: "red" }}>*</span>
                  </label>
                  <div className="input-group has-validation">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Active backlog"
                      id="alog"
                      aria-describedby="inputGroupPrepend"
                      
                    />
                  </div>
                </div>

                <div className="col-md-5">
                  <label htmlFor="plog" className="form-label">
                    Passive backlog
                    <span style={{ color: "red" }}>*</span>
                  </label>
                  <div className="input-group has-validation">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Passive backlog"
                      id="plog"
                      aria-describedby="inputGroupPrepend"
                      
                    />
                  </div>
                </div>
                </div>
                </div>

                <div id="amcatinput" style={{display:"none"}} className="col-md-4">
                <div className="col-md-12">
                  <label htmlFor="amcat" className="form-label">
                    AMCAT percentage
                    <span style={{ color: "red" }}>*</span>
                  </label>
                  <div className="input-group has-validation">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="AMCAT percentage"
                      id="amcat"
                      aria-describedby="inputGroupPrepend"
                      
                    />
                  </div>
                </div>
                 </div>


                {/* <div id="gapinput" style={{display:"none"}} className="col-md-4">
                <div className="col-md-10">
                  <label htmlFor="amcat" className="form-label">
                    Year gap <i>(Kindly check the option where year gap is not allowed)</i>
                    <span style={{ color: "red" }}>*</span>
                  </label>
                  <div>
                  <div className="form-check form-switch">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        
                        role="switch"
                        id="flexSwitchCheckDefault402"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="flexSwitchCheckDefault402"
                      >
                        After 10th
                      </label>
                    </div>
                    <div className="form-check form-switch">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        
                        role="switch"
                        id="flexSwitchCheckDefault403"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="flexSwitchCheckDefault403"
                      >
                        After 12th
                      </label>
                    </div>
                    <div className="form-check form-switch">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        
                        role="switch"
                        id="flexSwitchCheckDefault404"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="flexSwitchCheckDefault404"
                      >
                        During engineering
                      </label>
                    </div>
                  </div>
                </div>
                </div> */}

                

                 {/* Number of Rounds */}
                 <h5 style={{ paddingTop: "30px" }}>About rounds</h5>

                 <div className="col-md-10">
                  <label
                    htmlFor="validationCustomUsername"
                    className="form-label"
                  >
                    Round details
                    <span style={{ color: "red" }}>*</span>
                  </label>
                  <div id="inputjd">
                  <div className="input-group row has-validation">
                  {drive.map((x, i) => {
        return (
            <div key={i}>
           <div className="col-md-12">
            <div className="row">
                <div className="col-md-3">
                    <input className="form-control"
                    name="activity"
                    value={x.activity}
                    placeholder="Round activity"
                    onChange={e => handleRoundInputChange(e, i)}
                    />
                </div>
                <div className="col-md-3">
                    <input className="form-control"
                    name="venue"
                    value={x.venue}
                    placeholder="Round venue"
                    onChange={e => handleRoundInputChange(e, i)}
                    />
                </div>
                <div className="col-md-2">
                    <input className="form-control"
                    type="date"
                    name="date"
                    value={x.date}
                    placeholder="Round date"
                    onChange={e => handleRoundInputChange(e, i)}
                    />
                </div>
                <div className="col-md-2">
                    <input className="form-control"
                    type="time"
                    name="time"
                    value={x.time}
                    placeholder="Round time"
                    onChange={e => handleRoundInputChange(e, i)}
                    />
                </div>
            </div>
            </div>
            <div className="btn-box my-1 col-md-4">
              {drive.length !== 1 && <button
                onClick={() => handleRoundRemoveClick(i)} className="btn btn-danger my-2 mx-1">Remove</button>}
              {drive.length - 1 === i && <button onClick={handleRoundAddClick} className="btn btn-primary my-2 mx-1">Add</button>}
            </div>
        </div>
        );
      })}
            
                  </div>
                </div>
             </div>

             {/* Skills Required */}
             <h5 style={{ paddingTop: "30px" }}>About skills</h5>

             <div className="col-md-10">
                  <label
                    htmlFor="validationCustomUsername"
                    className="form-label"
                  >
                    Skills details
                    <span style={{ color: "red" }}>*</span>
                  </label>
                  <div id="inputjd">
                  <div className="input-group row has-validation">
                  {skills.map((x, i) => {
        return (
            <div key={i}>
           <div className="col-md-12">
            <div className="row">
                <div className="col-md-6">
                    <input className="form-control"
                    name="skill"
                    value={x.skill}
                    placeholder="Skills required"
                    onChange={e => handleSkillInputChange(e, i)}
                    />
                </div>
            </div>
            </div>
            <div className="btn-box my-1 col-md-4">
              {skills.length !== 1 && <button
                onClick={() => handleSkillRemoveClick(i)} className="btn btn-danger my-2 mx-1">Remove</button>}
              {skills.length - 1 === i && <button onClick={handleSkillAddClick} className="btn btn-primary my-2 mx-1">Add</button>}
            </div>
        </div>
        );
      })}
            
                  </div>
                </div>
             </div>
             <div className="form-check mx-3 my-2">
                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" required />
                <label className="form-check-label" htmlFor="flexCheckDefault">
                  Are you sure to add the new job opening?
                </label>
             </div>
             <hr className="my-2" />
             <div className="col-md-12 mx-3 my-2">
                  <button className="btn btn-primary" type="submit">
                    Add company
                  </button>
            </div>

        </div>
        </form>
        </div>
     );
}
 
export default AddJobOpen;