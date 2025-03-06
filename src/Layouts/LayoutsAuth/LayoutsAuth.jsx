import { Outlet } from "react-router-dom";
import NavBar from "../../Components/NavBar/NavBar";

const LayoutsAuth = () => {
  return (
    <div className="py-7 bg-[#F3F3F3] max-w-5xl  mx-auto">
      <section>
        <NavBar></NavBar>
      </section>
      <Outlet></Outlet>
    </div>
  );
};

export default LayoutsAuth;
