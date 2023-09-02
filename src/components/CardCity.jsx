import React from "react";
import { Link } from "react-router-dom";

export default function CardCity({ image, country, city, id }) {
    return (
        <article className="relative overflow-hidden rounded-lg max-w-[500px] h-[40vh] w-[50vh]">
            <img
                src={image}
                alt={`${country} - ${city}`}
                className="absolute inset-0 object-cover w-full h-full"
            />
            <div className="absolute top-0 left-0 w-full h-[8vh] bg-black bg-opacity-60 text-white flex justify-start items-center">
                <div>
                    <p className="text-lg mx-2">{country}</p>
                    <p className="flex items-center text-xs mx-2">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="w-4 h-4"
                        >
                            <path
                                fillRule="evenodd"
                                d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z"
                                clipRule="evenodd"
                            />
                        </svg>
                        {city}
                    </p>
                </div>
            </div>
            <div key={id} className="absolute bottom-1 w-full p-2">
                <Link to={`/detail/${id}`}>
                    <button className="bg-blue-500 text-white px-2 py-1 rounded-lg mx-2">
                        View More
                    </button>
                </Link>
            </div>
        </article>
    );
}
