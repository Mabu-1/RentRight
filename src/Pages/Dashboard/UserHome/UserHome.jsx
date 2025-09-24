import { FaUser, FaEnvelope } from "react-icons/fa";
import { useContext } from "react";
import useUser from "../../../hooks/UseUser";
import Loading from "../../../Loading/Loading";
import { AuthContext } from "../../../Providers/AuthProvider";

const UserHome = () => {
  const { user } = useContext(AuthContext);
  const { data, isLoading, isError, error } = useUser();

  if (isLoading) return <Loading />;

  if (isError)
    return (
      <div className="text-red-500 text-center mt-10">
        Error: {error?.message || "Something went wrong"}
      </div>
    );

  const email = user?.email;
  const userData = data?.find((u) => u.email === email);

  return (
    <div className="flex justify-center items-center mt-10 px-4 sm:px-6 lg:px-8">
      {/* User Card */}
      <div className="bg-white border rounded-xl shadow-lg p-4 sm:p-6 w-full max-w-sm sm:max-w-md">
        {/* Avatar + Email */}
        <div className="text-center mb-4 sm:mb-6">
          <img
            src={
              userData?.image ||
              "https://www.gravatar.com/avatar/?d=mp&s=200"
            }
            alt="User Avatar"
            className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 mx-auto rounded-full border-4 border-[#eb7043] object-cover shadow-md"
          />
          <h1 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800 mt-3">
            {userData?.name || "Unnamed User"}
          </h1>
          <p className="text-gray-500 text-xs sm:text-sm md:text-base">{userData?.email}</p>
        </div>

        {/* Info Section */}
        <div className="space-y-3">
          {/* Name */}
          <div className="flex flex-col items-center sm:flex-row sm:items-center gap-1 sm:gap-3">
            <FaUser className="text-[#eb7043]" />
            <span className="font-semibold text-gray-700 text-sm sm:text-base">Name:</span>
            <span className="text-gray-600 text-sm sm:text-base">{userData?.name}</span>
          </div>

          {/* Email */}
          <div className="flex flex-col items-center sm:flex-row sm:items-center gap-1 sm:gap-3">
            <FaEnvelope className="text-[#eb7043]" />
            <span className="font-semibold text-gray-700 text-sm sm:text-base">Email:</span>
            <span className="text-gray-600 text-sm sm:text-base">{userData?.email}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserHome;
