import React, { useState, useEffect } from "react";
import "./Jobdetailspage.css";
import { useParams } from "react-router-dom";
import Cookies from "js-cookie";

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
    <div>
      <div>
        <p className="mmmssp">{jobDetails.job_description}</p>
        <img src={jobDetails.company_logo_url} alt="Company Logo" />
        <p>{jobDetails.employment_type}</p>
        <a
          target="_blank"
          rel="noreferrer"
          href={jobDetails.company_website_url}
        >
          Apply Now
        </a>
        <p>{jobDetails.location}</p>
        <p>{jobDetails.package_per_annum}</p>
        <h2>{jobDetails.title}</h2>
      </div>
      <div>
        <h3>Life at Company</h3>
        <p>
          {jobDetails.life_at_company && jobDetails.life_at_company.description}
        </p>
        <img
          src={
            jobDetails.life_at_company && jobDetails.life_at_company.image_url
          }
          alt="Life at Company"
        />
      </div>
      <div>
        <h3>Skills</h3>
        {jobDetails.skills &&
          jobDetails.skills.map((skill, index) => (
            <div key={index} className="d-flex">
              <img src={skill.image_url} alt={skill.name} />
              <p>{skill.name}</p>
            </div>
          ))}
      </div>
    </div>
  );
}

export default Jobdetailspage;
