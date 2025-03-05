import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const JoinUs = () => {
  return (
    <div className="mt-12">
      <h1 className="font-bold text-center">Find Us On</h1>
      <div className="join flex join-vertical *:bg-base-100 mt-3 lg:ml-0.5 ml-2.5">
        <button className="btn join-item justify-start">
          <FaFacebook className="w-5 h-5"></FaFacebook>Facebook
        </button>
        <button className="btn join-item justify-start">
          <FaTwitter className="w-5 h-5"></FaTwitter>Twitter
        </button>
        <button className="btn join-item justify-start">
          <FaInstagram className="w-5 h-5"></FaInstagram> Instagram
        </button>
      </div>
    </div>
  );
};

export default JoinUs;
