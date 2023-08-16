import React, { useState, useEffect } from "react";

export default function Cities() {
  const [citiesData, setCitiesData] = useState([]);

  useEffect(() => {
    fetch("../src/components/allCities.json")
      .then((response) => response.json())
      .then((data) => setCitiesData(data.data))
      .catch((error) => console.error("Error loading carousel data:", error));
  }, []);

  return (
    <div>
      <div className="back_img_cities items-center text-5xl font-bold mt-6">
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-700 to-blue-700">
          Collection of the most beatiful places and experience
        </span>
      </div>

      <div className="flex justify-center items-center pt-5">
        <div className="relative max-w-xs">
          <span className="absolute inset-y-0 left-0 pl-3 flex items-center">
            <svg
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="3"
                d="M21 21l-4.35-4.35M8 15a7 7 0 100-14 7 7 0 000 14z"
              ></path>
            </svg>
          </span>
          <input
            type="text"
            placeholder="Search your city"
            className="input input-bordered input-primary pl-10 w-full"
          />
        </div>
      </div>

      <div className="flex flex-wrap justify-center p-5 gap-2">
        {citiesData.map((item, index) => (
          <div key={index} className="relative h-[30vh] rounded w-[50vh] ">
            <img
              src={item.image}
              alt={`${item.country} - ${item.city}`}
              className="absolute inset-0 object-cover w-full h-full"
            />
            <div className="absolute top-0 left-0 w-full h-[8vh] bg-black bg-opacity-60 text-white flex justify-start items-center">
              <div>
                <p className="text-lg mx-2">{item.country}</p>
                <p className="flex items-center text-xs mx-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    class="w-4 h-4"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  {item.city}
                </p>
              </div>
            </div>
            <div className="absolute bottom-1 w-full p-2">
              <button className="bg-blue-500 text-white px-2 py-1 rounded-lg mx-2">
                View More
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
