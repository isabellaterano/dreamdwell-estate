import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import OAuth from "../components/OAuth";

export default function SignUp() {
  const [formData, setFormData] = useState({});
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const res = await fetch("/backend/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      console.log(data);
      if (data.success === false) {
        setLoading(false);
        setError(data.message);
        return;
      }
      setLoading(false);
      setError(null);
      navigate("/sign-in");
    } catch (error) {
      setLoading(false);
      setError(error.message);
    }
  };

  return (
    <div className="flex h-screen items-center justify-center bg-gray-50">
      <div className="w-full max-w-md rounded-lg bg-white p-6 shadow-lg">
        <h1 className="my-7 text-center text-3xl font-semibold text-gray-800">
          Sign Up
        </h1>
        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          <input
            type="text"
            placeholder="Username"
            className="rounded-lg border border-gray-300 p-3 focus:border-orange-600 focus:outline-none"
            id="username"
            onChange={handleChange}
          />
          <input
            type="email"
            placeholder="Email"
            className="rounded-lg border border-gray-300 p-3 focus:border-orange-600 focus:outline-none"
            id="email"
            onChange={handleChange}
          />
          <input
            type="password"
            placeholder="Password"
            className="rounded-lg border border-gray-300 p-3 focus:border-orange-600 focus:outline-none"
            id="password"
            onChange={handleChange}
          />

          <button
            disabled={loading}
            className="rounded-lg bg-orange-600 p-3 uppercase text-white hover:opacity-95 disabled:opacity-80"
          >
            {loading ? "Loading..." : "Sign Up"}
          </button>
          <OAuth />
        </form>
        <div className="mt-5 flex justify-center gap-2 text-gray-700">
          <p>Have an account?</p>
          <Link to="/sign-in">
            <span className="font-medium text-orange-600 hover:underline">
              Sign in
            </span>
          </Link>
        </div>
        {error && <p className="mt-5 text-center text-red-600">{error}</p>}
      </div>
    </div>
  );
}
