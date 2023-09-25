import { Link } from "react-router-dom";
import "./navbar.css";
// interface Navbar{
//   onClick: ()=> void;
// }
const Navbar: React.FC = () => {
  return (
    <>
      <div className="navbar d-flex justify-content-center">
        <Link
          to="/"
          className="p-2 border-bottom border-warning border-3 text-light"
        >
          درباره ی ما
        </Link>
        <Link
          to="/"
          className="p-2 border-bottom border-warning border-3 text-light"
        >
          ساعات کاری
        </Link>
        {/* <div className="p-2 border-bottom border-warning border-3"></div> */}
        <Link
          to="/"
          className="p-2 border-bottom border-warning border-3 text-light"
        >
          اطلاعات تماس
        </Link>
      </div>
    </>
  );
};

export default Navbar;
