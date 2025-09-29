import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import useReview from "../../../hooks/useReview";
import Loading from "../../../Loading/Loading";
import Headline from "../../../Shared/Headline/Headline";
import Card from "./Card";

const Testimonial = () => {
  const { data, isLoading, isError, error } = useReview();
  const [currentPage, setCurrentPage] = useState(1);
  const [filterOption, setFilterOption] = useState("latest"); // latest | 1-5 stars
  const reviewsPerPage = 4;

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
    AOS.refresh();
  }, []);

  if (isLoading) return <Loading />;
  if (isError)
    return <div className="text-red-500 text-center">Error: {error.message}</div>;
  if (!data || data.length === 0)
    return <div className="text-center text-gray-500">No Testimonials found.</div>;

  // Filter reviews
  let filteredReviews = [...data];
  if (filterOption === "latest") {
    filteredReviews = filteredReviews.sort(
      (a, b) => new Date(b.date) - new Date(a.date)
    );
  } else {
    const star = parseInt(filterOption);
    filteredReviews = filteredReviews.filter((r) => r.star === star);
  }

  // Pagination logic
  const indexOfLastReview = currentPage * reviewsPerPage;
  const indexOfFirstReview = indexOfLastReview - reviewsPerPage;
  const currentReviews = filteredReviews.slice(
    indexOfFirstReview,
    indexOfLastReview
  );
  const totalPages = Math.ceil(filteredReviews.length / reviewsPerPage);

  return (
    <div className="my-12">
      {/* Section Heading */}
      <div data-aos="fade-up" className="text-center max-w-2xl mx-auto">
        <Headline subheading1="TESTIMONIALS" headline1="The Words Of Clients" />
        <p className="text-gray-500 mt-3 text-sm sm:text-base">
          Aliquet enim tortor at auctor urna nunc id cursus. Mattis molestie a
          iaculis at erat pellentesque adipiscing commodo elit.
        </p>
      </div>

      {/* Filter Controls */}
      <div className="flex justify-center mt-6 gap-4">
        <select
          className="border border-gray-300 rounded-lg px-3 py-2 text-sm mabu-text2 focus:outline-none focus:ring-2 focus:ring-[#eb7043]"
          value={filterOption}
          onChange={(e) => {
            setFilterOption(e.target.value);
            setCurrentPage(1); // reset to first page when filter changes
          }}
        >
          <option value="latest">Latest</option>
          <option value="5">5 Stars</option>
          <option value="4">4 Stars</option>
          <option value="3">3 Stars</option>
          <option value="2">2 Stars</option>
          <option value="1">1 Star</option>
        </select>
      </div>

      {/* Reviews List (one per row) */}
      <div className="flex flex-col gap-6 mt-8" data-aos="fade-up">
        {currentReviews.length > 0 ? (
          currentReviews.map((review) => (
            <Card key={review._id} review={review} />
          ))
        ) : (
          <div className="text-center text-gray-500">
            No reviews found for this filter.
          </div>
        )}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex justify-center mt-8 gap-2">
          <button
            disabled={currentPage === 1}
            onClick={() => setCurrentPage((prev) => prev - 1)}
            className={`px-4 py-2 rounded-lg border ${
              currentPage === 1
                ? "text-gray-400 border-gray-300 cursor-not-allowed"
                : "text-[#eb7043] border-[#eb7043] hover:bg-[#eb7043] hover:text-white"
            }`}
          >
            Prev
          </button>

          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i + 1}
              onClick={() => setCurrentPage(i + 1)}
              className={`px-3 py-1 rounded-lg border ${
                currentPage === i + 1
                  ? "bg-[#eb7043] text-white border-[#eb7043]"
                  : "border-gray-300 text-gray-600 hover:border-[#eb7043] hover:text-[#eb7043]"
              }`}
            >
              {i + 1}
            </button>
          ))}

          <button
            disabled={currentPage === totalPages}
            onClick={() => setCurrentPage((prev) => prev + 1)}
            className={`px-4 py-2 rounded-lg border ${
              currentPage === totalPages
                ? "text-gray-400 border-gray-300 cursor-not-allowed"
                : "text-[#eb7043] border-[#eb7043] hover:bg-[#eb7043] hover:text-white"
            }`}
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
};

export default Testimonial;
