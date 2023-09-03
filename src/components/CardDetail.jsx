import React, { useState } from 'react';

export default function CardDetail({ itinerary }) {
    const [expanded, setExpanded] = useState(false);

    const toggleExpand = () => {
        setExpanded(!expanded);
    };

    return (
        <div className="card bg-base-200 rounded-lg shadow-md">
            <div className="card-body p-4 flex justify-center">
                <h2 className="text-center text-xl font-bold mb-2">{itinerary.name}</h2>
                <div className="flex flex-col items-center">
                    <img
                        src={itinerary.user.image}
                        alt={itinerary.user.name}
                        className="w-10 h-10 rounded-full"
                    />
                    <p className="text-base font-semibold pt-2">Author: {itinerary.user.name}</p>
                </div>
                <p className='flex flex-wrap'>Price :
                    {Array.from({ length: itinerary.price }).map((_id, index) => (
                        <svg key={index} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"
                        ><path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    ))}
                </p>
                <p className="text-sm mb-2">Duration: {itinerary.duration} days</p>
                <div className="flex items-center mb-2">
                    <span className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center mr-2">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-4 h-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6.633 10.5c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75A2.25 2.25 0 0116.5 4.5c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23H5.904M14.25 9h2.25M5.904 18.75c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 01-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 10.203 4.167 9.75 5 9.75h1.053c.472 0 .745.556.5.96a8.958 8.958 0 00-1.302 4.665c0 1.194.232 2.333.654 3.375z" />
                        </svg>
                    </span>
                    <span className="bg-transparent border-e text-white rounded-full w-6 h-6 flex items-center justify-center mr-2">
                        {itinerary.like}
                    </span>
                </div>
                <div className="flex flex-wrap mb-2">
                    {Array.isArray(itinerary.hashtags)
                        ? itinerary.hashtags.map((tag, index) => (
                            <span key={index} className="bg-blue-500 text-white rounded-full px-2 py-1 m-1 text-xs">
                                #{tag}
                            </span>
                        )) : null}
                </div>
                <div className="mb-2">
                    <button
                        className="btn btn-primary"
                        onClick={toggleExpand}
                    >
                        {expanded ? 'VIEW LESS' : 'VIEW MORE'}
                    </button>
                </div>
                {expanded && (
                    <>
                        <div className="flex items-center justify-center bg-opacity-25 bg-blur bg-red-600">
                            <h1 className="text-5xl font-bold text-white text-shadow-md">Under Construction</h1>
                        </div>
                        <div>
                            <div className="flex flex-wrap justify-center gap-2">
                                {itinerary.activities.map((activity, index) => (
                                    <div key={index} className="card w-64 bg-white shadow-md rounded-lg">
                                        <figure>
                                            <img src={activity.photo} alt={activity.name} className="w-full h-40 object-cover rounded-t-lg" />
                                        </figure>
                                        <div className="card-body p-2 text-black">
                                            <h2 className="text-center text-sm font-semibold">{activity.name}</h2>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div>
                                <h2 className="text-xl font-semibold mt-4">Comments:</h2>
                                {itinerary.comments.map((comment, index) => (
                                    <div key={index} className="border p-2 mt-2">
                                        <p className="text-gray-700">{comment.comment}</p>
                                        <p className="text-gray-500">Usuario: {comment.user.name}</p>
                                    </div>
                                ))}
                            </div>
                            <div className="mt-4">
                                <h2 className="text-xl font-semibold">Leave your comment:</h2>
                                <div className="flex">
                                    <input
                                        type="text"
                                        placeholder="Write your comment"
                                        className="w-full border p-2 rounded-l"
                                    />
                                    <button className="bg-blue-500 text-white px-4 py-2 rounded-r">Send</button>
                                </div>
                            </div>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
}
