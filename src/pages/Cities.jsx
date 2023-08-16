import React from "react";

export default function Cities() {
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

      <div>
        <div className="card card-compact w-[30vh] shadow-xl p-4">
          <figure>
            <img
              src="../public/img/fra_tha.jpg"
              alt="thailand"
            />
          </figure>
          <div className="card-body bg-neutral-content">
            <h2 className="card-title text-black">France</h2>
            <h2 className="text-black">Tahiland</h2>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Details</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
