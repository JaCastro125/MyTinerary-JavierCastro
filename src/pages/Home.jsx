import React from "react";
import Card from "../components/Card";
import Carousel from "../components/Carousel";

export default function Home() {
  return (
    <div className="back_img flex flex-col items-center">
      <Card />

      <div className="text-5xl font-bold mt-6">
        <span className="bg-clip-text text-transparent text-center bg-gradient-to-r from-pink-500 to-violet-300 ">
        Your best trip at a one click
        </span>
      </div>
      <h3 className="p-8 font-serif text-2xl shadow-2xl">
        Popular Mytineraries
      </h3>
      <Carousel />
    </div>
  );
}
