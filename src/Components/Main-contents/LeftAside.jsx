import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const LeftAside = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("https://openapi.programming-hero.com/api/news/categories")
      .then((res) => res.json())
      .then((data) => setCategories(data.data.news_category))
      .catch((error) => console.log(error.message));
  }, []);
  return (
    <div>
      <h1 className="font-semibold lg:ml-0.5 text-center">All Categories</h1>
      <div className="flex flex-col gap-3 my-6 lg:ml-0.5 justify-center items-center ml-9">
        {categories.map((category) => (
          <NavLink
            to={`/category/${category.category_id}`}
            className="w-[265px] h-[65px] text-gray-500 outline-1 outline-gray-200 font-semibold text-center pt-5"
            key={category.category_id}
          >
            {category.category_name}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default LeftAside;
