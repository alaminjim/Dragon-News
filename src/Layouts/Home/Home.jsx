import Header from "../../Components/Header/Header";
import LatestNews from "../../Components/LatestNews/LatestNews";

const Home = () => {
  return (
    <div className="lg:max-w-5xl lg:mx-auto">
      <header>
        <Header></Header>
        <section>
          <LatestNews></LatestNews>
        </section>
      </header>
    </div>
  );
};

export default Home;
