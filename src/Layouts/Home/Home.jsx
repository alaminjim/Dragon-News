import { Outlet } from "react-router-dom";
import Header from "../../Components/Header/Header";
import LatestNews from "../../Components/LatestNews/LatestNews";
import LeftAside from "../../Components/Main-contents/LeftAside";
import MainContent from "../../Components/Main-contents/MainContent";
import RightAside from "../../Components/Main-contents/RightAside";
import NavBar from "../../Components/NavBar/NavBar";

const Home = () => {
  return (
    <div className="lg:max-w-5xl lg:mx-auto">
      <header>
        <Header></Header>
        <section>
          <LatestNews></LatestNews>
        </section>
      </header>
      <nav>
        <section>
          <NavBar></NavBar>
        </section>
      </nav>
      <main className="grid lg:grid-cols-12 gap-3 mt-14">
        <aside className="left col-span-3">
          <LeftAside></LeftAside>
        </aside>
        <nav className="col-span-6">
          <MainContent></MainContent>
          <Outlet></Outlet>
        </nav>
        <aside className="col-span-3">
          <RightAside></RightAside>
        </aside>
      </main>
    </div>
  );
};

export default Home;
