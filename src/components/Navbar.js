import { Link } from "react-router-dom";
import "../styles/Navbar.css";

function Navbar() {
  return (
    <div className="navbar">
      <div className="leftside">
        <img
          src={
            "https://image.similarpng.com/very-thumbnail/2020/05/Pizza-logo-design-template-Vector-PNG.png"
          }
          alt=""
        />
      </div>
      <div className="rightside">
        <Link to="/">Home</Link>
        <Link to="/menu">Menu</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </div>
  );
}
export default Navbar;
