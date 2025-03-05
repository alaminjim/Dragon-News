import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const LatestNews = () => {
  return (
    <div className="flex gap-3 items-center lg:w-[1040px] h-[60px] bg-[#F3F3F3] mt-4">
      <p className="bg-[#D72050] text-base-100 mx-3 px-3 py-2">Latest</p>
      <Marquee pauseOnHover={true} speed={80} className="space-x-12">
        <Link to="/news">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit,
          dolores molestiae voluptates doloribus rerum mollitia.
        </Link>
        <Link to="/news">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit,
          dolores molestiae voluptates doloribus rerum mollitia.
        </Link>
        <Link to="/news">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit,
          dolores molestiae voluptates doloribus rerum mollitia.
        </Link>
      </Marquee>
    </div>
  );
};

export default LatestNews;
