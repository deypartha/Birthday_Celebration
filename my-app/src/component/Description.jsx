import React from "react";
import {motion} from "framer-motion";

const cardData = [
    {
        id: 1,
            title: "Joyful Moments",
            dresscode: "Casual Chic",
            description: "May your day be filled with laughter and joy.",
            image: "./images/image1.png"
    },
    {
        id: 2,
        title: "Sweet Surprises",
        dresscode: "Party Vibes",
        description: "Wishing you delightful surprises and sweet memories.",
        image: "./images/image2.png"
    },
    {
        id: 3,
        title: "Cherished Memories",
        dresscode: "Elegant Attire",
        description: "May your birthday be filled with love and cherished moments.",
        image: "./images/image3.png"
    },
    {
        id: 4,
        title: "Bright Future",
        dresscode: "Formal Wear",
        description: "Here's to a future as bright and wonderful as you are.",
        image: "./images/image4.png"
    },
    {
        id: 5,
        title: "Endless Happiness",
        dresscode: "Festive Outfit",
        description: "Wishing you a year ahead filled with endless happiness and success.",
        image: "./images/image5.png"
    },
    {
        id: 6,
        title: "Magical Moments",
        dresscode: "Themed Costume",
        description: "May your birthday be as magical and extraordinary as you are.",
        image: "./images/image6.png"
    }
]
export default function Description() {
  return (
    <div className="w-full h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="w-full max-w-6xl overflow-x-auto flex space-x-6 scrollbar-hide">
        {cardData.map((card) => (
          <motion.div
            key={card.id}
            className="relative min-w-[250px] h-[350px] rounded-2xl shadow-lg overflow-hidden group cursor-pointer"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 200, damping: 12 }}
          >
            {/* Card Image */}
            <img
              src={card.image}
              alt={card.title}
              className="w-full h-full object-cover"
            />

            {/* Overlay on hover */}
            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center text-center p-4">
              <h2 className="text-white text-xl font-semibold mb-2">{card.title}</h2>
              <p className="text-gray-200 text-sm">{card.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}