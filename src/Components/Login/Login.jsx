import { Container, Row, Col, Form } from "react-bootstrap";
import "./Login.css";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

function Login() {
  const [username, setUser] = useState("");
  const [password, setPass] = useState("");
  const [showErro, setShowError] = useState(false);

  let navigate = useNavigate();
  // here useNavigate hook is used for navigate from one page to another page.

  const handleSubmit = async (e) => {
    e.preventDefault();
    const userDetais = { username, password };

    const url = "https://apis.ccbp.in/login";
    const options = {
      method: "POST",

      body: JSON.stringify(userDetais),
    };
    const response = await fetch(url, options);
    const data = await response.json();
    console.log(data);
    console.log(response);

    if (response.ok === true) {
      navigate("../", { replace: true });
      Cookies.set("jwt_token", data.jwt_token, {
        expires: 5,
      });
      // here we should remember that we use ../ to fix the page on the current location and disable back button
    } else {
      navigate("/login");
      console.log(data.error_msg);
      setShowError(data.error_msg);
    }
  };

  useEffect(() => {
    const jwtToken = Cookies.get("jwt_token");
    if (jwtToken !== undefined) {
      navigate("/", { replace: true });
      console.log("jwt_token.value");
    } else {
      navigate("/login", { replace: true });
    }
  }, [navigate]);

  return (
    <Container className="main-content" fluid>
      {/* this fluid is used a special class */}
      <Row>
        <Col className="d-flex justify-content-center  align-items-center pt-5 ">
          <div className="form-container p-3">
            <Form>
              <div className="logo-heading text-center mb-5">
                <h1> JobQuilt </h1>
                <p className="logo-para"> Find a job which suits you.</p>
              </div>
              <div>
                <label htmlFor="users" className="label-element">
                  {" "}
                  Username
                </label>
                <input
                  type="text"
                  id="users"
                  placeholder="Username:rahul"
                  className=" input-class"
                  name="users"
                  value={username}
                  onChange={(e) => setUser(e.target.value)}
                />
              </div>
              <div className="mt-2">
                <label htmlFor="pass" className="label-element">
                  {" "}
                  Password
                </label>

                <input
                  type="password"
                  id="pass"
                  placeholder="Password:rahul@2021"
                  className=" input-class"
                  name="pass"
                  value={password}
                  onChange={(e) => setPass(e.target.value)}
                />
              </div>
              <br />
              <div>
                <button
                  type="submit"
                  className="btn btn-primary btnss"
                  onClick={handleSubmit}
                >
                  Submit
                </button>
              </div>
              <div>
                {showErro && <div className="error-msg-api"> {showErro} </div>}
              </div>
            </Form>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Login;
