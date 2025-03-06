import { FaRegStar, FaShareAlt } from "react-icons/fa";
import { MdVisibility } from "react-icons/md";

const NewsCards = ({ singleNews }) => {
  return (
    <div className="card bg-base-100 shadow-xl my-3 p-4 mr-8 lg:mr-0">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <img
            src={singleNews?.author?.img || "https://via.placeholder.com/40"}
            alt={singleNews?.author?.name || "Unknown"}
            className="w-10 h-10 rounded-full"
          />
          <div>
            <h2 className="text-sm font-semibold">
              {singleNews?.author?.name || "Unknown Author"}
            </h2>
            <p className="text-xs text-gray-500">
              {singleNews?.author?.published_date || "No date available"}
            </p>
          </div>
        </div>
        <FaShareAlt className="text-gray-500 cursor-pointer" />
      </div>

      <h2 className="text-lg font-bold mb-2">
        {singleNews?.title || "No Title Available"}
      </h2>

      <img
        src={singleNews?.image_url || "https://via.placeholder.com/300x200"}
        alt={singleNews?.title || "No Image"}
        className="w-full h-48 object-cover rounded-lg mb-4"
      />

      <p className="text-sm text-gray-600 mb-4">
        {singleNews?.details?.slice(0, 100) || "No details available"}...
        <span className="text-blue-500 cursor-pointer"> Read More</span>
      </p>

      <div className="flex justify-between items-center text-gray-500">
        <div className="flex items-center gap-1">
          <FaRegStar className="text-yellow-500" />
          <span className="text-sm font-semibold">
            {singleNews?.rating?.number || 0} (
            {singleNews?.rating?.badge || "N/A"})
          </span>
        </div>
        <div className="flex items-center gap-1">
          <MdVisibility />
          <span className="text-sm">{singleNews?.total_view || 0}</span>
        </div>
      </div>
    </div>
  );
};

export default NewsCards;
