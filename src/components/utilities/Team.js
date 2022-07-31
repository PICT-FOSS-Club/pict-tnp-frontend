import "../../assets/css/team.css";
import ved from "../../assets/img/ved.jpg"
import devansh from "../../assets/img/devansh.jpeg"
import sangmeshwar from "../../assets/img/sangmeshwar.jpg"
import gaurav from "../../assets/img/gaurav.jpg"
import kedar from "../../assets/img/kedar.jpg"
import rohit from "../../assets/img/rohit.jpg"
import vinayak from "../../assets/img/vinayak.JPG"
import {Link} from "react-router-dom";

const Team = () => {
    return ( 
      <>
      <div className="card text-center">
                    <div className="card-body">
                 <Link to="/" style={{textDecoration:"none",color:"gray"}}>  PICT TnP Platform </Link>
                    </div>
                </div>

      <section className="our-webcoderskull padding-lg">
        
      <div className="container">
        <div className="row heading heading-icon">
          <h2>Our Team</h2>
        </div>
        <ul className="row">
          <li className="col-12 col-md-6 col-lg-3">
            <div className="cnt-block equal-hight" style={{ height: 349 }}>
              <figure>
                <img
                  src={ved}
                  className="img-responsive"
                  alt=""
                />
              </figure>
              <h3>
                Ved Patwardhan
              </h3>
              <p>Project Support</p>
              <ul className="follow-us clearfix">
                <li>
                  <a href="https://github.com/vedpatwardhan">
                      <i className="bi bi-github"></i>
                  </a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/in/ved-patwardhan">
                    <i className="bi bi-linkedin"></i>
                  </a>
                </li>
                <li>
                  <a href="mailto:vedpat3@gmail.com">
                    <i className="bi bi-envelope"></i>
                  </a>
                </li>
              </ul>
            </div>
          </li>
          <li className="col-12 col-md-6 col-lg-3">
            <div className="cnt-block equal-hight" style={{ height: 349 }}>
              <figure>
                <img
                  src={devansh}
                  className="img-responsive"
                  alt=""
                />
              </figure>
              <h3>
                Devansh Mundada
              </h3>
              <p>Project Support</p>
              <ul className="follow-us clearfix">
                <li>
                  <a href="https://github.com/devansh2611">
                      <i className="bi bi-github"></i>
                  </a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/in/devansh-mundada">
                    <i className="bi bi-linkedin"></i>
                  </a>
                </li>
                <li>
                  <a href="mailto:mundada.devansh@gmail.com">
                    <i className="bi bi-envelope"></i>
                  </a>
                </li>
              </ul>
            </div>
          </li>
          <li className="col-12 col-md-6 col-lg-3">
            <div className="cnt-block equal-hight" style={{ height: 349 }}>
              <figure>
                <img
                  src={sangmeshwar}
                  className="img-responsive"
                  alt=""
                />
              </figure>
              <h3>
                Sangmeshwar Mahajan
              </h3>
              <p>Frontend</p>
              <ul className="follow-us clearfix">
                <li>
                  <a href="https://github.com/sangmesh04/">
                      <i className="bi bi-github"></i>
                  </a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/in/mahajan-sangmeshwar/">
                    <i className="bi bi-linkedin"></i>
                  </a>
                </li>
                <li>
                 <a href="mailto:mahajansangmeshwar04@gmail.com">
                    <i className="bi bi-envelope"></i>
                  </a>
                </li>
              </ul>
            </div>
          </li>
          <li className="col-12 col-md-6 col-lg-3">
            <div className="cnt-block equal-hight" style={{ height: 349 }}>
              <figure>
                <img
                  src={vinayak}
                  className="img-responsive"
                  alt=""
                />
              </figure>
              <h3>
                Vinayak Jamadar
              </h3>
              <p>Backend</p>
              <ul className="follow-us clearfix">
                <li>
                  <a href="https://github.com/vinayaksj1234">
                      <i className="bi bi-github"></i>
                  </a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/in/vinayak-jamadar-979879228">
                    <i className="bi bi-linkedin"></i>
                  </a>
                </li>
                <li>
                  <a href="mailto:vinayaksjamadar@gmail.com">
                    <i className="bi bi-envelope"></i>
                  </a>
                </li>
              </ul>
            </div>
          </li>
          <li className="col-12 col-md-6 col-lg-3">
            <div className="cnt-block equal-hight" style={{ height: 349 }}>
              <figure>
                <img
                  src={rohit}
                  className="img-responsive"
                  alt=""
                />
              </figure>
              <h3>
                Rohit Patil
              </h3>
              <p>Backend</p>
              <ul className="follow-us clearfix">
                <li>
                  <a href="https://github.com/rohitvpatil0810">
                      <i className="bi bi-github"></i>
                  </a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/in/rohit-patil-35b08b209">
                    <i className="bi bi-linkedin"></i>
                  </a>
                </li>
                <li>
                  <a href="mailto:rohitvpatil0810@gmail.com">
                    <i className="bi bi-envelope"></i>
                  </a>
                </li>
              </ul>
            </div>
          </li>
          <li className="col-12 col-md-6 col-lg-3">
            <div className="cnt-block equal-hight" style={{ height: 349 }}>
              <figure>
                <img
                  src={kedar}
                  className="img-responsive"
                  alt=""
                />
              </figure>
              <h3>
                Kedar Koshti
              </h3>
              <p>Backend</p>
              <ul className="follow-us clearfix">
                <li>
                  <a href="https://github.com/kedarkk1">
                      <i className="bi bi-github"></i>
                  </a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/in/kedar-koshti-700804218/">
                    <i className="bi bi-linkedin"></i>
                  </a>
                </li>
                <li>
                  <a href="mailto:officialkedark1@gmail.com">
                    <i className="bi bi-envelope"></i>
                  </a>
                </li>
              </ul>
            </div>
          </li>
          <li className="col-12 col-md-6 col-lg-3">
            <div className="cnt-block equal-hight" style={{ height: 349 }}>
              <figure>
                <img
                  src={gaurav}
                  className="img-responsive"
                  alt=""
                />
              </figure>
              <h3>
                Gaurav Somani
              </h3>
              <p>Backend</p>
              <ul className="follow-us clearfix">
                <li>
                  <a href="https://github.com/gaurav-750">
                      <i className="bi bi-github"></i>
                  </a>
                </li>
                <li>
                  <a href="https://linkedin.com/in/gaurav-somani-294233218">
                    <i className="bi bi-linkedin"></i>
                  </a>
                </li>
                <li>
                  <a href="mailto:gauravsomani52750@gmail.com">
                    <i className="bi bi-envelope"></i>
                  </a>
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </section>
    </>
    
     );
}
 
export default Team;