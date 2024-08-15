import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ListingItem from "../components/ListingItem";
import Hero from "../components/Hero";
import home from "/home.jpg";

export default function Home() {
  const [offerListings, setOfferListings] = useState([]);
  const [saleListings, setSaleListings] = useState([]);
  const [rentListings, setRentListings] = useState([]);

  useEffect(() => {
    const fetchOfferListings = async () => {
      try {
        const res = await fetch("/backend/listing/get?offer=true&limit=4");
        const data = await res.json();
        setOfferListings(data);
        fetchRentListings();
      } catch (error) {
        console.log(error);
      }
    };

    const fetchRentListings = async () => {
      try {
        const res = await fetch("/backend/listing/get?type=rent&limit=4");
        const data = await res.json();
        setRentListings(data);
        fetchSaleListings();
      } catch (error) {
        console.log(error);
      }
    };

    const fetchSaleListings = async () => {
      try {
        const res = await fetch("/backend/listing/get?type=sale&limit=4");
        const data = await res.json();
        setSaleListings(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchOfferListings();
  }, []);

  return (
    <div>
      <Hero />
      <section className="bg-gray-100 py-24">
        <div className="mx-auto flex max-w-6xl flex-col items-center px-4 md:flex-row">
          <div className="flex w-full justify-center md:w-1/2 md:justify-start">
            <img
              src={home}
              alt="Company Logo"
              className="w-full max-w-xs md:max-w-sm"
            />
          </div>
          <div className="mt-8 w-full md:mt-0 md:w-1/2">
            <h2 className="text-3xl font-semibold text-slate-700">About Us</h2>
            <p className="mt-4 text-lg text-slate-600">
              At DreamDwell, we believe in helping you find the perfect home.
              With over 10 years of experience in the real estate industry, we
              have successfully matched thousands of families with their dream
              homes. Our mission is to provide personalized service, expert
              advice, and unparalleled market knowledge to each and every
              client.
            </p>
            <p className="mt-4 text-lg text-slate-600">
              Learn more about our journey, values, and commitment to
              excellence.
            </p>
            <Link
              to="/about"
              className="mt-6 inline-block rounded bg-orange-600 px-6 py-3 text-white hover:bg-orange-700"
            >
              Learn More About Us
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-gray-100 pb-24">
        <div className="container mx-auto px-4">
          {offerListings.length > 0 && (
            <div className="mb-12">
              <div className="mb-6 flex items-center justify-between">
                <h2 className="text-3xl font-bold text-gray-800">
                  Featured Offers
                </h2>
                <Link
                  className="text-sm text-blue-600 hover:underline"
                  to={"/search?offer=true"}
                >
                  See All Offers
                </Link>
              </div>
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
                {offerListings.map((listing) => (
                  <ListingItem listing={listing} key={listing._id} />
                ))}
              </div>
            </div>
          )}
          {rentListings.length > 0 && (
            <div className="mb-24">
              <div className="mb-6 flex items-center justify-between">
                <h2 className="text-3xl font-bold text-gray-800">
                  Places for Rent
                </h2>
                <Link
                  className="text-sm text-blue-600 hover:underline"
                  to={"/search?type=rent"}
                >
                  See All Rentals
                </Link>
              </div>
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
                {rentListings.map((listing) => (
                  <ListingItem listing={listing} key={listing._id} />
                ))}
              </div>
            </div>
          )}
          {saleListings.length > 0 && (
            <div>
              <div className="mb-6 flex items-center justify-between">
                <h2 className="text-3xl font-bold text-gray-800">
                  Properties for Sale
                </h2>
                <Link
                  className="text-sm text-blue-600 hover:underline"
                  to={"/search?type=sale"}
                >
                  See All Sales
                </Link>
              </div>
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
                {saleListings.map((listing) => (
                  <ListingItem listing={listing} key={listing._id} />
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
