import { useEffect, useState, useCallback } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import ListingItem from "../components/ListingItem";

export default function Search() {
  const navigate = useNavigate();
  const location = useLocation();
  const [sidebardata, setSidebardata] = useState({
    searchTerm: "",
    type: "all",
    parking: false,
    furnished: false,
    offer: false,
    sort: "created_at",
    order: "desc",
  });

  const [loading, setLoading] = useState(false);
  const [listings, setListings] = useState([]);
  const [showMore, setShowMore] = useState(false);

  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const fetchDataFromUrl = (param, defaultValue) =>
      urlParams.get(param) || defaultValue;

    setSidebardata({
      searchTerm: fetchDataFromUrl("searchTerm", ""),
      type: fetchDataFromUrl("type", "all"),
      parking: fetchDataFromUrl("parking", "false") === "true",
      furnished: fetchDataFromUrl("furnished", "false") === "true",
      offer: fetchDataFromUrl("offer", "false") === "true",
      sort: fetchDataFromUrl("sort", "created_at"),
      order: fetchDataFromUrl("order", "desc"),
    });

    const fetchListings = async () => {
      setLoading(true);
      setShowMore(false);
      const searchQuery = urlParams.toString();
      const res = await fetch(`/backend/listing/get?${searchQuery}`);
      const data = await res.json();
      setShowMore(data.length > 8);
      setListings(data);
      setLoading(false);
    };

    fetchListings();
  }, [location.search]);

  const handleChange = useCallback((e) => {
    const { id, value, checked, type } = e.target;
    const val = type === "checkbox" ? checked : type === "radio" ? id : value;

    setSidebardata((prev) => ({
      ...prev,
      [id]: val,
    }));
  }, []);

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();
      const urlParams = new URLSearchParams(sidebardata);
      navigate(`/search?${urlParams.toString()}`);
    },
    [sidebardata, navigate],
  );

  const onShowMoreClick = useCallback(async () => {
    const startIndex = listings.length;
    const urlParams = new URLSearchParams(location.search);
    urlParams.set("startIndex", startIndex);
    const res = await fetch(`/backend/listing/get?${urlParams.toString()}`);
    const data = await res.json();
    setShowMore(data.length >= 9);
    setListings((prev) => [...prev, ...data]);
  }, [listings, location.search]);

  return (
    <div className="flex flex-col md:flex-row">
      <div className="border-b-2 p-7 md:min-h-screen md:border-r-2">
        <form onSubmit={handleSubmit} className="flex flex-col gap-8">
          <div className="flex items-center gap-2">
            <label
              htmlFor="searchTerm"
              className="whitespace-nowrap font-semibold"
            >
              Search Term:
            </label>
            <input
              type="text"
              id="searchTerm"
              placeholder="Search..."
              className="w-full rounded-lg border p-3"
              value={sidebardata.searchTerm}
              onChange={handleChange}
              aria-label="Search Term"
            />
          </div>
          <div className="flex flex-wrap items-center gap-2">
            <label className="font-semibold">Type:</label>
            <div className="flex gap-2">
              <input
                type="radio"
                id="all"
                name="type"
                className="w-5"
                onChange={handleChange}
                checked={sidebardata.type === "all"}
                aria-label="Rent & Sale"
              />
              <span>Rent & Sale</span>
            </div>
            <div className="flex gap-2">
              <input
                type="radio"
                id="rent"
                name="type"
                className="w-5"
                onChange={handleChange}
                checked={sidebardata.type === "rent"}
                aria-label="Rent"
              />
              <span>Rent</span>
            </div>
            <div className="flex gap-2">
              <input
                type="radio"
                id="sale"
                name="type"
                className="w-5"
                onChange={handleChange}
                checked={sidebardata.type === "sale"}
                aria-label="Sale"
              />
              <span>Sale</span>
            </div>
          </div>
          <div className="flex flex-wrap items-center gap-2">
            <label className="font-semibold">Amenities:</label>
            <div className="flex gap-2">
              <input
                type="checkbox"
                id="parking"
                className="w-5"
                onChange={handleChange}
                checked={sidebardata.parking}
                aria-label="Parking"
              />
              <span>Parking</span>
            </div>
            <div className="flex gap-2">
              <input
                type="checkbox"
                id="furnished"
                className="w-5"
                onChange={handleChange}
                checked={sidebardata.furnished}
                aria-label="Furnished"
              />
              <span>Furnished</span>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <label htmlFor="sort_order" className="font-semibold">
              Sort:
            </label>
            <select
              id="sort_order"
              onChange={handleChange}
              value={`${sidebardata.sort}_${sidebardata.order}`}
              className="rounded-lg border p-3"
              aria-label="Sort Order"
            >
              <option value="regularPrice_desc">Price high to low</option>
              <option value="regularPrice_asc">Price low to high</option>
              <option value="createdAt_desc">Latest</option>
              <option value="createdAt_asc">Oldest</option>
            </select>
          </div>
          <button className="rounded-lg bg-orange-600 p-3 uppercase text-white hover:opacity-95">
            Search
          </button>
        </form>
      </div>
      <div className="flex-1">
        <h1 className="mt-5 border-b p-3 text-3xl font-semibold text-slate-700">
          Listing results:
        </h1>
        <div className="flex flex-wrap gap-4 p-7">
          {!loading && listings.length === 0 && (
            <p className="text-xl text-slate-700">No listings found!</p>
          )}
          {loading && (
            <p className="w-full text-center text-xl text-slate-700">
              Loading...
            </p>
          )}

          {!loading &&
            listings.map((listing) => (
              <ListingItem key={listing._id} listing={listing} />
            ))}

          {showMore && (
            <button
              onClick={onShowMoreClick}
              className="w-full p-7 text-center text-green-700 hover:underline"
              aria-label="Show More"
            >
              Show more
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
