import { useState, useEffect, useCallback } from "react";
import { Col, Container, Row, Button } from "react-bootstrap";
import Navbar from "../Navbar/Navbar";
import Cookies from "js-cookie";
import { FaSearch } from "react-icons/fa";
import { CiLocationOn } from "react-icons/ci";
import { MdWorkOutline } from "react-icons/md";
import "./Jobcard.css";
import { DNA } from "react-loader-spinner";
import { Link } from "react-router-dom";

function Jobs() {
  const [jobs, setJobs] = useState([]);
  const [filteredJobs, setFilteredJobs] = useState([]);
  const [search, setSearch] = useState("");
  const [selectedJobType, setSelectedJobType] = useState("");
  const [selectedSalaryFilter, setSelectedSalaryFilter] = useState("");
  const [filterApplied, setFilterApplied] = useState(false);
  const [loading, setLoading] = useState(true);

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
      setLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    getJobs();
  }, []);

  const applyFilters = useCallback(() => {
    let updatedFilteredJobs = jobs.filter((job) => {
      const titleMatches = job.title
        .toLowerCase()
        .includes(search.toLowerCase());
      const jobTypeMatches =
        !selectedJobType || job.employment_type === selectedJobType;
      const salaryMatches =
        !selectedSalaryFilter ||
        (selectedSalaryFilter === "10" &&
          parseFloat(job.package_per_annum) >= 10) ||
        (selectedSalaryFilter === "20" &&
          parseFloat(job.package_per_annum) >= 20) ||
        (selectedSalaryFilter === "30" &&
          parseFloat(job.package_per_annum) >= 30) ||
        (selectedSalaryFilter === "40" &&
          parseFloat(job.package_per_annum) >= 40);

      return titleMatches && jobTypeMatches && salaryMatches;
    });

    setFilteredJobs(updatedFilteredJobs);
    setFilterApplied(true);
  }, [jobs, search, selectedJobType, selectedSalaryFilter]);

  useEffect(() => {
    applyFilters();
  }, [applyFilters]);

  const handleSearchChange = (event) => {
    setSearch(event.target.value);
  };

  const handleJobTypeChange = (event) => {
    setSelectedJobType(event.target.value);
  };

  const handleSalaryFilterChange = (event) => {
    setSelectedSalaryFilter(event.target.value);
  };

  const clearFilters = () => {
    setSearch("");
    setSelectedJobType("");
    setSelectedSalaryFilter("");
    setFilteredJobs(jobs);
    setFilterApplied(false);
  };

  return (
    <>
      <Navbar />
      <Container fluid>
        <Row>
          <Col>
            <div className=" bgs-container">
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

                  <div>
                    <input
                      type="radio"
                      id="fullTime"
                      name="jobType"
                      value="Full Time"
                      checked={selectedJobType === "Full Time"}
                      onChange={handleJobTypeChange}
                    />
                    <label htmlFor="fullTime" className="ml-2">
                      Full Time
                    </label>
                    <br />
                    <input
                      type="radio"
                      id="partTime"
                      name="jobType"
                      value="Part Time"
                      checked={selectedJobType === "Part Time"}
                      onChange={handleJobTypeChange}
                    />
                    <label htmlFor="partTime" className="ml-2">
                      Part Time
                    </label>
                    <br />
                    <input
                      type="radio"
                      id="internship"
                      name="jobType"
                      value="Internship"
                      checked={selectedJobType === "Internship"}
                      onChange={handleJobTypeChange}
                    />
                    <label htmlFor="internship" className="ml-2">
                      Internship
                    </label>
                    <br />
                    <input
                      type="radio"
                      id="freelance"
                      name="jobType"
                      value="Freelance"
                      checked={selectedJobType === "Freelance"}
                      onChange={handleJobTypeChange}
                    />
                    <label htmlFor="freelance" className="ml-2">
                      Freelance
                    </label>
                  </div>
                </div>
                <hr className="horizontal-lines" />
                <div className="ml-3">
                  <h6> Salary</h6>
                  <div>
                    <input
                      type="radio"
                      id="ten"
                      name="salaryFilter"
                      value="10"
                      checked={selectedSalaryFilter === "10"}
                      onChange={handleSalaryFilterChange}
                    />
                    <label htmlFor="ten" className="ml-2">
                      10LPA and Above
                    </label>
                    <br />
                    <input
                      type="radio"
                      id="twenty"
                      name="salaryFilter"
                      value="20"
                      checked={selectedSalaryFilter === "20"}
                      onChange={handleSalaryFilterChange}
                    />
                    <label htmlFor="twenty" className="ml-2">
                      20LPA and Above
                    </label>
                    <br />
                    <input
                      type="radio"
                      id="thirty"
                      name="salaryFilter"
                      value="30"
                      checked={selectedSalaryFilter === "30"}
                      onChange={handleSalaryFilterChange}
                    />
                    <label htmlFor="thirty" className="ml-2">
                      30LPA and Above
                    </label>
                    <br />
                    <input
                      type="radio"
                      id="forty"
                      name="salaryFilter"
                      value="40"
                      checked={selectedSalaryFilter === "40"}
                      onChange={handleSalaryFilterChange}
                    />
                    <label htmlFor="forty" className="ml-2">
                      40LPA and Above
                    </label>
                  </div>
                </div>
                <hr className="horizontal-lines" />
                <div className="ml-3">
                  <Button
                    variant="secondary"
                    className="clearbtns"
                    onClick={clearFilters}
                  >
                    Clear Filters
                  </Button>
                </div>
              </div>
              <div className="main-bg-container">
                {loading ? (
                  <div className="loader-container">
                    <DNA height={180} width={180} />
                  </div>
                ) : filterApplied && filteredJobs.length === 0 ? (
                  <div className="no-job-found-container">
                    <img
                      src="https://assets.ccbp.in/frontend/react-js/no-jobs-img.png"
                      alt="no-jobs-found"
                      className="no-job-found-image"
                    />

                    <p className="no-job-found-errormsg">
                      No jobs found matching the selected criteria.
                    </p>
                  </div>
                ) : (
                  filteredJobs.map((job, index) => (
                    <div key={index} className="job-container">
                      <div className="conatines ">
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
                        <button className="btsns">
                          <Link to={`/jobs/${job.id}`}> Apply now </Link>
                        </button>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Jobs;
