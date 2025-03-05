import Header from "../../Components/Header/Header";
import LatestNews from "../../Components/LatestNews/LatestNews";
import NavBar from "../../Components/NavBar/NavBar";

const Home = () => {
  return (
    <div className="lg:max-w-5xl lg:mx-auto">
      <header>
        <Header></Header>
        <section>
          <LatestNews></LatestNews>
        </section>
        <section>
          <NavBar></NavBar>
        </section>
      </header>
    </div>
  );
};

export default Home;
