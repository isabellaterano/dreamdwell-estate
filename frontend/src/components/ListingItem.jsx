import { Link } from "react-router-dom";
import { MapPin } from "@phosphor-icons/react";

export default function ListingItem({ listing }) {
  return (
    <div className="w-full overflow-hidden rounded-lg bg-white shadow-md transition-shadow hover:shadow-lg sm:w-[330px]">
      <Link to={`/listing/${listing._id}`}>
        <img
          src={
            listing.imageUrls[0] ||
            "https://53.fs1.hubspotusercontent-na1.net/hub/53/hubfs/Sales_Blog/real-estate-business-compressor.jpg?width=595&height=400&name=real-estate-business-compressor.jpg"
          }
          alt="listing cover"
          className="transition-scale h-[320px] w-full object-cover duration-300 hover:scale-105 sm:h-[220px]"
        />
        <div className="flex w-full flex-col gap-2 p-3">
          <p className="truncate text-lg font-semibold text-slate-700">
            {listing.name}
          </p>
          <div className="flex items-center gap-1">
            <MapPin className="h-4 w-4 text-green-700" />
            <p className="w-full truncate text-sm text-gray-600">
              {listing.address}
            </p>
          </div>
          <p className="line-clamp-2 text-sm text-gray-600">
            {listing.description}
          </p>
          <p className="mt-2 font-semibold text-slate-500 ">
            $
            {listing.offer
              ? listing.discountPrice.toLocaleString("en-US")
              : listing.regularPrice.toLocaleString("en-US")}
            {listing.type === "rent" && " / month"}
          </p>
          <div className="flex gap-4 text-slate-700">
            <div className="text-xs font-bold">
              {listing.bedrooms > 1
                ? `${listing.bedrooms} beds `
                : `${listing.bedrooms} bed `}
            </div>
            <div className="text-xs font-bold">
              {listing.bathrooms > 1
                ? `${listing.bathrooms} baths `
                : `${listing.bathrooms} bath `}
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}
