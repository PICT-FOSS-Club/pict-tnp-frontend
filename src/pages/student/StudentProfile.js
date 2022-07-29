import React from 'react'
// import axios from 'axios'
import "../../assets/css/studentprofile.css"

const StudentProfile = () => {

    // useEffect(() => {

    //     axios.get('http://localhost:8080/student/me')
    //     .then((res) => {
    //         console.log('After get request:', res);
    //     })
    //     .catch((err) => {
    //         console.log('Error in get req:', err);
    //     })

    // }, [])

  return (
    <div className="container bootstrap snippets bootdey">
  <div>
    <div className="profile-info">
      <div className="panel">
      </div>
      <div className="panel">
        <div className="bio-graph-heading">
          <h1>Sangmeshwar Mahajan</h1>
        </div>
        <div className="panel-body bio-graph-info">
          <h3>Personal Information</h3>
          <div className="row">
            <div className="bio-row">
              <p>
                <span>Email: </span>mahajansangmeshwar04@gmail.com
              </p>
            </div>
            <div className="bio-row">
              <p>
                <span>Alternate email: </span> - 
              </p>
            </div>
            <div className="bio-row">
              <p>
                <span>Mobile: </span>8010965429
              </p>
            </div>
            <div className="bio-row">
              <p>
                <span>Alternate mobile: </span> -
              </p>
            </div>
            <div className="bio-row">
              <p>
                <span>DOB: </span>24/10/2002
              </p>
            </div>
            <div className="bio-row">
              <p>
                <span>Gender: </span> Male
              </p>
            </div>
            <div className="bio-row">
              <p>
                <span>Current address: </span> 21 ShreejiDham Apt , Airoli , NaviMumbai
              </p>
            </div>
            <div className="bio-row">
              <p>
                <span>Permanant address: </span> 21 ShreejiDham Apt , Airoli , NaviMumbai
              </p>
            </div>
            <div className="bio-row">
              <p>
                <span>Adhaar number: </span> 4520 4541 3054
              </p>
            </div>
            <div className="bio-row">
              <p>
                <span>Pan number: </span> LJAF45210
              </p>
            </div>
            <div className="bio-row">
              <p>
                <span>Passport: </span> -
              </p>
            </div>
            <div className="bio-row">
              <p>
                <span>Citizenship: </span> Indian
              </p>
            </div>
          </div>
        </div>


        <div className="panel-body bio-graph-info">
          <h3>Education Information</h3>
          <div className="row">
            <div className="bio-row">
              <p>
                <span>10<sup>th</sup> percent: </span> 97.00 %
              </p>
            </div>
            <div className="bio-row">
              <p>
              <span>Board of 10th education: </span> SSC
              </p>
            </div>
            <div className="bio-row">
              <p>
                <span>Year of 10th passing: </span> 2018
              </p>
            </div>
            <div className="bio-row">
              <p>
                <span>Education gap after 10th: </span> No
              </p>
            </div>
            <div className="bio-row">
              <p>
                <span>Reason of gap: </span> -
              </p>
            </div>
            <div className="bio-row">
              <p>
              <span>12<sup>th</sup>/Diploma percent: </span> 90.15 %
              </p>
            </div>
            <div className="bio-row">
              <p>
              <span>Board of 12th/Diploma education: </span> SSC
              </p>
            </div>
            <div className="bio-row">
              <p>
                <span>Year of 12th/Diploma passing: </span> 2020
              </p>
            </div>
            
          </div>
        </div>

        <div className="panel-body bio-graph-info">
          <h3>College Information</h3>
          <div className="row">
            <div className="bio-row">
              <p>
                <span>TE Roll no: </span> 31332
              </p>
            </div>
            <div className="bio-row">
              <p>
              <span>TE section: </span> 03
              </p>
            </div>
            <div className="bio-row">
              <p>
                <span>Branch: </span> Computer
              </p>
            </div>
            <div className="bio-row">
              <p>
                <span>PICT reg id: </span> C2K20106652
              </p>
            </div>
            <div className="bio-row">
              <p>
                <span>University PRN: </span> 754512154D
              </p>
            </div>
            <div className="bio-row">
              <p>
              <span>Year of 1st year: </span> 2020
              </p>
            </div>
            <div className="bio-row">
              <p>
              <span>1st year 1st sem cgpa: </span> 10
              </p>
            </div>
            <div className="bio-row">
              <p>
              <span>1st year 2nd sem cgpa: </span> 9.98
              </p>
            </div>
            <div className="bio-row">
              <p>
              <span>2nd year 1st sem cgpa: </span> 10
              </p>
            </div>
            <div className="bio-row">
              <p>
              <span>2nd year 2nd sem cgpa: </span> 9.68
              </p>
            </div>
            <div className="bio-row">
              <p>
              <span>3rd year 1st sem cgpa: </span> 9.78
              </p>
            </div>
            <div className="bio-row">
              <p>
              <span>Total active backlog: </span> 0
              </p>
            </div>
            <div className="bio-row">
              <p>
              <span>Total passive backlog: </span> 0
              </p>
            </div>
            <div className="bio-row">
              <p>
              <span>Are you YD?: </span> No
              </p>
            </div>
            <div className="bio-row">
              <p>
              <span>Planning for higher education: </span> No
              </p>
            </div>
            <div className="bio-row">
              <p>
              <span>Appeared for AMCAT: </span> Yes
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
</div>

  )
}

export default StudentProfile