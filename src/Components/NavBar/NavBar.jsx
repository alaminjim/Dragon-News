import { Link } from "react-router-dom";
import userIcon from "../../assets/user.png";

const NavBar = () => {
  return (
    <div className="flex justify-between lg:justify-between items-center my-6">
      <div className=""></div>
      <div className="space-x-2.5 lg:space-x-5">
        <Link to="/">Home</Link>
        <Link>Career</Link>
        <Link>About</Link>
      </div>
      <div className="flex space-x-2.5  items-center">
        <div>
          <img src={userIcon} alt="" />
        </div>
        <Link to="/auth/login" className="btn btn-neutral rounded-none mr-1.5">
          Login
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
