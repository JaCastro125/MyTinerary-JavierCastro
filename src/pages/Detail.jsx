import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function Detail() {
    const { id } = useParams();
    const [cityData, setCityData] = useState(null);

    useEffect(() => {
        axios
            .get(`http://localhost:3000/api/cities/${id}`)
            .then((response) => {
                setCityData(response.data.city);
            })
            .catch((error) => {
                console.log(error);
            });
    }, [id]);

    if (!cityData) {
        return <div>Loading...</div>;
    }

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-cover bg-center" style={{ backgroundImage: `url(${cityData.image})` }}>
            <div className="w-full h-[20vh] bg-black bg-opacity-60 text-white flex flex-col justify-center items-center text-center">
                <h1 className="text-3xl font-semibold mb-2">{cityData.country}</h1>
                <h2 className="text-xl font-medium mb-2">{cityData.city}</h2>
                <p className="text-lg">{cityData.comment}</p>
            </div>
            <Link to={`/cities/`}>
                <button
                    className='text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4  focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 mt-4'>Back
                </button> </Link>
        </div >
    );
}
