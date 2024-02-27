import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import Login from "./Components/Login/Login";
import Jobs from "./Components/Jobcard/Jobs";
import Protected from "./Components/Protected/Protected";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Protected Comp={Home} />} />
          <Route path="/login" element={<Login />} />
          <Route path="/jobs" element={<Protected Comp={Jobs} />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
