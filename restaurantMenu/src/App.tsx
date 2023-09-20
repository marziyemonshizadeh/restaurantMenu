import "./App.css";
import AboutUs from "./components/aboutUs/aboutUs";
import Headers from "./components/header/header";
import Navbar from "./components/navbar/navbar";
function App() {
  return (
    <>
      <Headers />
      <Navbar />

      <div className="container">
        <AboutUs />
      </div>
    </>
  );
}

export default App;
