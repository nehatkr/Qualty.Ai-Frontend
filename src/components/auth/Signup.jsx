import { useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();
  const handleCardClick = (route, e) => {
    if (e.target.tagName === 'BUTTON') {
      return;
    }
    navigate(route);
  };

  const handleButtonClick = (route, e) => {
    e.preventDefault();
    e.stopPropagation();
    navigate(route);
  };

  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center py-12 px-4">
      <div className="max-w-2xl w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-white">
            Choose Your Role
          </h2>
          <p className="mt-2 text-center text-sm text-gray-400">
            Select the role that best describes you
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Customer Card */}
          <div
            onClick={(e) => handleCardClick("/signup/customer", e)}
            className="cursor-pointer bg-gray-800 p-6 rounded-lg border-2 border-gray-700 hover:border-green-500 transition-all duration-200 hover:shadow-lg flex flex-col h-full"
          >
            <div className="text-center flex-1 flex flex-col">
              <h3 className="text-lg font-semibold text-white mb-2">
                Customer
              </h3>
              <p className="text-sm text-gray-400 mb-4 flex-1">
                Request and manage inspections
              </p>
              <button 
                onClick={(e) => handleButtonClick("/signup/customer", e)}
                className="cursor-pointer w-full py-2 px-4 text-white rounded-md bg-green-600 hover:bg-green-700 transition-colors mt-auto"
              >
                Sign up as Customer
              </button>
            </div>
          </div>

          {/* Inspector Card */}
          <div
            onClick={(e) => handleCardClick("/signup/inspector", e)}
            className="cursor-pointer bg-gray-800 p-6 rounded-lg border-2 border-gray-700 hover:border-purple-500 transition-all duration-200 hover:shadow-lg flex flex-col h-full"
          >
            <div className="text-center flex-1 flex flex-col">
              <h3 className="text-lg font-semibold text-white mb-2">
                Inspector
              </h3>
              <p className="text-sm text-gray-400 mb-4 flex-1">
                Perform inspections and submit reports
              </p>
              <button 
                onClick={(e) => handleButtonClick("/signup/inspector", e)}
                className="cursor-pointer w-full py-2 px-4 text-white rounded-md bg-purple-600 hover:bg-purple-700 transition-colors mt-auto"
              >
                Sign up as Inspector
              </button>
            </div>
          </div>

          {/* Company Card */}
          {/* <div
            onClick={(e) => handleCardClick("/signup/company", e)}
            className="cursor-pointer bg-gray-800 p-6 rounded-lg border-2 border-gray-700 hover:border-orange-500 transition-all duration-200 hover:shadow-lg flex flex-col h-full"
          >
            <div className="text-center flex-1 flex flex-col">
              <h3 className="text-lg font-semibold text-white mb-2">
                Inspection Company
              </h3>
              <p className="text-sm text-gray-400 mb-4 flex-1">
                Manage inspectors and company operations
              </p>
              <button 
                onClick={(e) => handleButtonClick("/signup/company", e)}
                className="cursor-pointer w-full py-2 px-4 text-white rounded-md bg-orange-600 hover:bg-orange-700 transition-colors mt-auto"
              >
                Sign up as Company
              </button>
            </div>
          </div> */}
        </div>

        <div className="text-center">
          <span className="text-sm text-gray-400">
            Already have an account?{" "}
            <button
              onClick={() => navigate("/login")}
              className="font-medium text-blue-400 hover:text-blue-300"
            >
              Sign in
            </button>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Signup;