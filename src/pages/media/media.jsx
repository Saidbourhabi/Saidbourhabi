import React, { useState } from "react";
import { MdClose, MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";

// Import images
import gamedaywacass from "../../assets/images/gamedaywacass.jpg";
import eid from "../../assets/images/eid.jpg";
import lockerkitP3 from "../../assets/images/lockerkitP3.jpg";
import lockerkitP4 from "../../assets/images/lockerkitP4.jpg";
import lockerkitP5 from "../../assets/images/lockerkitP5.jpg";
import lockerkitP6 from "../../assets/images/lockerkitP6.jpg";
import wac from "../../assets/images/wac1.jpeg";
import wac1 from "../../assets/images/wac2.jpeg";
import wac2 from "../../assets/images/wac3.jpeg";

const Media = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const allDesigns = [
    { id: 1, image: gamedaywacass, headline: "Gameday Graphics" },
    { id: 2, image: eid, headline: "Team Identity" },
    { id: 3, image: lockerkitP3, headline: "Sports Campaign" },
    { id: 4, image: lockerkitP4, headline: "Brand Identity Suite" },
    { id: 5, image: lockerkitP5, headline: "Logo Variations" },
    { id: 6, image: lockerkitP6, headline: "Brand Guidelines" },
    { id: 7, image: wac, headline: "E-Commerce Platform" },
    { id: 8, image: wac1, headline: "Corporate Website" },
    { id: 9, image: wac2, headline: "SaaS Dashboard" },
  ];

  const handleImageClick = (index) => {
    setCurrentImageIndex(index);
    setSelectedImage(allDesigns[index]);
  };

  const handlePrevious = () => {
    const newIndex =
      (currentImageIndex - 1 + allDesigns.length) % allDesigns.length;
    setCurrentImageIndex(newIndex);
    setSelectedImage(allDesigns[newIndex]);
  };

  const handleNext = () => {
    const newIndex = (currentImageIndex + 1) % allDesigns.length;
    setCurrentImageIndex(newIndex);
    setSelectedImage(allDesigns[newIndex]);
  };

  return (
    <div className="bg-black text-white min-h-screen">
      {/* Hero */}
      <section className="py-20 px-6 text-center">
        <h1 className="text-6xl md:text-7xl font-bold uppercase">
          My <span className="text-[#AEFE15]">Work</span>
        </h1>
        <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
          A collection of design projects spanning sports, branding, and web
          design.
        </p>
      </section>

      {/* Grid */}
      <section className="pb-10 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {allDesigns.map((design, index) => (
            <div
              key={design.id}
              onClick={() => handleImageClick(index)}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden aspect-square">
                <img
                  src={design.image}
                  alt={design.headline}
                  className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-110"
                />

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition duration-300 flex items-center justify-center">
                  <span className="opacity-0 group-hover:opacity-100 text-white text-sm tracking-widest uppercase transition duration-300">
                    View
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="relative max-w-5xl w-full flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close */}
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute cursor-pointer -top-5 right-0 text-white hover:text-[#AEFE15] transition"
            >
              <MdClose size={20} />
            </button>

            {/* Prev */}
            <button
              onClick={handlePrevious}
              className="absolute cursor-pointer left-0 top-1/2 -translate-y-1/2 text-[#AEFE15]  p-3 z-50"
            >
              <MdArrowBackIos size={15} />
            </button>

            {/* Next */}
            <button
              onClick={handleNext}
              className="absolute cursor-pointer right-0 top-1/2 -translate-y-1/2 text-[#AEFE15]  p-3 z-50"
            >
              <MdArrowForwardIos size={15} />
            </button>

            {/* Image */}
            <img
              src={selectedImage.image}
              alt={selectedImage.headline}
              className="max-h-[70vh] object-contain"
            />

            {/* Info */}
            <div className="mt-6 text-center">
              <h3 className="text-2xl font-bold">
                {selectedImage.headline}
              </h3>
              <p className="text-gray-400 mt-2">
                {currentImageIndex + 1} / {allDesigns.length}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Media;
