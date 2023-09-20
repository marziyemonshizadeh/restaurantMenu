import "./navbar.css";
const Navbar = () => {
  return (
    <>
      <div className="navbar d-flex justify-content-center">
        <div className="p-2 border-bottom border-warning border-3">
          اطلاعات تماس{" "}
        </div>
        <div className="p-2 border-bottom border-warning border-3">
          ساعات کاری
        </div>
        <div className="p-2 border-bottom border-warning border-3">
          درباره ی ما
        </div>
      </div>
    </>
  );
};

export default Navbar;
