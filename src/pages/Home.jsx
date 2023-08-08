import React from "react";
import Card from "../components/Card";
import Carousel from "../components/Carousel";

export default function Home() {
  return (
    <div className="back_img flex flex-col items-center">
      <Card />
      <h1 className="p-8 font-serif text-2xl shadow-xl">Your best trip at a one click</h1>
      <h3 className="p-8 font-serif text-2xl shadow-2xl">Popular Mytineraries</h3>
      <Carousel />
    </div>
  );
}
