import { useEffect, useState } from "react";
import HeroCity from "../components/HeroCity";
import CardCity from "../components/CardCity";
import axios from "axios";

export default function Cities() {
  const [cities, setCities] = useState();

  //traemos datos del API
  useEffect(() => {
    axios
      .get("http://localhost:3000/api/cities")
      .then((response) => setCities(response.data.cities))
      .catch((err) => console.log(err));
  }, []);

  //busqueda
  const inputChange = async (city) => {
    try {
      const response = await axios.get(
        `http://localhost:3000/api/cities?country=${city.target.value}`
      );
      setCities(response.data.cities);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <HeroCity></HeroCity>

      <div className="flex justify-center items-center pt-5">
        <span className="input input-primary flex items-center gap-2">
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
        <input
          onChange={inputChange}
          type="text"
          placeholder="Search your city"
          className="bg-transparent focus-visible:outline-0"
        />
        </span>
      </div>

      <div className="flex flex-wrap justify-center p-5 gap-2">
        {cities?.map((city) => {
          return (
            <div key={city._id}>
              <CardCity
                image={city.image}
                country={city.country}
                city={city.city}
                id={city._id}
                comment={city.comment}
             />
              </div>
          );
        })}
      </div>
    </>
  );
}
