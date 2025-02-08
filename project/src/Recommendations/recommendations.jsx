import React, { useState,useEffect } from "react";
import axios from 'axios';

function Recommendations() {

  useEffect(() => {
    axios.get('http://localhost:3000/recommendations')
      .then(response => {
        console.log('Data fetched from backend:', response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [calories, setCalories] = useState('');
  const [quantity, setQuantity] = useState(0  );

  const increment = () => {
    setCalories((prev) => Math.max(prev + 10,0));
    setQuantity((prev) => Math.max(prev + 1,1));
  };

  const decrement = () => {
    setCalories((prev) => Math.max(prev - 10, 0)); // Prevent negative values
    setQuantity((prev) => Math.max(prev - 1, 1));
  };

  return (
    <div className="bg-black text-white min-h-screen flex flex-col">
      {/* Navbar */}
      <nav className="w-full bg-gray-800 px-6 py-4 flex justify-between items-center">
      <a href="/home" className="text-lg font-bold">Nourish</a>
        <div className="lg:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-white focus:outline-none"
          >
            ☰
          </button>
        </div>
        <div className="hidden lg:flex flex-row items-center gap-8">
          <a href="/home" className="cursor-pointer hover:text-gray-400">Home</a>
          <a href="/recommendations" className="cursor-pointer hover:text-gray-400">
            Recommendations
          </a>
          <a href="/vitals" className="cursor-pointer hover:text-gray-400">
            Track Vitals
          </a>
          <a href="/premium" className="cursor-pointer hover:text-gray-400">
            Explore Premium
          </a>
          <span className="cursor-pointer hover:text-gray-400">Profile</span>
        </div>
      </nav>

      {isMenuOpen && (
        <div className="w-full bg-gray-800 px-6 py-4 flex flex-col items-center lg:hidden fixed top-16 left-0 z-50">
          <a href="/home" className="cursor-pointer hover:text-gray-400 py-2">Home</a>
          <a href="/recommendations" className="cursor-pointer hover:text-gray-400 py-2">
            Recommendations
          </a>
          <a href="/vitals" className="cursor-pointer hover:text-gray-400 py-2">
            Track Vitals
          </a>
          <a href="" className="cursor-pointer hover:text-gray-400 py-2">
            Explore Premium
          </a>
          <a href="" className="cursor-pointer hover:text-gray-400 py-2">Profile</a>
        </div>
      )}

      {/* Main Content */}
      <div className="flex flex-col md:flex-row gap-6 items-center justify-center p-5">
        {/* Food Card */}
        <div className="bg-gray-700 p-5 rounded-lg text-center shadow-lg w-80 h-44 border-2 border-white">
          <h1 className="text-2xl font-bold text-green-400">🍵</h1>
          <h2 className="mt-3 text-2xl">Food Name</h2>
          <p className="mt-4 bg-green-400 h-3 w-3 rounded-full mx-auto"></p>
        </div>

        {/* Nutrition Info Box */}
        <div className="rounded-lg outline text-white w-96 text-center p-5 mt-5 shadow-lg bg-gray-800 max-w-xs ">
          {/* Quantity */}
          <div className="flex items-center justify-center gap-3">
            <button
              onClick={increment}
              className="w-8 h-8 rounded-full bg-green-600 text-white flex items-center justify-center"
            >
              +
            </button>
            <input
              type="number"
              value={quantity}
              placeholder=""
              onChange={(e) => setQuantity(Number(e.target.value))}
              className="bg-transparent border border-white text-white p-2 rounded text-center w-20"
            />
            <button
              onClick={decrement}
              className="w-8 h-8 rounded-full bg-green-600 text-white flex items-center justify-center"
            >
              -
            </button>
          </div>

          {/* Calories */}
          <div className="mt-4">
            <input
              type="number"
              placeholder="Calories "
              value={calories}
              onChange={(e) => setCalories(Number(e.target.value))}
              className="bg-transparent border border-white text-white p-2 rounded text-center w-full"
            />
          </div>

          {/* Macros (Protein, Fats, Carbs, Fiber) */}
          <div className="grid grid-cols-2 gap-3 mt-5">
            <input
              type="number"
              placeholder="Protein (g)"
              className="bg-transparent border border-white text-white p-2 rounded text-center w-full"
            />
            <input
              type="number"
              placeholder="Fats (g)"
              className="bg-transparent border border-white text-white p-2 rounded text-center w-full"
            />
            <input
              type="number"
              placeholder="Carbs (g)"
              className="bg-transparent border border-white text-white p-2 rounded text-center w-full"
            />
            <input
              type="number"
              placeholder="Fiber (g)"
              className="bg-transparent border border-white text-white p-2 rounded text-center w-full"
            />
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="mt-8 text-center px-6">
        {/* Call-to-Action Button */}
        <button className="bg-green-500 text-white py-3 px-6 rounded-lg text-lg hover:bg-green-700 transition">
          Get More Recommendations
        </button>

        {/* Suggested Foods */}
        <div className="mt-8">
          <h2 className="text-xl font-bold mb-4">Suggested Foods</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            <div className="bg-gray-700 p-4 rounded-lg">
              <button>🥑 Avocado</button>
            </div>
            <div className="bg-gray-700 p-4 rounded-lg">
              <button>🍓 Strawberries</button>
            </div>
            <div className="bg-gray-700 p-4 rounded-lg">
              <button>🍗 Chicken breast</button>
            </div>
            <div className="bg-gray-700 p-4 rounded-lg">
              <button>🥜 Almonds</button>
            </div>
            <div className="bg-gray-700 p-4 rounded-lg">
              <button>🍞 Whole Grain Bread</button>
            </div>
            <div className="bg-gray-700 p-4 rounded-lg">🍣 Salmon</div>
          </div>
        </div>

        {/* Fun Fact Section */}
        <div className="mt-10 bg-gray-800 p-6 rounded-lg shadow-lg w-full mx-auto text-center">
          <h3 className="text-lg font-bold">Did You Know?</h3>
          <p className="mt-2 text-gray-300">
            Eating fiber-rich foods like oats and lentils can help maintain
            healthy digestion and keep you full for longer! 🧠💡
          </p>
        </div>
      </div>
    </div>
  );
}

export default Recommendations;
