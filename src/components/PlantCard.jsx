import React, { useEffect, useState } from "react";
import {
  Search as SearchIcon,
  ShoppingCart as ShoppingCartIcon,
} from "@mui/icons-material";
import IconCheckboxes from "./Chack";

function PlantCard() {
  const [trips, setTrips] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/plants")
      .then((res) => res.json())
      .then((data) => setTrips(data));
  }, []);
  return (
    <>
      {trips.slice(0, 9).map((trip) => (
        <div className="card group relative space-y-3 pb-[50px]">
          <div className="relative h-[260px] w-[258px] bg-[#FBFBFB] p-1 group-hover:bg-[#F0F0F0]">
            <div className="h-[250px] w-[250px] px-1">
              <img
                src={trip.images}
                alt="logo"
                className="h-full w-full object-cover"
              />
            </div>
            <div className=" relative bottom-36 left-0 flex h-full w-full items-center justify-center opacity-0 group-hover:opacity-100">
              <span className="text-[#46A358]">
                <ShoppingCartIcon />
              </span>
              <span className="text-[#46A358]">
                <IconCheckboxes />
              </span>
              <SearchIcon />
            </div>
          </div>
          <h1 className="text-[16px] font-normal leading-4 text-[#3D3D3D]">
            {trip.title}
          </h1>
          <p className="text-[18px] font-semibold leading-4 text-[#46A358]">
            ${trip.price}
          </p>
        </div>
      ))}
    </>
  );
}

export default PlantCard;
