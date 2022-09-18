import "../../assets/css/team.css";
import ved from "../../assets/img/ved.jpg"
import devansh from "../../assets/img/devansh.jpeg"
import sangmeshwar from "../../assets/img/sangmeshwar.jpg"
import gaurav from "../../assets/img/gaurav.jpg"
import kedar from "../../assets/img/kedar.jpg"
import rohit from "../../assets/img/rohit.jpg"
import vinayak from "../../assets/img/vinayak.JPG"
import sudarshan from "../../assets/img/sudarshan.jpg"
import harshal from "../../assets/img/harshal.jpg"
import {Link} from "react-router-dom";
import { useState } from "react";

const Team = () => {

  const team = [
    {src:ved, name: "Ved Patwardhan", desc: "Project Support",git: "https://github.com/vedpatwardhan", linkedin: "https://www.linkedin.com/in/ved-patwardhan", email: "mailto:vedpat3@gmail.com"},
    {src:sudarshan, name: "Sudarshan Gawale", desc: "Project Support",git: "https://github.com/g-sudarshan", linkedin: "https://www.linkedin.com/in/g-sudarshan/", email: ""},
    {src:devansh, name: "Devansh Mundada", desc: "Project Support",git: "https://github.com/devansh2611", linkedin: "https://www.linkedin.com/in/devansh-mundada", email: "mailto:mundada.devansh@gmail.com"},
    {src:harshal, name: "Harshal Walunj", desc: "Project Support",git: "https://github.com/harshal239", linkedin: "https://www.linkedin.com/in/harshalwalunj127/", email: "mailto:harshalwalunj49@gmail.com"},
    {src:sangmeshwar, name: "Sangmeshwar Mahajan", desc: "Frontend",git: "https://github.com/sangmesh04/", linkedin: "https://www.linkedin.com/in/mahajan-sangmeshwar/", email: "mailto:mahajansangmeshwar04@gmail.com"},
    {src:vinayak, name: "Vinayak Jamadar", desc: "Backend",git: "https://github.com/VinayakJamadar", linkedin: "https://www.linkedin.com/in/vinayak-jamadar-979879228", email: "mailto:vinayaksjamadar@gmail.com"},
    {src:rohit, name: "Rohit Patil", desc: "Backend",git: "https://github.com/rohitvpatil0810", linkedin: "https://www.linkedin.com/in/rohit-patil-35b08b209", email: "mailto:rohitvpatil0810@gmail.com"},
    {src:kedar, name: "Kedar Koshti", desc: "Backend",git: "https://github.com/kedarkk1", linkedin: "https://www.linkedin.com/in/kedar-koshti-700804218/", email: "mailto:officialkedark1@gmail.com"},
    {src:gaurav, name: "Gaurav Somani", desc: "Backend",git: "https://github.com/gaurav-750", linkedin: "https://linkedin.com/in/gaurav-somani-294233218", email: "mailto:gauravsomani52750@gmail.com"},
  ]
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
          {
            team && team.map((t, key)=>
              <li className="col-12 col-md-6 col-lg-3" key={key}>
              <div className="cnt-block equal-hight" style={{ height: 349 }}>
                <figure>
                  <img
                    src={t.src}
                    className="img-responsive"
                    alt=""
                  />
                </figure>
                <h3>
                  {t.name}
                </h3>
                <p>{t.desc}</p>
                <ul className="follow-us clearfix">
                  <li>
                    <a href={t.git}>
                        <i className="bi bi-github"></i>
                    </a>
                  </li>
                  <li>
                    <a href={t.linkedin}>
                      <i className="bi bi-linkedin"></i>
                    </a>
                  </li>
                  <li>
                    <a href={t.email}>
                      <i className="bi bi-envelope"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            )
          }

        </ul>
      </div>
    </section>
    </>
    
     );
}
 
export default Team;