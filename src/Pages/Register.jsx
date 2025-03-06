import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Link } from "react-router-dom";

const Register = () => {
  const { createNewUser, setUser } = useContext(AuthContext);

  const handelSubmit = (e) => {
    e.preventDefault();

    const from = new FormData(e.target);
    const name = from.get("name");
    const photo = from.get("photo");
    const email = from.get("email");
    const password = from.get("password");

    console.log(name, photo, email, password);

    createNewUser(email, password)
      .then((result) => {
        const user = result.user;
        setUser(user);
        console.log(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  };

  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="card bg-base-100 w-[552px] h-[700px] shrink-0 shadow-2xl">
        <div className="card-body">
          <h1 className="text-3xl text-center pt-7 font-bold">
            Register Your Account
          </h1>
          <hr className="mt-6 text-[#E7E7E7] mx-7"></hr>
          <form onSubmit={handelSubmit} className="fieldset space-y-2 mt-5">
            <label className="fieldset-label font-bold text-sm pl-[22px]">
              Name
            </label>
            <input
              type="text"
              name="name"
              className="input w-11/12 mx-auto bg-[#F3F3F3] border-none"
              placeholder="Your name"
            />
            <label className="fieldset-label font-bold text-sm pl-[22px]">
              Photo URL
            </label>
            <input
              type="text"
              name="photo"
              className="input w-11/12 mx-auto bg-[#F3F3F3] border-none"
              placeholder="Photo URL"
            />
            <label className="fieldset-label font-bold text-sm pl-[22px]">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              className="input w-11/12 mx-auto bg-[#F3F3F3] border-none"
              placeholder="Enter your email address"
            />
            <label className="fieldset-label font-bold text-sm pl-[22px]">
              Password
            </label>
            <input
              type="password"
              name="password"
              className="input w-11/12 mx-auto bg-[#F3F3F3] border-none"
              placeholder="Enter your password"
            />
            <div>
              <fieldset className="ml-5">
                <label className="fieldset-label">
                  <input type="checkbox" className="checkbox" />
                  Accept Term & Conditions
                </label>
              </fieldset>
            </div>
            <button className="btn w-11/12 mx-auto bg-[#403F3F] text-white mt-4">
              Register
            </button>
            <p className="font-bold text-center mt-2.5">
              Already Have An Account ?
              <Link to="/auth/login">
                {" "}
                <span className="text-red-600">Login</span>
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
