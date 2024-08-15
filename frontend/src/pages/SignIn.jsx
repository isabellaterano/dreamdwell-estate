import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  signInStart,
  signInSuccess,
  signInFailure,
} from "../redux/user/userSlice";
import OAuth from "../components/OAuth";

export default function SignIn() {
  const [formData, setFormData] = useState({});
  const { loading, error } = useSelector((state) => state.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      dispatch(signInStart());
      const res = await fetch("/backend/auth/signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      console.log(data);
      if (data.success === false) {
        dispatch(signInFailure(data.message));
        return;
      }
      dispatch(signInSuccess(data));
      navigate("/");
    } catch (error) {
      dispatch(signInFailure(error.message));
    }
  };

  return (
    <div className="flex h-screen items-center justify-center bg-gray-50">
      <div className="w-full max-w-md rounded-lg bg-white p-6 shadow-lg">
        <h1 className="my-7 text-center text-3xl font-semibold text-gray-800">
          Sign In
        </h1>
        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
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
            {loading ? "Loading..." : "Sign In"}
          </button>
          <OAuth />
        </form>
        <div className="mt-5 flex justify-center gap-2 text-gray-700">
          <p>Don't have an account?</p>
          <Link to={"/sign-up"}>
            <span className="font-medium text-orange-600 hover:underline">
              Sign up
            </span>
          </Link>
        </div>
        {error && <p className="mt-5 text-center text-red-600">{error}</p>}
      </div>
    </div>
  );
}
