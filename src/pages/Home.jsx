import React, { useState, useEffect } from 'react';
import video from '../assets/videos/home.mp4';
import { useNavigate } from 'react-router-dom';
import Loader from '../components/Loader';

const Home = () => {

  const Navigate = useNavigate();
  // Simulate loading state
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500); // 1.5s fake delay
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <Loader />;

  return (
    <div className=" relative w-full h-screen overflow-hidden pt-16">
    <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
    >
        <source src={video} type="video/mp4" />
        Your browser does not support the video tag.
    </video>

    <div className="absolute top-0 left-0 w-full h-full bg-black/50 flex flex-col items-center justify-center text-center text-white px-4">
    </div>
    </div>

  );
};

export default Home;
