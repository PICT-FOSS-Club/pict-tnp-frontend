import React, { useState } from "react";
import axios from "axios";

const AddCompanyForm = () => {
  const [company, setCompany] = useState({
    name: "",
    ctc: "",
    profile: "",
    websiteUrl: "",
    email: "",
    companyLocation: "",
    totalRounds: "",
    currentRound: "",
    startDate: "",
    endDate: "",
    criteria: {
      branch: {
        cs: false,
        it: false,
        entc: false,
      },
      cgpa: "",
      sscPercentage: "",
      hscPercentage: "",
      courseName: {
        ug: false,
        pg: false,
      },
    },
    skillsRequired: [],
    driveDetails: [],
  });

  // Making a state specifically for branches:
  const [branch, setBranch] = useState({
    cs: false,
    it: false,
    entc: false,
  });

  // Making a state for Graduation:
  const [grad, setGrad] = useState({
    ug: false,
    pg: false,
  });

  //Making a state for Drive Details:
  const [drive, setDrive] = useState({
    roundNo: "",
    activity: "",
    venue: "",
    date: "",
    time: "",
  });

  const [confirm, setConfirm] = [false];

  const numOfSkill = (snum) => {
    for (let i = 1; i <= snum; i++) {
      var Sid = "skill" + i;
      document.getElementById(Sid).style.display = "block";
    }
    for (let i1 = snum + 1; i1 <= 10; i1++) {
      var Sid1 = "skill" + i1;
      document.getElementById(Sid1).style.display = "none";
    }
  };

  const numOfRoundField = (rnum) => {
    for (let i = 1; i <= rnum; i++) {
      var Did = "roundId" + i;
      document.getElementById(Did).style.display = "block";
    }
    for (let i1 = rnum + 1; i1 <= 5; i1++) {
      var Did1 = "roundId" + i1;
      document.getElementById(Did1).style.display = "none";
    }
  };

  const handleClick = async (e) => {
    const roundsArr = [];
    let obj = { roundNo: "", activity: "", venue: "", date: "", time: "" };
    //Adding the rounds details:
    for (let i = 1; i <= 5; i++) {
      let activity = document.getElementById("activity" + i);
      // console.log('activity', activity)
      let venue = document.getElementById("venue" + i);
      let date = document.getElementById("date" + i);
      let time = document.getElementById("time" + i);

      if (activity.value === "") {
        break;
      }

      obj = {
        roundNo: i,
        activity: activity.value,
        venue: venue.value,
        date: date.value,
        time: time.value,
      };
      roundsArr.push(obj);
    }

    //Adding the skills to skillsRequired Array in company:
    const skills = [];
    for (let j = 1; j <= 10; j++) {
      let skill = document.getElementById("sk" + j);
      if (skill.value === "") {
        break;
      }
      skills.push(skill.value);
    }
    console.log("skills", skills);
    console.log(roundsArr.length, "total rounds");

    setCompany({
      ...company,
      totalRounds: roundsArr.length,
      driveDetails: roundsArr,
      skillsRequired: skills,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    //making an axios post request to add the company:
    await axios
      .post("http://localhost:8080/company/drive", company, {
        withCredentials: true,
      })
      .then((res) => {
        console.log("Company added:", res.data)
        alert("Company added successfully!");
      })
      .catch((err) => {
        console.log("Error in adding company:", err);
        alert("Something went wrong!");
      });
  };

  // const makeRequest = async () => {

  // };

  return (
    // <!-- Modal -->
    <div
      className="modal fade"
      id="AddCompanyForm"
      data-bs-backdrop="static"
      data-bs-keyboard="false"
      tabIndex="-1"
      aria-labelledby="staticBackdropLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog modal-dialog-scrollable">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="staticBackdropLabel">
              Add company details
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
          <form onSubmit={handleSubmit}>
          <p style={{fontSize:"15px"}}><span style={{color:"red"}}>*</span> All fields are mandatory</p>
          <hr />
            {/* <form className="row g-3 needs-validation" onSubmit={handleSubmit}> */}
            <h5>About company</h5>

            {/* Company name */}
            <div className="row">
            <div className="col-md-6">
              <label htmlFor="validationCustom01" className="form-label">
                Company name<span style={{color:"red"}}>*</span>
              </label>
              <input
                type="text"
                value={company.name}
                onChange={(e) =>
                  setCompany({ ...company, name: e.target.value })
                }
                className="form-control"
                id="validationCustom01"
                required
              />
            </div>

            {/* CTC */}
            <div className="col-md-6">
              <label htmlFor="validationCustom02" className="form-label">
                CTC in LPA<span style={{color:"red"}}>*</span>
              </label>
              <input
                type="text"
                value={company.ctc}
                onChange={(e) =>
                  setCompany({ ...company, ctc: e.target.value })
                }
                className="form-control"
                id="validationCustom02"
                required
              />
            </div>
            <div className="col-md-12">
              <label htmlFor="validationCustom02" className="form-label">
                Company Email<span style={{color:"red"}}>*</span>
              </label>
              <input
                type="email"
                value={company.email}
                onChange={(e) =>
                  setCompany({ ...company, email: e.target.value })
                }
                className="form-control"
                id="validationCustom02"
                required
              />
            </div>

            {/* Profile */}
            <div className="col-md-12">
              <label htmlFor="validationCustomUsername" className="form-label">
                Profile/Job description<span style={{color:"red"}}>*</span>
              </label>
              <div className="input-group has-validation">
                <span className="input-group-text" id="inputGroupPrepend">
                  @
                </span>
                <input
                  type="text"
                  value={company.profile}
                  onChange={(e) =>
                    setCompany({ ...company, profile: e.target.value })
                  }
                  className="form-control"
                  id="validationCustomUsername"
                  aria-describedby="inputGroupPrepend"
                  required
                />
              </div>
            </div>

            {/* WebsiteUrl */}
            <div className="col-md-12">
              <label htmlFor="validationUrl" className="form-label">
                Company website url<span style={{color:"red"}}>*</span>
              </label>
              <div className="input-group has-validation">
                <span className="input-group-text" id="inputGroupPrepend">
                  #
                </span>
                <input
                  type="text"
                  value={company.websiteUrl}
                  onChange={(e) =>
                    setCompany({ ...company, websiteUrl: e.target.value })
                  }
                  className="form-control"
                  id="validationUrl"
                  aria-describedby="inputGroupPrepend"
                  required
                />
              </div>
            </div>

            {/* Company Location */}
            <div className="col-md-12">
              <label htmlFor="validationUrl" className="form-label">
                Company address<span style={{color:"red"}}>*</span>
              </label>
              <div className="input-group has-validation">
                <textarea
                  type="text"
                  value={company.companyLocation}
                  onChange={(e) =>
                    setCompany({
                      ...company,
                      companyLocation: e.target.value,
                    })
                  }
                  className="form-control"
                  id="validationUrl"
                  aria-describedby="inputGroupPrepend"
                  required
                />
              </div>
            </div>

            {/* Branch */}
            <h5 style={{ paddingTop: "30px" }}>About criteria</h5>
            <div className="col-md-6">
              <label htmlFor="branch" className="form-label">
                Branch<span style={{color:"red"}}>*</span>
              </label>
              {/* Comp */}
              <div>
                <input
                  checked={branch.cs}
                  onChange={() => {
                    setBranch({ ...branch, cs: !branch.cs }); //setting the branch

                    //setting the company
                    setCompany({
                      ...company,
                      criteria: {
                        ...company.criteria,
                        branch: {
                          ...branch,
                          cs: !branch.cs,
                        },
                      },
                    });
                  }}
                  type="checkbox"
                  value="Computer Engineering"
                  name="comp"
                  id="comp"
                />{" "}
                <label htmlFor="comp"> Computer Engineering</label> <br />
                {/* It */}
                <input
                  checked={branch.it}
                  onChange={() => {
                    setBranch({ ...branch, it: !branch.it }); //setting the branch

                    //setting the company
                    setCompany({
                      ...company,
                      criteria: {
                        ...company.criteria,
                        branch: {
                          ...branch,
                          it: !branch.it,
                        },
                      },
                    });
                  }}
                  type="checkbox"
                  value="IT"
                  name="IT"
                  id="IT"
                />{" "}
                <label htmlFor="IT"> Infomation Technology</label> <br />
                {/* Entc */}
                <input
                  checked={branch.entc}
                  onChange={() => {
                    setBranch({ ...branch, entc: !branch.entc }); //setting the branch

                    //setting the company
                    setCompany({
                      ...company,
                      criteria: {
                        ...company.criteria,
                        branch: {
                          ...branch,
                          entc: !branch.entc,
                        },
                      },
                    });
                  }}
                  type="checkbox"
                  value="E&TC"
                  name="etc"
                  id="etc"
                />{" "}
                <label htmlFor="etc"> E&TC</label> <br />
              </div>
            </div>

            <div className="col-md-6">
              <label htmlFor="g" className="form-label">
                Graduation<span style={{color:"red"}}>*</span>
              </label>
              <div>
                <input
                  checked={grad.ug}
                  onChange={() => {
                    setGrad({ ...grad, ug: !grad.ug }); //setting the branch

                    //setting the company
                    setCompany({
                      ...company,
                      criteria: {
                        ...company.criteria,
                        courseName: {
                          ...grad,
                          ug: !grad.ug,
                        },
                      },
                    });
                  }}
                  type="checkbox"
                  value="ug"
                  name="ug"
                  id="ug"
                />
                <label htmlFor="ug"> UG</label> <br />
                {/*  */}
                <input
                  checked={grad.pg}
                  onChange={() => {
                    setGrad({ ...grad, pg: !grad.pg }); //setting the branch

                    //setting the company
                    setCompany({
                      ...company,
                      criteria: {
                        ...company.criteria,
                        courseName: {
                          ...grad,
                          pg: !grad.pg,
                        },
                      },
                    });
                  }}
                  type="checkbox"
                  value="pg"
                  name="pg"
                  id="pg"
                />{" "}
                <label htmlFor="pg"> PG</label> <br />
              </div>
            </div>


            {/* Hsc and Ssc Percentage */}
            <div className="col-md-6 my-2">
              <label htmlFor="10per" className="form-label">
                10th percentage<span style={{color:"red"}}>*</span>
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
                  id="10per"
                  aria-describedby="inputGroupPrepend"
                  required
                />
              </div>
            </div>
            <div className="col-md-6 my-2">
              <label htmlFor="12per" className="form-label">
                12th/Diploma percentage<span style={{color:"red"}}>*</span>
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
                  id="12per"
                  aria-describedby="inputGroupPrepend"
                  required
                />
              </div>
            </div>

            <div className="col-md-12">
              <label htmlFor="12per" className="form-label">
                Cgpa<span style={{color:"red"}}>*</span>
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
                  id="12per"
                  aria-describedby="inputGroupPrepend"
                  required
                />
              </div>
            </div>

            {/* Number of Rounds */}
            <h5 style={{ paddingTop: "30px" }}>About rounds</h5>

            <div className="col-md-12">
              <label htmlFor="12per" className="form-label">
                Select number of rounds<span style={{color:"red"}}>*</span>
              </label>
              <div className="input-group has-validation">
                <div className="form-check form-check-inline">
                  <input
                    className="form-check-input"
                    onClick={() => numOfRoundField(1)}
                    type="radio"
                    name="inlineRadioOptions1"
                    id="inlineRadio1"
                    value="1"
                    required
                  />
                  <label
                    className="form-check-label"
                    onClick={() => numOfRoundField(1)}
                    htmlFor="inlineRadio1"
                  >
                    1
                  </label>
                </div>

                <div className="form-check form-check-inline">
                  <input
                    className="form-check-input"
                    onClick={() => numOfRoundField(2)}
                    type="radio"
                    name="inlineRadioOptions1"
                    id="inlineRadio2"
                    value="2"
                  />
                  <label
                    className="form-check-label"
                    onClick={() => numOfRoundField(2)}
                    htmlFor="inlineRadio2"
                  >
                    2
                  </label>
                </div>

                <div className="form-check form-check-inline">
                  <input
                    className="form-check-input"
                    onClick={() => numOfRoundField(3)}
                    type="radio"
                    name="inlineRadioOptions1"
                    id="inlineRadio3"
                    value="3"
                  />
                  <label
                    className="form-check-label"
                    onClick={() => numOfRoundField(3)}
                    htmlFor="inlineRadio3"
                  >
                    3{" "}
                  </label>
                </div>

                <div className="form-check form-check-inline">
                  <input
                    className="form-check-input"
                    onClick={() => numOfRoundField(4)}
                    type="radio"
                    name="inlineRadioOptions1"
                    id="inlineRadio4"
                    value="4"
                  />
                  <label
                    className="form-check-label"
                    onClick={() => numOfRoundField(4)}
                    htmlFor="inlineRadio4"
                  >
                    4{" "}
                  </label>
                </div>

                <div className="form-check form-check-inline">
                  <input
                    className="form-check-input"
                    onClick={() => numOfRoundField(5)}
                    type="radio"
                    name="inlineRadioOptions1"
                    id="inlineRadio5"
                    value="5"
                  />
                  <label
                    className="form-check-label"
                    onClick={() => numOfRoundField(5)}
                    htmlFor="inlineRadio5"
                  >
                    5{" "}
                  </label>
                </div>
              </div>
            </div>

            <div
              id="roundId1"
              style={{ display: "none" }}
              className="col-md-12"
            >
              <label htmlFor="round" className="form-label">
                Round 1 details
              </label>
              <div
                className="input-group has-validation"
                style={{ marginLeft: "15px" }}
              >
                <div className="col-md-6">
                  <label htmlFor="round" className="form-label">
                    Round 1 activity
                  </label>
                  <div className="input-group has-validation">
                    <input
                      id="activity1"
                      // value={drive.activity}
                      // onChange={(e) =>
                      //   setDrive({
                      //     ...drive,
                      //     activity: e.target.value,
                      //     roundNo: company.driveDetails.length + 1,
                      //   })
                      // }
                      type="text"
                      className="form-control"
                      style={{ marginRight: "10px" }}
                      aria-describedby="inputGroupPrepend"
                      
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <label htmlFor="round" className="form-label">
                    Round 1 venue
                  </label>
                  <div className="input-group has-validation">
                    <input
                      id="venue1"
                      // value={drive.venue}
                      // onChange={(e) =>
                      //   setDrive({ ...drive, venue: e.target.value })
                      // }
                      type="text"
                      className="form-control"
                      aria-describedby="inputGroupPrepend"
                      
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <label htmlFor="round" className="form-label">
                    Round 1 date
                  </label>
                  <div className="input-group has-validation">
                    <input
                      id="date1"
                      // value={drive.date}
                      // onChange={(e) =>
                      //   setDrive({ ...drive, date: e.target.value })
                      // }
                      type="date"
                      style={{ marginRight: "10px" }}
                      className="form-control"
                      aria-describedby="inputGroupPrepend"
                      
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <label htmlFor="round" className="form-label">
                    Round 1 time
                  </label>
                  <div className="input-group has-validation">
                    <input
                      id="time1"
                      // value={drive.time}
                      // onChange={(e) =>
                      //   setDrive({ ...drive, time: e.target.value })
                      // }
                      type="time"
                      className="form-control"
                      aria-describedby="inputGroupPrepend"
                      
                    />
                  </div>
                </div>
                {/* <button
                  type="button"
                  className="btn btn-primary"
                  onClick={handleRounds}
                >
                  Add
                </button> */}
              </div>
            </div>

            <div
              id="roundId2"
              style={{ display: "none" }}
              className="col-md-12"
            >
              <label htmlFor="round" className="form-label">
                Round 2 details
              </label>
              <div
                className="input-group has-validation"
                style={{ marginLeft: "15px" }}
              >
                <div className="col-md-6">
                  <label htmlFor="round" className="form-label">
                    Round 2 activity
                  </label>
                  <div className="input-group has-validation">
                    <input
                      id="activity2"
                      // value={drive.activity}
                      // onChange={(e) =>
                      //   setDrive({
                      //     ...drive,
                      //     activity: e.target.value,
                      //     roundNo: company.driveDetails.length + 1,
                      //   })
                      // }
                      type="text"
                      className="form-control"
                      style={{ marginRight: "10px" }}
                      aria-describedby="inputGroupPrepend"
                      
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <label htmlFor="round" className="form-label">
                    Round 2 venue
                  </label>
                  <div className="input-group has-validation">
                    <input
                      id="venue2"
                      // value={drive.venue}
                      // onChange={(e) =>
                      //   setDrive({ ...drive, venue: e.target.value })
                      // }
                      type="text"
                      className="form-control"
                      aria-describedby="inputGroupPrepend"
                      
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <label htmlFor="round" className="form-label">
                    Round 2 date
                  </label>
                  <div className="input-group has-validation">
                    <input
                      id="date2"
                      // value={drive.date}
                      // onChange={(e) =>
                      //   setDrive({ ...drive, date: e.target.value })
                      // }
                      type="date"
                      style={{ marginRight: "10px" }}
                      className="form-control"
                      aria-describedby="inputGroupPrepend"
                      
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <label htmlFor="round" className="form-label">
                    Round 2 time
                  </label>
                  <div className="input-group has-validation">
                    <input
                      id="time2"
                      // value={drive.time}
                      // onChange={(e) =>
                      //   setDrive({ ...drive, time: e.target.value })
                      // }
                      type="time"
                      className="form-control"
                      aria-describedby="inputGroupPrepend"
                      
                    />
                  </div>
                </div>
                {/* <button
                  type="button"
                  className="btn btn-primary"
                  onClick={handleRounds}
                >
                  Add
                </button> */}
              </div>
            </div>

            <div
              id="roundId3"
              style={{ display: "none" }}
              className="col-md-12"
            >
              <label htmlFor="round" className="form-label">
                Round 3 details
              </label>
              <div
                className="input-group has-validation"
                style={{ marginLeft: "15px" }}
              >
                <div className="col-md-6">
                  <label htmlFor="round" className="form-label">
                    Round 3 activity
                  </label>
                  <div className="input-group has-validation">
                    <input
                      id="activity3"
                      // value={drive.activity}
                      // onChange={(e) =>
                      //   setDrive({
                      //     ...drive,
                      //     activity: e.target.value,
                      //     roundNo: company.driveDetails.length + 1,
                      //   })
                      // }
                      type="text"
                      className="form-control"
                      style={{ marginRight: "10px" }}
                      aria-describedby="inputGroupPrepend"
                      
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <label htmlFor="round" className="form-label">
                    Round 3 venue
                  </label>
                  <div className="input-group has-validation">
                    <input
                      id="venue3"
                      // value={drive.venue}
                      // onChange={(e) =>
                      //   setDrive({ ...drive, venue: e.target.value })
                      // }
                      type="text"
                      className="form-control"
                      aria-describedby="inputGroupPrepend"
                      
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <label htmlFor="round" className="form-label">
                    Round 3 date
                  </label>
                  <div className="input-group has-validation">
                    <input
                      id="date3"
                      // value={drive.date}
                      // onChange={(e) =>
                      //   setDrive({ ...drive, date: e.target.value })
                      // }
                      type="date"
                      style={{ marginRight: "10px" }}
                      className="form-control"
                      aria-describedby="inputGroupPrepend"
                      
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <label htmlFor="round" className="form-label">
                    Round 3 time
                  </label>
                  <div className="input-group has-validation">
                    <input
                      id="time3"
                      // value={drive.time}
                      // onChange={(e) =>
                      //   setDrive({ ...drive, time: e.target.value })
                      // }
                      type="time"
                      className="form-control"
                      aria-describedby="inputGroupPrepend"
                      
                    />
                  </div>
                </div>
                {/* <button
                  type="button"
                  className="btn btn-primary"
                  onClick={handleRounds}
                >
                  Add
                </button> */}
              </div>
            </div>

            <div
              id="roundId4"
              style={{ display: "none" }}
              className="col-md-12"
            >
              <label htmlFor="round" className="form-label">
                Round 4 details
              </label>
              <div
                className="input-group has-validation"
                style={{ marginLeft: "15px" }}
              >
                <div className="col-md-6">
                  <label htmlFor="round" className="form-label">
                    Round 4 activity
                  </label>
                  <div className="input-group has-validation">
                    <input
                      id="activity4"
                      // value={drive.activity}
                      // onChange={(e) =>
                      //   setDrive({
                      //     ...drive,
                      //     activity: e.target.value,
                      //     roundNo: company.driveDetails.length + 1,
                      //   })
                      // }
                      type="text"
                      className="form-control"
                      style={{ marginRight: "10px" }}
                      aria-describedby="inputGroupPrepend"
                      
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <label htmlFor="round" className="form-label">
                    Round 4 venue
                  </label>
                  <div className="input-group has-validation">
                    <input
                      id="venue4"
                      // value={drive.venue}
                      // onChange={(e) =>
                      //   setDrive({ ...drive, venue: e.target.value })
                      // }
                      type="text"
                      className="form-control"
                      aria-describedby="inputGroupPrepend"
                      
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <label htmlFor="round" className="form-label">
                    Round 4 date
                  </label>
                  <div className="input-group has-validation">
                    <input
                      id="date4"
                      // value={drive.date}
                      // onChange={(e) =>
                      //   setDrive({ ...drive, date: e.target.value })
                      // }
                      type="date"
                      style={{ marginRight: "10px" }}
                      className="form-control"
                      aria-describedby="inputGroupPrepend"
                      
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <label htmlFor="round" className="form-label">
                    Round 4 time
                  </label>
                  <div className="input-group has-validation">
                    <input
                      id="time4"
                      // value={drive.time}
                      // onChange={(e) =>
                      //   setDrive({ ...drive, time: e.target.value })
                      // }
                      type="time"
                      className="form-control"
                      aria-describedby="inputGroupPrepend"
                      
                    />
                  </div>
                </div>
                {/* <button
                  type="button"
                  className="btn btn-primary"
                  onClick={handleRounds}
                >
                  Add
                </button> */}
              </div>
            </div>

            <div
              id="roundId5"
              style={{ display: "none" }}
              className="col-md-12"
            >
              <label htmlFor="round" className="form-label">
                Round 5 details
              </label>
              <div
                className="input-group has-validation"
                style={{ marginLeft: "15px" }}
              >
                <div className="col-md-6">
                  <label htmlFor="round" className="form-label">
                    Round 5 activity
                  </label>
                  <div className="input-group has-validation">
                    <input
                      id="activity5"
                      // value={drive.activity}
                      // onChange={(e) =>
                      //   setDrive({
                      //     ...drive,
                      //     activity: e.target.value,
                      //     roundNo: company.driveDetails.length + 1,
                      //   })
                      // }
                      type="text"
                      className="form-control"
                      style={{ marginRight: "10px" }}
                      aria-describedby="inputGroupPrepend"
                      
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <label htmlFor="round" className="form-label">
                    Round 5 venue
                  </label>
                  <div className="input-group has-validation">
                    <input
                      id="venue5"
                      // value={drive.venue}
                      // onChange={(e) =>
                      //   setDrive({ ...drive, venue: e.target.value })
                      // }
                      type="text"
                      className="form-control"
                      aria-describedby="inputGroupPrepend"
                      
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <label htmlFor="round" className="form-label">
                    Round 5 date
                  </label>
                  <div className="input-group has-validation">
                    <input
                      id="date5"
                      // value={drive.date}
                      // onChange={(e) =>
                      //   setDrive({ ...drive, date: e.target.value })
                      // }
                      type="date"
                      style={{ marginRight: "10px" }}
                      className="form-control"
                      aria-describedby="inputGroupPrepend"
                      
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <label htmlFor="round" className="form-label">
                    Round 5 time
                  </label>
                  <div className="input-group has-validation">
                    <input
                      id="time5"
                      // value={drive.time}
                      // onChange={(e) =>
                      //   setDrive({ ...drive, time: e.target.value })
                      // }
                      type="time"
                      className="form-control"
                      aria-describedby="inputGroupPrepend"
                      
                    />
                  </div>
                </div>
                {/* <button
                  type="button"
                  className="btn btn-primary"
                  onClick={handleRounds}
                >
                  Add
                </button> */}
              </div>
            </div>

            {/* Skills Required */}
            <h5 style={{ paddingTop: "30px" }}>About skills</h5>

            <div className="col-md-12">
              <label htmlFor="sk" className="form-label">
                Select number of skills<span style={{color:"red"}}>*</span>
              </label>
              <div className="input-group has-validation">
                <div className="form-check form-check-inline">
                  <input
                    className="form-check-input"
                    onClick={() => numOfSkill(1)}
                    type="radio"
                    name="inlineRadioOptions"
                    id="inlineRadio1"
                    value="1"
                    required
                  />
                  <label
                    className="form-check-label"
                    onClick={() => numOfSkill(1)}
                    htmlFor="inlineRadio1"
                  >
                    1
                  </label>
                </div>
                <div className="form-check form-check-inline">
                  <input
                    className="form-check-input"
                    onClick={() => numOfSkill(2)}
                    type="radio"
                    name="inlineRadioOptions"
                    id="inlineRadio2"
                    value="2"
                  />
                  <label
                    className="form-check-label"
                    onClick={() => numOfSkill(2)}
                    htmlFor="inlineRadio2"
                  >
                    2
                  </label>
                </div>
                <div className="form-check form-check-inline">
                  <input
                    className="form-check-input"
                    onClick={() => numOfSkill(3)}
                    type="radio"
                    name="inlineRadioOptions"
                    id="inlineRadio3"
                    value="3"
                  />
                  <label
                    className="form-check-label"
                    onClick={() => numOfSkill(3)}
                    htmlFor="inlineRadio3"
                  >
                    3{" "}
                  </label>
                </div>
                <div className="form-check form-check-inline">
                  <input
                    className="form-check-input"
                    onClick={() => numOfSkill(4)}
                    type="radio"
                    name="inlineRadioOptions"
                    id="inlineRadio4"
                    value="4"
                  />
                  <label
                    className="form-check-label"
                    onClick={() => numOfSkill(4)}
                    htmlFor="inlineRadio4"
                  >
                    4{" "}
                  </label>
                </div>
                <div className="form-check form-check-inline">
                  <input
                    className="form-check-input"
                    onClick={() => numOfSkill(5)}
                    type="radio"
                    name="inlineRadioOptions"
                    id="inlineRadio5"
                    value="5"
                  />
                  <label
                    className="form-check-label"
                    onClick={() => numOfSkill(5)}
                    htmlFor="inlineRadio5"
                  >
                    5{" "}
                  </label>
                </div>
                <div className="form-check form-check-inline">
                  <input
                    className="form-check-input"
                    onClick={() => numOfSkill(6)}
                    type="radio"
                    name="inlineRadioOptions"
                    id="inlineRadio5"
                    value="5"
                  />
                  <label
                    className="form-check-label"
                    onClick={() => numOfSkill(6)}
                    htmlFor="inlineRadio5"
                  >
                    6{" "}
                  </label>
                </div>
                <div className="form-check form-check-inline">
                  <input
                    className="form-check-input"
                    onClick={() => numOfSkill(7)}
                    type="radio"
                    name="inlineRadioOptions"
                    id="inlineRadio5"
                    value="5"
                  />
                  <label
                    className="form-check-label"
                    onClick={() => numOfSkill(7)}
                    htmlFor="inlineRadio5"
                  >
                    7{" "}
                  </label>
                </div>
                <div className="form-check form-check-inline">
                  <input
                    className="form-check-input"
                    onClick={() => numOfSkill(8)}
                    type="radio"
                    name="inlineRadioOptions"
                    id="inlineRadio5"
                    value="5"
                  />
                  <label
                    className="form-check-label"
                    onClick={() => numOfSkill(8)}
                    htmlFor="inlineRadio5"
                  >
                    8{" "}
                  </label>
                </div>
                <div className="form-check form-check-inline">
                  <input
                    className="form-check-input"
                    onClick={() => numOfSkill(9)}
                    type="radio"
                    name="inlineRadioOptions"
                    id="inlineRadio5"
                    value="5"
                  />
                  <label
                    className="form-check-label"
                    onClick={() => numOfSkill(9)}
                    htmlFor="inlineRadio5"
                  >
                    9{" "}
                  </label>
                </div>
                <div className="form-check form-check-inline">
                  <input
                    className="form-check-input"
                    onClick={() => numOfSkill(10)}
                    type="radio"
                    name="inlineRadioOptions"
                    id="inlineRadio5"
                    value="5"
                  />
                  <label
                    className="form-check-label"
                    onClick={() => numOfSkill(10)}
                    htmlFor="inlineRadio5"
                  >
                    10{" "}
                  </label>
                </div>
              </div>
            </div>

            {/* Skills Required.. */}
            <div id="skill1" style={{ display: "none" }} className="col-md-12">
              <label htmlFor="sk1" className="form-label">
                Skill 1
              </label>
              <div className="input-group has-validation">
                <input type="text" className="form-control" id="sk1"  />
              </div>
            </div>
            <div id="skill2" style={{ display: "none" }} className="col-md-12">
              <label htmlFor="sk2" className="form-label">
                Skill 2
              </label>
              <div className="input-group has-validation">
                <input
                  type="text"
                  className="form-control"
                  id="sk2"
                  aria-describedby="inputGroupPrepend"
                  
                />
              </div>
            </div>
            <div id="skill3" style={{ display: "none" }} className="col-md-12">
              <label htmlFor="sk3" className="form-label">
                Skill 3
              </label>
              <div className="input-group has-validation">
                <input
                  type="text"
                  className="form-control"
                  id="sk3"
                  aria-describedby="inputGroupPrepend"
                  
                />
              </div>
            </div>
            <div id="skill4" style={{ display: "none" }} className="col-md-12">
              <label htmlFor="sk4" className="form-label">
                Skill 4
              </label>
              <div className="input-group has-validation">
                <input
                  type="text"
                  className="form-control"
                  id="sk4"
                  aria-describedby="inputGroupPrepend"
                  
                />
              </div>
            </div>
            <div id="skill5" style={{ display: "none" }} className="col-md-12">
              <label htmlFor="sk5" className="form-label">
                Skill 5
              </label>
              <div className="input-group has-validation">
                <input
                  type="text"
                  className="form-control"
                  id="sk5"
                  aria-describedby="inputGroupPrepend"
                  
                />
              </div>
            </div>
            <div id="skill6" style={{ display: "none" }} className="col-md-12">
              <label htmlFor="sk6" className="form-label">
                Skill 6
              </label>
              <div className="input-group has-validation">
                <input
                  type="text"
                  className="form-control"
                  id="sk6"
                  aria-describedby="inputGroupPrepend"
                  
                />
              </div>
            </div>
            <div id="skill7" style={{ display: "none" }} className="col-md-12">
              <label htmlFor="sk7" className="form-label">
                Skill 7
              </label>
              <div className="input-group has-validation">
                <input
                  type="text"
                  className="form-control"
                  id="sk7"
                  aria-describedby="inputGroupPrepend"
                  
                />
              </div>
            </div>
            <div id="skill8" style={{ display: "none" }} className="col-md-12">
              <label htmlFor="sk8" className="form-label">
                Skill 8
              </label>
              <div className="input-group has-validation">
                <input
                  type="text"
                  className="form-control"
                  id="sk8"
                  aria-describedby="inputGroupPrepend"
                  
                />
              </div>
            </div>
            <div id="skill9" style={{ display: "none" }} className="col-md-12">
              <label htmlFor="sk9" className="form-label">
                Skill 9
              </label>
              <div className="input-group has-validation">
                <input
                  type="text"
                  className="form-control"
                  id="sk9"
                  aria-describedby="inputGroupPrepend"
                  
                />
              </div>
            </div>
            <div id="skill10" style={{ display: "none" }} className="col-md-12">
              <label htmlFor="sk10" className="form-label">
                Skill 10
              </label>
              <div className="input-group has-validation">
                <input
                  type="text"
                  className="form-control"
                  id="sk10"
                  aria-describedby="inputGroupPrepend"
                  
                />
              </div>
            </div>

            <h5 style={{ paddingTop: "30px" }}>About drive schedule</h5>

            <div className="col-md-6">
              <label htmlFor="validationCustom04" className="form-label">
                Starting date<span style={{color:"red"}}>*</span>
              </label>
              <div className="input-group has-validation">
                <input
                  value={company.startDate}
                  onChange={(e) =>
                    setCompany({ ...company, startDate: e.target.value })
                  }
                  type="date"
                  className="form-control"
                  id="validationCustom04"
                  aria-describedby="inputGroupPrepend"
                  required
                />
              </div>
            </div>
            <div className="col-md-6">
              <label htmlFor="validationCustom040" className="form-label">
                Ending date<span style={{color:"red"}}>*</span>
              </label>
              <div className="input-group has-validation">
                <input
                  value={company.endDate}
                  onChange={(e) =>
                    setCompany({ ...company, endDate: e.target.value })
                  }
                  type="date"
                  className="form-control"
                  id="validationCustom040"
                  aria-describedby="inputGroupPrepend"
                  required
                />
              </div>
            </div>

            <div className="form-check mx-3 my-3 col-md-12" onClick={handleClick}>
              <input type="checkbox" className="form-check-input" id="exampleCheck1" required />
              <label className="form-check-label" htmlFor="exampleCheck1">Kindly check this box to confirm.</label>
            </div>

            {/* <div className="col-md-12 my-4">
              <input
                checked={confirm}
                type="checkbox"
                onChange={handleClick}
                // value="confirm"
                name="confirm"
                id="confirm"
              />{" "}
              <label htmlFor="confirm">
                Kindly check this box to confirm.
              </label>
              <br />
            </div> */}
          <div className="col-12" style={{marginBottom:'10px'}}>
            <button className="btn btn-primary" type="submit">
              Add company
            </button>
          </div>
          
        </div>
        </form>

        <div className="modal-footer">
          <button
            type="button"
            className="btn btn-secondary"
            data-bs-dismiss="modal"
          >
            Cancel
          </button>
          {/* <button type="button" className="btn btn-primary">Add company</button> */}
        </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default AddCompanyForm;
