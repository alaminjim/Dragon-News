import { NavLink } from "react-router-dom";
import userIcon from "../../assets/user.png";

const NavBar = () => {
  return (
    <div className="flex justify-between lg:justify-between items-center my-6">
      <div className=""></div>
      <div className="space-x-2.5 lg:space-x-5">
        <NavLink>Home</NavLink>
        <NavLink>Career</NavLink>
        <NavLink>About</NavLink>
      </div>
      <div className="flex space-x-2.5  items-center">
        <div>
          <img src={userIcon} alt="" />
        </div>
        <button className="btn btn-neutral rounded-none mr-1.5">Login</button>
      </div>
    </div>
  );
};

export default NavBar;
