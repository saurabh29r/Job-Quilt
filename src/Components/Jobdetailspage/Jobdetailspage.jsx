import React, { useState, useEffect } from "react";
import "./Jobdetailspage.css";
import { Link, useParams } from "react-router-dom";
import Cookies from "js-cookie";
import { CiLocationOn } from "react-icons/ci";
import { MdWorkOutline } from "react-icons/md";
import Navbar from "../Navbar/Navbar";
import { BiLinkExternal } from "react-icons/bi";
function Jobdetailspage() {
  const [jobDetails, setJobDetails] = useState({});
  const params = useParams();
  const { id } = params;

  const getJobDetails = async () => {
    try {
      const jwtToken = Cookies.get("jwt_token");
      const apiUrl = `https://apis.ccbp.in/jobs/${id}`;

      const options = {
        headers: {
          Authorization: `Bearer ${jwtToken}`,
        },
        method: "GET",
      };

      const response = await fetch(apiUrl, options);
      const data = await response.json();

      setJobDetails(data.job_details);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    getJobDetails();
  }, [id]);

  return (
    <>
      <Navbar />
      <div className="conatines extra">
        <h3>{jobDetails.title}</h3>
        <div className="image-rating-con">
          <img
            src={jobDetails.company_logo_url}
            alt="company-url"
            className="company-img"
          />
          <p>{`⭐`.repeat(jobDetails.rating)}</p>
        </div>
        <div className="location-job-pacakge-container">
          <div className="location-map-container">
            <CiLocationOn />
            <p className="locations">{jobDetails.location}</p>
          </div>
          <div className="work-jobtype">
            <MdWorkOutline />
            <p className="job-type">{jobDetails.employment_type}</p>
          </div>
          <p className="package"> {jobDetails.package_per_annum}</p>
        </div>
        <hr className="horizontal-line" />
        <div className="visit-section">
          <h5> Job Description: </h5>
          <div className="visit-sec">
            <a
              target="_blank"
              rel="noreferrer"
              href={jobDetails.company_website_url}
              className="apply_now"
            >
              Apply_Here
            </a>
            <BiLinkExternal className="vistist" />
          </div>
        </div>
        <p className="job-description">{jobDetails.job_description}</p>

        <div>
          <h3>Skills</h3>
          <div className="skills-container">
            {jobDetails.skills &&
              jobDetails.skills.map((skill, index) => (
                <li key={index} className="skill">
                  <img
                    src={skill.image_url}
                    alt={skill.name}
                    className="skill-image"
                  />
                  <p className="pt-2">{skill.name}</p>
                </li>
              ))}
          </div>
        </div>
        <div>
          <h3>Life at Company</h3>
          <p>
            {jobDetails.life_at_company &&
              jobDetails.life_at_company.description}
          </p>
          <img
            src={
              jobDetails.life_at_company && jobDetails.life_at_company.image_url
            }
            alt="Life at Company"
          />
        </div>
      </div>
    </>
  );
}

export default Jobdetailspage;
