import { Link } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import "./Home.css";

function Home() {
  return (
    <>
      <Navbar />

      <div className="bg-containers">
        <h1 className="main-heading"> Find a job which suits you</h1>
        <div className="home-para">
          <p>
            Millions of people are searching for jobs, salary information,
            company reviews.
            <br />
            Find the job that fits your abilities and potential
          </p>
        </div>
        <div className="ml-2">
          <button className="btns ">
            <Link to="/jobs">Find Jobs</Link>
          </button>
        </div>
      </div>
    </>
  );
}

export default Home;
