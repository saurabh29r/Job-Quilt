import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Cookies from "js-cookie";

function Protected(props) {
  const { Comp } = props;

  const navigate = useNavigate();

  useEffect(() => {
    const jwtToken = Cookies.get("jwt_token");
    if (jwtToken === undefined) {
      navigate("/login", { replace: true });
    }
  }, [navigate]);

  return (
    <div>
      <Comp />
    </div>
  );
}

export default Protected;
