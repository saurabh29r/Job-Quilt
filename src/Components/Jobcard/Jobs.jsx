import React, { useState, useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Navbar from "../Navbar/Navbar";
import Cookies from "js-cookie";
import { FaSearch } from "react-icons/fa";
import { CiLocationOn } from "react-icons/ci";
import { MdWorkOutline } from "react-icons/md";
import "./Jobcard.css";

function Jobs() {
  const [jobs, setJobs] = useState([]);
  const [filteredJobs, setFilteredJobs] = useState([]);
  const [search, setSearch] = useState("");
  const [filters, setFilters] = useState({
    fullTime: false,
    partTime: false,
    internship: false,
    freelance: false,
  });

  const getJobs = async () => {
    try {
      const jwtToken = Cookies.get("jwt_token");
      const apiUrl = "https://apis.ccbp.in/jobs";
      const options = {
        headers: {
          Authorization: `Bearer ${jwtToken}`,
        },
        method: "GET",
      };
      const response = await fetch(apiUrl, options);
      const data = await response.json();
      setJobs(data.jobs);
      setFilteredJobs(data.jobs);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    getJobs();
  }, []);

  useEffect(() => {
    applyFilters();
  }, [search, filters]);

  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    setFilters({
      ...filters,
      [name]: checked,
    });
  };

  const handleSearchChange = (event) => {
    setSearch(event.target.value);
  };

  const applyFilters = () => {
    let updatedFilteredJobs = jobs.filter((job) => {
      const titleMatches = job.title
        .toLowerCase()
        .includes(search.toLowerCase());
      const employmentTypeMatches =
        (!filters.fullTime || job.employment_type === "Full Time") &&
        (!filters.partTime || job.employment_type === "Part Time") &&
        (!filters.internship || job.employment_type === "Internship") &&
        (!filters.freelance || job.employment_type === "Freelance");

      return titleMatches && employmentTypeMatches;
    });

    setFilteredJobs(updatedFilteredJobs);
  };

  return (
    <>
      <Navbar />
      <Container fluid>
        <Row>
          <Col>
            <div className="d-flex">
              <div className="filter-container">
                <div className="input-wrapper">
                  <FaSearch id="search-icon" />
                  <input
                    type="search"
                    placeholder="Please Enter the keyword"
                    value={search}
                    onChange={handleSearchChange}
                    className="search-input"
                  />
                </div>
                <hr className="horizontal-lines" />
                <div className="ml-3">
                  <h6> Type of Employment</h6>
                  <br />
                  <div>
                    <input
                      type="checkbox"
                      id="fullTime"
                      name="fullTime"
                      checked={filters.fullTime}
                      onChange={handleCheckboxChange}
                    />
                    <label htmlFor="fullTime" className="ml-2">
                      Full Time
                    </label>
                    <br />
                    <input
                      type="checkbox"
                      id="partTime"
                      name="partTime"
                      checked={filters.partTime}
                      onChange={handleCheckboxChange}
                    />
                    <label htmlFor="partTime" className="ml-2">
                      Part Time
                    </label>
                    <br />
                    <input
                      type="checkbox"
                      id="internship"
                      name="internship"
                      checked={filters.internship}
                      onChange={handleCheckboxChange}
                    />
                    <label htmlFor="internship" className="ml-2">
                      Internship
                    </label>
                    <br />
                    <input
                      type="checkbox"
                      id="freelance"
                      name="freelance"
                      checked={filters.freelance}
                      onChange={handleCheckboxChange}
                    />
                    <label htmlFor="freelance" className="ml-2">
                      Freelance
                    </label>
                  </div>
                </div>
                <hr className="horizontal-lines" />
                <div className="ml-3">
                  <h6> Type of Employment</h6>
                  <div>
                    <input type="radio" id="ten" />
                    <label htmlFor="ten" className="ml-2">
                      10LPA and Above
                    </label>
                    <br />
                    <input type="radio" id="twenty" />
                    <label htmlFor="twenty" className="ml-2">
                      20LPA and Above
                    </label>
                    <br />
                    <input type="radio" id="Thirty" />
                    <label htmlFor="Thirty" className="ml-2">
                      30LPA and Above
                    </label>
                    <br />
                    <input type="radio" id="Fourty" />
                    <label htmlFor="Fourty" className="ml-2">
                      40LPA and Above
                    </label>
                  </div>
                </div>
              </div>
              <div className="main-bg-container">
                {filteredJobs.map((job, index) => (
                  <div key={index} className="job-container">
                    <div className="conatines">
                      <h3>{job.title}</h3>
                      <div className="image-rating-con">
                        <img
                          src={job.company_logo_url}
                          alt="company-url"
                          className="company-img"
                        />
                        <p>{`⭐`.repeat(job.rating)}</p>
                      </div>
                      <div className="location-job-pacakge-container">
                        <div className="location-map-container">
                          <CiLocationOn />
                          <p className="locations">{job.location}</p>
                        </div>
                        <div className="work-jobtype">
                          <MdWorkOutline />
                          <p className="job-type">{job.employment_type}</p>
                        </div>
                        <p className="package"> {job.package_per_annum}</p>
                      </div>
                      <hr className="horizontal-line" />
                      <p className="job-description">{job.job_description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Jobs;
