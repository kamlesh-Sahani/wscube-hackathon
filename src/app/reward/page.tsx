"use client";
import { motion } from "framer-motion";
import { TrophyIcon } from "@heroicons/react/24/solid";

const redeemItems = [
  // {
  //   name: "Full Stack Development Course",
  //   category: "Course",
  //   coins: 1500,
  //   image: "/fullstack.png",
  // },
  {
    name: "Bluetooth Headphones",
    category: "Gadget",
    coins: 3000,
    image: "/headphone.webp",
  },
  {
    name: "Exclusive T-shirt",
    category: "Merchandise",
    coins: 800,
    image: "/tshirt.webp",
  },
  {
    name: "Gaming Mouse",
    category: "Gadget",
    coins: 2000,
    image: "/mouse.webp",
  },
  {
    name: "Premium UI/UX Course",
    category: "Course",
    coins: 2200,
    image: "/ux.jpg",
  },
  // {
  //   name: "Custom Notebook",
  //   category: "Stationery",
  //   coins: 500,
  //   image: "/notebook.jpg",
  // },
];

const gradientBorders = [
  "from-pink-500 to-yellow-500",
  "from-purple-500 to-indigo-500",
  "from-green-400 to-blue-500",
  "from-orange-400 to-red-500",
  "from-cyan-400 to-teal-500",
  "from-rose-400 to-fuchsia-500",
];

const RedeemPage = () => {
  return (
    <div className="min-h-screen p-6 bg-black text-white">
      <div className="max-w-6xl mx-auto my-12">
        <h1 className="text-3xl font-bold flex items-center gap-3 text-emerald-300">
          <TrophyIcon className="h-8 w-8 text-yellow-400" />
          Redeem Your Rewards
        </h1>
        <p className="text-gray-400 mt-2">
          Exchange your earned coins for exclusive items and courses.
        </p>
      </div>
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {redeemItems.map((item, index) => (
          <motion.div
            key={index}
            className={`p-[2px] rounded-3xl bg-gradient-to-br ${gradientBorders[index % gradientBorders.length]} hover:scale-[1.02] transition-all`}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
          >
            <div className="bg-gray-800/60 rounded-3xl overflow-hidden shadow-xl backdrop-blur-xl flex flex-col h-full">
              {/* Image */}
              <div className="w-full aspect-video bg-black">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="p-5 space-y-3 flex flex-col flex-grow">
                <h3 className="text-xl font-bold">{item.name}</h3>
                <p className="text-gray-400 text-sm">{item.category}</p>
                <div className="flex items-center justify-between mt-auto">
                  <span className="flex items-center gap-1 text-yellow-400 font-semibold">
                    <TrophyIcon className="h-5 w-5" />
                    {item.coins} Coins
                  </span>
                  <button className="bg-emerald-500 hover:bg-emerald-600 px-4 py-2 rounded-xl text-white text-sm transition-all">
                    Redeem
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default RedeemPage;
