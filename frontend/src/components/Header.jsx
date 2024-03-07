import {
  MagnifyingGlass,
  DotsThreeOutlineVertical,
  XCircle,
} from "@phosphor-icons/react";
import { NavLink, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import house from "../assets/house.svg";

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
    <header className="bg-slate-950 shadow-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between p-3 ">
        <NavLink to="/">
          <h1 className="flex flex-wrap items-center text-sm font-bold  sm:text-xl">
            <img src={house} alt="bulding" className="w-14" />
            <span className="text-slate-300">
              <span className="border-b-2 border-b-orange-600">Dream</span>
              Dwell
            </span>
          </h1>
        </NavLink>
        <form
          onSubmit={handleSubmit}
          className=" flex items-center rounded-lg bg-slate-100 p-3"
        >
          <input
            type="text"
            placeholder="Search..."
            className="w-24 bg-transparent focus:outline-none sm:w-64"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button>
            <MagnifyingGlass className="text-slate-600" />
          </button>
        </form>

        <div
          onClick={() => setOpen(!open)}
          className="flex cursor-pointer items-center justify-center md:hidden"
        >
          {open ? (
            <XCircle color="#ea560c" />
          ) : (
            <DotsThreeOutlineVertical color="#ea560c" />
          )}
        </div>

        <ul
          className={`absolute left-0 w-full rounded-b-lg bg-slate-950 pb-2 pl-9 transition-all duration-500 ease-in md:static md:z-auto md:flex md:w-auto md:items-center md:pb-0 md:pl-0 ${
            open ? "top-16" : "top-[-490px]"
          }`}
        >
          <NavLink to="/">
            <li
              onClick={() => setOpen(false)}
              className="m-4 my-7 font-medium text-slate-50 hover:border-b-2 hover:border-b-orange-600 sm:hover:no-underline md:my-0"
            >
              Home
            </li>
          </NavLink>
          <NavLink to="/search">
            <li
              onClick={() => setOpen(false)}
              className="m-4 my-7 font-medium text-slate-50 hover:border-b-2 hover:border-b-orange-600 md:my-0"
            >
              Properties
            </li>
          </NavLink>
          <NavLink to="/profile">
            {currentUser ? (
              <img
                className="m-4 h-7  w-7 rounded-full object-cover"
                src={currentUser.avatar}
                alt="profile"
              />
            ) : (
              <button className="m-4 rounded-md bg-orange-600 p-2 text-slate-50 hover:opacity-95">
                Sign In
              </button>
            )}
          </NavLink>
        </ul>
      </div>
    </header>
  );
}
