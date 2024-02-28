import { Col, Container, Row } from "react-bootstrap";
import Navbar from "../Navbar/Navbar";
import { useState, useEffect } from "react";
import Cookies from "js-cookie";
import "./Jobcard.css";
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
                      <div>
                        <img
                          src={company_logo_url}
                          alt="company-url"
                          className="company-img"
                        />
                      </div>

                      <p>{location}</p>
                      <p>{employment_type}</p>
                      <p>{`⭐.repeat( ${rating})`}</p>
                      <p> {package_per_annum}</p>
                      <p>{job_description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Jobs;
