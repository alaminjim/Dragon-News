import { useLoaderData } from "react-router-dom";
import NewsCards from "../Components/Cards/NewsCards";

const Categories = () => {
  const { data: news } = useLoaderData();

  console.log(news);
  return (
    <div>
      <h1 className="font-semibold ml-9">Dragon News Home</h1>
      <div className="ml-8 mt-5">
        {news.map((singleNews) => (
          <NewsCards key={singleNews._id} singleNews={singleNews}></NewsCards>
        ))}
      </div>
    </div>
  );
};

export default Categories;
