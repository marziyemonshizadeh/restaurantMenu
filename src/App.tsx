import { Outlet } from "react-router";
import "./App.css";
import Headers from "./components/header/header";
import Navbar from "./components/navbar/navbar";

const App: React.FC = () => {
  return (
    <>
      <Headers />
      <Navbar />

      <div className="container text-light d-flex justify-content-center">
        <Outlet />
      </div>
      <div className="d-flex justify-content-center">
        <button type="button" className="btn btn-warning fw-bold px-3 m-3">
          Menu
        </button>
      </div>
    </>
  );
};

export default App;
