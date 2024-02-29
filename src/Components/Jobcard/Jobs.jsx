import { Col, Container, Row } from "react-bootstrap";
import Navbar from "../Navbar/Navbar";
import { useState, useEffect } from "react";
import Cookies from "js-cookie";
import "./Jobcard.css";
import { CiLocationOn } from "react-icons/ci";
import { MdWorkOutline } from "react-icons/md";
// import LazyLoad from "react-lazy-load";
// import { FaSearch } from "react-icons/fa";
// import { CirclesWithBar } from "react-loader-spinner";
// import { Link } from "react-router-dom";

function Jobs() {
  const [jobs, setJobs] = useState([]);
  // const [search, setSearch] = useState("");
  // const [isLoading, setIsLoading] = useState(true);

  const getJob = async () => {
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
      console.log(data);
      // setIsLoading(false);
      // the above will show the data in console.

      // console.log(data.id);
      // console.log(data.products[16].id);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    getJob();
  }, []);

  // const filteredProducts = products.filter((product) =>
  //   product.title.toLowerCase().includes(search.toLowerCase())
  // );

  return (
    <>
      <Navbar />

      <Container fluid>
        <Row>
          <Col>
          <div className="d-flex">
            <div className="filter-container">
              <h2> Type of Employment </h2>
              <h2> Type of Employment </h2>
              <h2> Type of Employment </h2>
              <h2> Type of Employment </h2>
              <h2> Type of Employment </h2>


            </div>
            <div className="main-bg-container">
              {jobs.map((item, index) => {
                const {
                  company_logo_url,
                  employment_type,
                  job_description,
                  location,
                  package_per_annum,
                  rating,
                  title,
                } = item;

                return (
                  <div key={index.id} className="job-container">
                    <div className="conatines">
                      <h3>{title}</h3>
                      <div className="image-rating-con">
                        <img
                          src={company_logo_url}
                          alt="company-url"
                          className="company-img"
                        />
                        <p>{`⭐`.repeat(rating)}</p>
                      </div>
                      <div className="location-job-pacakge-container">
                      <div className="location-map-container">
                        <CiLocationOn />
                        <p className="locations">{location}</p>
                      </div>
                      <div className="work-jobtype">
                        <MdWorkOutline />
                        <p className="job-type">{employment_type}</p>
                      </div>

                      <p className="package"> {package_per_annum}</p>
                      </div>
                      <hr className="horizontal-line"/>
                      <p className="job-description">{job_description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Jobs;
