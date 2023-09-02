import React, { useState, useEffect } from "react";

export default function Carousel() {
  const [carouselData, setCarouselData] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlide = 3;
  const slidesPerPage = 4;

  useEffect(() => {
    fetch("../src/json_data/cities.json")
      .then((response) => response.json())
      .then((data) => setCarouselData(data.data))
      .catch((error) => console.error("Error loading carousel data:", error));
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((currentSlideIndex) =>
        currentSlideIndex < totalSlide - 1 ? currentSlideIndex + 1 : 0
      );
    }, 3000);

    return () => {
      clearInterval(interval);
    };
  }, [currentSlide]);

  const prevSlide = () => {
    setCurrentSlide((currentSlideIndex) =>
      currentSlideIndex > 0 ? currentSlideIndex - 1 : totalSlide - 1
    );
  };
  const nextSlide = () => {
    setCurrentSlide((currentSlideIndex) =>
      currentSlideIndex < totalSlide - 1 ? currentSlideIndex + 1 : 0
    );
  };

  return (
    <div className="flex justify-center items-center w-full max-w-screen-md mx-auto relative pb-6">
      <button onClick={prevSlide} className="m-2 p-2 bg-gray-400 rounded-full">
        &lt;
      </button>
      <div className="col-span-2 grid md:grid-cols-2 gap-1">
        {carouselData
          .slice(
            currentSlide * slidesPerPage,
            (currentSlide + 1) * slidesPerPage
          )
          .map((item, index) => (
            <div
              key={index}
              className="carousel-slide justify-stretch relative"
            >
              <img
                src={item.image}
                alt={`${item.country} - ${item.city}`}
                className=" h-[40vh] object-cover rounded w-[60vh]"
              />
              <div className="absolute top-0 left-0 w-full h-20 bg-black bg-opacity-30 text-white flex items-center justify-center">
                <div className="text-center">
                  <p>{item.country}</p>
                  <p>{item.city}</p>
                </div>
              </div>
            </div>
          ))}
      </div>
      <button onClick={nextSlide} className="m-2 p-2 bg-gray-400 rounded-full">
        &gt;
      </button>
    </div>
  );
}
