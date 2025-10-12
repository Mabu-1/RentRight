const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-center bg-gradient-to-br from-[#1E1E2F] via-[#2C2C3F] to-[#3A3A50] text-gray-200">
      <h1 className="text-5xl md:text-6xl font-bold mb-4 text-[#EB7043]">404 - Page Not Found</h1>
      <p className="text-xl md:text-2xl mb-8">
        Oops! The page you're looking for doesn't exist.
      </p>
      <a
        href="/"
        className="px-6 py-3 bg-[#EB7043] text-gray-900 font-semibold rounded-lg hover:bg-[#EB7043] transition duration-300"
      >
        Go Home
      </a>
    </div>
  );
};

export default NotFound;
