import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();

  const currentUser = JSON.parse(localStorage.getItem("currentUser"));

  const handleLogout = () => {
    localStorage.removeItem("currentUser");
    navigate("/login");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-950 px-4">
      <div className="w-full max-w-xl bg-gray-900 border border-gray-800 rounded-2xl p-10 shadow-xl text-center">
        <h1 className="text-3xl font-bold text-white">Dashboard 🔐</h1>

        <p className="text-gray-300 mt-4 text-lg">
          Welcome,{" "}
          <span className="font-semibold text-white">
            {currentUser?.fullName}
          </span>
        </p>

        <p className="text-gray-400 mt-2">
          Email: <span className="text-white">{currentUser?.email}</span>
        </p>

        <button
          onClick={handleLogout}
          className="mt-8 px-6 py-3 rounded-xl bg-red-600 hover:bg-red-700 text-white font-semibold transition"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Dashboard;
