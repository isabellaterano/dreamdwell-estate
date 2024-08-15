import {
  MagnifyingGlass,
  DotsThreeOutlineVertical,
  XCircle,
} from "@phosphor-icons/react";
import { NavLink, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import house from "/house.svg";

export default function Header() {
  const { currentUser } = useSelector((state) => state.user);
  const [searchTerm, setSearchTerm] = useState("");
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const urlParams = new URLSearchParams(window.location.search);
    urlParams.set("searchTerm", searchTerm);
    const searchQuery = urlParams.toString();
    navigate(`/search?${searchQuery}`);
  };

  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const searchTermFromUrl = urlParams.get("searchTerm");
    if (searchTermFromUrl) {
      setSearchTerm(searchTermFromUrl);
    }
  }, [location.search]);

  return (
    <header className="bg-white shadow-lg">
      <div className="mx-auto flex max-w-7xl items-center justify-between p-4">
        <NavLink to="/">
          <h1 className="flex items-center text-xl font-bold text-gray-800">
            <img src={house} alt="building" className="mr-2 w-12" />
            <span className="text-gray-900">
              <span className="text-orange-600">Dream</span>Dwell
            </span>
          </h1>
        </NavLink>
        <form
          onSubmit={handleSubmit}
          className="flex items-center rounded-lg bg-gray-100 p-2 shadow-md"
        >
          <input
            type="text"
            placeholder="Search for properties..."
            className="w-32 bg-transparent focus:outline-none sm:w-80"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button>
            <MagnifyingGlass className="text-gray-600" />
          </button>
        </form>

        <div
          onClick={() => setOpen(!open)}
          className="flex cursor-pointer items-center justify-center md:hidden"
        >
          {open ? (
            <XCircle className="text-orange-600" />
          ) : (
            <DotsThreeOutlineVertical className="text-orange-600" />
          )}
        </div>

        <ul
          className={`absolute left-0 w-full bg-white pb-4 transition-all duration-500 ease-in md:static md:flex md:w-auto md:items-center md:pb-0 ${
            open ? "top-16" : "top-[-490px]"
          }`}
        >
          <NavLink to="/">
            <li
              onClick={() => setOpen(false)}
              className="m-4 my-7 font-medium text-gray-800 hover:text-orange-600 md:my-0"
            >
              Home
            </li>
          </NavLink>
          <NavLink to="/about">
            <li
              onClick={() => setOpen(false)}
              className="m-4 my-7 font-medium text-gray-800 hover:text-orange-600 md:my-0"
            >
              About Us
            </li>
          </NavLink>
          <NavLink to="/search">
            <li
              onClick={() => setOpen(false)}
              className="m-4 my-7 font-medium text-gray-800 hover:text-orange-600 md:my-0"
            >
              Properties
            </li>
          </NavLink>
          <NavLink to="/profile">
            {currentUser ? (
              <img
                className="m-4 h-8 w-8 rounded-full object-cover"
                src={currentUser.avatar}
                alt="profile"
              />
            ) : (
              <button className="m-4 rounded-md bg-orange-600 px-4 py-2 text-white hover:bg-orange-700">
                Sign In
              </button>
            )}
          </NavLink>
        </ul>
      </div>
    </header>
  );
}
