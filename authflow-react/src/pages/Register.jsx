import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();

    const oldUsers = JSON.parse(localStorage.getItem("users")) || [];

    const alreadyExists = oldUsers.find((u) => u.email === email);

    if (alreadyExists) {
      setMsg(" Email already registered!");
      return;
    }

    const newUser = { fullName, email, password };

    localStorage.setItem("users", JSON.stringify([...oldUsers, newUser]));

    setMsg(" Registration successful! Redirecting to login...");

    setTimeout(() => {
      navigate("/login");
    }, 1000);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-950 px-4">
      <div className="w-full max-w-md bg-gray-900 border border-gray-800 rounded-2xl p-8 shadow-xl">
        <h2 className="text-2xl font-bold text-white text-center">Register</h2>
        <p className="text-gray-400 text-center mt-2 text-sm">
          Create your account
        </p>

        <form onSubmit={handleRegister} className="mt-6 space-y-4">
          <div>
            <label className="text-gray-300 text-sm">Full Name</label>
            <input
              type="text"
              placeholder="Enter full name"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              className="w-full mt-1 px-4 py-3 rounded-xl bg-gray-800 border border-gray-700 text-white outline-none focus:ring-2 focus:ring-green-500"
              required
            />
          </div>

          <div>
            <label className="text-gray-300 text-sm">Email</label>
            <input
              type="email"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full mt-1 px-4 py-3 rounded-xl bg-gray-800 border border-gray-700 text-white outline-none focus:ring-2 focus:ring-green-500"
              required
            />
          </div>

          <div>
            <label className="text-gray-300 text-sm">Password</label>
            <input
              type="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full mt-1 px-4 py-3 rounded-xl bg-gray-800 border border-gray-700 text-white outline-none focus:ring-2 focus:ring-green-500"
              required
            />
          </div>

          {msg && (
            <p
              className={`text-sm font-medium ${
                msg.includes("successful") ? "text-green-400" : "text-red-400"
              }`}
            >
              {msg}
            </p>
          )}

          <button
            type="submit"
            className="w-full py-3 rounded-xl bg-green-600 hover:bg-green-700 text-white font-semibold transition"
          >
            Register
          </button>

          <p className="text-center text-sm text-gray-400 mt-3">
            Already have an account?{" "}
            <Link
              to="/login"
              className="text-blue-400 hover:underline font-semibold"
            >
              Login
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;
