import { useEffect, useState, useRef } from "react";
import axios from "axios";
import HeroCity from "../components/HeroCity";
import CardCity from "../components/CardCity";


export default function Cities() {
  const [cities, setCities] = useState();

  let inputSearch = useRef();

  //traemos datos del API
  useEffect(() => {
    axios
      .get("http://localhost:3000/api/cities")
      .then((response) => setCities(response.data.cities))
      .catch((err) => console.log(err));
  }, []);

  // reseteo de cities
  const resetCities = async () => {
    try {
      const response = await axios.get("http://localhost:3000/api/cities");
      setCities(response.data.cities);
      inputSearch.current.value = "";
    } catch (error) {
      console.log(error);
    }
  };

  //busqueda
  const inputChange = async (city) => {

    const name = inputSearch.current.value;
    console.log(inputSearch.current.name);

    try {
      const response = await axios.get(
        `http://localhost:3000/api/cities?country=${name}`
      );
      setCities(response.data.cities);
    } catch (error) {
      if (error.response.status === 404) {
        console.log('Dont found cities in response');
        setCities([])
      } else {
        console.log(error);
      }
    }
  };

  return (
    <>
      <HeroCity></HeroCity>
      <div className="flex justify-center items-center pt-5">
        <span className="input input-primary flex items-center gap-">
          <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M21 21l-4.35-4.35M8 15a7 7 0 100-14 7 7 0 000 14z"></path>
          </svg>
          <input name='input-search' ref={inputSearch} type="text" placeholder="Search your city" className="bg-transparent focus-visible:outline-0"
          />
          <button
            onClick={inputChange}
            className='ml-6 mr-[-10px] px-3 py-1 border-2 border-blue-900 rounded-md'>Search
          </button>
        </span>
        <button
          onClick={() => {
            resetCities();
          }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 ml-3">
            <path fillRule="evenodd" d="M4.755 10.059a7.5 7.5 0 0112.548-3.364l1.903 1.903h-3.183a.75.75 0 100 1.5h4.992a.75.75 0 00.75-.75V4.356a.75.75 0 00-1.5 0v3.18l-1.9-1.9A9 9 0 003.306 9.67a.75.75 0 101.45.388zm15.408 3.352a.75.75 0 00-.919.53 7.5 7.5 0 01-12.548 3.364l-1.902-1.903h3.183a.75.75 0 000-1.5H2.984a.75.75 0 00-.75.75v4.992a.75.75 0 001.5 0v-3.18l1.9 1.9a9 9 0 0015.059-4.035.75.75 0 00-.53-.918z" clipRule="evenodd" />
          </svg>
        </button>
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
