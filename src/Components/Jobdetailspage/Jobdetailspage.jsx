import { useState, useEffect } from "react";
import "./Jobdetailspage.css";
import { Link, useParams } from "react-router-dom";
import Cookies from "js-cookie";
import Jobs from "../Jobcard/Jobs";

function Jobdetailspage() {
  const [job, setDetailJob] = useState({});
  const params = useParams();
  const { id } = params;

  const getJobDetails = async () => {
    try {
      const jwtToken = Cookies.get("jwt_token");
      const apiUrl = "https://apis.ccbp.in/jobs/" + `${id}`;

      const options = {
        headers: {
          Authorization: `Bearer ${jwtToken}`,
        },
        method: "GET",
      };

      const response = await fetch(apiUrl, options);
      const data = await response.json();

      setDetailJob(data);
      console.log(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    getJobDetails();
  }, []);

  return (
    <div>
      <div>hi</div>
    </div>
  );
}

export default Jobdetailspage;
