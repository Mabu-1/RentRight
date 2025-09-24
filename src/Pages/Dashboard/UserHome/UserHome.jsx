import { FaUser, FaEnvelope } from "react-icons/fa";
import { useContext } from "react";
import useUser from "../../../hooks/UseUser";
import Loading from "../../../Loading/Loading";
import { AuthContext } from "../../../Providers/AuthProvider";

const UserHome = () => {
  const { user } = useContext(AuthContext);
  const { data, isLoading, isError, error } = useUser();

  if (isLoading) {
    return <Loading />;
  }

  if (isError) {
    return (
      <div className="text-red-500 text-center">
        Error: {error?.message || "Something went wrong"}
      </div>
    );
  }

  const email = user?.email;
  const userData = data?.find((u) => u.email === email);

  return (
    <div className="flex justify-center items-center mt-10 px-4">
      {/* User Information Card */}
      <div className="bg-white border rounded-xl shadow-lg p-6 w-full max-w-lg">
        {/* Avatar + Email */}
        <div className="text-center mb-6">
          <img
            src={
              userData?.image ||
              "https://www.gravatar.com/avatar/?d=mp&s=200"
            }
            alt="User Avatar"
            className="w-32 h-32 md:w-40 md:h-40 mx-auto rounded-full border-4 border-[#eb7043] object-cover shadow-md"
          />
          <h1 className="text-xl md:text-2xl font-bold text-gray-800 mt-4">
            {userData?.name || "Unnamed User"}
          </h1>
          <p className="text-gray-500 text-sm md:text-base">{userData?.email}</p>
        </div>

        {/* Info Section */}
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <FaUser className="text-[#eb7043]" />
            <span className="font-semibold text-gray-700">Name:</span>
            <span className="text-gray-600">{userData?.name}</span>
          </div>

          <div className="flex items-center gap-3">
            <FaEnvelope className="text-[#eb7043]" />
            <span className="font-semibold text-gray-700">Email:</span>
            <span className="text-gray-600">{userData?.email}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserHome;
