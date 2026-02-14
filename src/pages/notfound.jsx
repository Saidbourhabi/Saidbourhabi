import React from "react";
import { Link } from "react-router-dom";

const Notfound = () => {
  return (
    <section className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-6 relative overflow-hidden">
      {/* Optional subtle background effect */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#AEFE15] opacity-5  blur-3xl"></div>

      <div className="relative z-10 text-center max-w-lg">
        <h1 className="text-8xl md:text-9xl font-extrabold mb-6 tracking-tight">
          404
        </h1>
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          OOPS! PAGE 
          <span className="text-[#AEFE15]">NOT FOUND</span>
        </h2>
        <p className="text-white mb-8 text-lg md:text-xl">
          The page you’re looking for doesn’t exist or has been moved.
        </p>
        <Link
          to="/"
          className="inline-block px-4 py-2 bg-[#AEFE15] text-black font-bold text-lg hover:bg-white transition-all duration-300"
        >
            GO BACK
        </Link>
      </div>
    </section>
  );
};

export default Notfound;
