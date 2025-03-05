import moment from "moment";
import logo from "../../assets/logo.png";

const Header = () => {
  return (
    <div className="flex flex-col justify-center items-center py-3 lg:flex lg:flex-col lg:justify-center lg:items-center lg:py-3">
      <div>
        <img className="lg:w-[450px] lg:h-[60px]" src={logo} alt="" />
      </div>
      <h1 className="text-gray-500 lg:text-lg">
        Journalism Without Fear or Favour
      </h1>
      <p className="text-gray-400 font-bold">
        {" "}
        {moment().format("dddd, MMMM Do YYYY")}
      </p>
    </div>
  );
};

export default Header;
