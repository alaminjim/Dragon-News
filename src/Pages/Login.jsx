import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";

const Login = () => {
  const { createUserLogIn, setUser } = useContext(AuthContext);

  const handelLogin = (e) => {
    e.preventDefault();

    const from = new FormData(e.target);
    const email = from.get("email");
    const password = from.get("password");

    console.log(email, password);

    createUserLogIn(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        setUser(user);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="card bg-base-100 w-[552px] h-[500px] shrink-0 shadow-2xl">
        <div className="card-body">
          <h1 className="text-3xl text-center pt-7 font-bold">
            Login Your Account
          </h1>
          <hr className="mt-6 text-[#E7E7E7] mx-7"></hr>
          <form onSubmit={handelLogin} className="fieldset mt-5">
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
              <a className="link link-hover font-bold pl-[22px] text-sm">
                Forgot password?
              </a>
            </div>
            <button className="btn w-11/12 mx-auto bg-[#403F3F] text-white mt-4">
              Login
            </button>
            <p className="font-bold text-center mt-2.5">
              Dont't Have An Account ?
              <Link to="/auth/register">
                {" "}
                <span className="text-red-600">Register</span>
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
