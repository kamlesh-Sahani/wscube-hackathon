"use client"
import { motion } from "framer-motion";
import { Gift } from "lucide-react";

export default function RewardCard({
    name,
    cost,
    description,
    isRedeemed,
    onRedeem,
    points,
  }: {
    name: string;
    cost: number;
    description: string;
    isRedeemed: boolean;
    onRedeem: () => void;
    points: number;
  }) {
    const canRedeem = points >= cost && !isRedeemed;
  
    return (
      <motion.div
        className={`relative rounded-xl border p-5 shadow-md ${
          isRedeemed
            ? "border-white bg-gray-100"
            : canRedeem
            ? "border-white bg-gradient-to-br from-white to-blue-100"
            : "border-white bg-gradient-to-br from-gray-50 to-gray-100"
        }`}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        whileHover={{
          scale: 1.03,
          boxShadow: "0 8px 24px rgba(0,0,0,0.1)",
        }}
        transition={{ type: "spring", stiffness: 120, damping: 12 }}
      >
        <div className="flex justify-between items-center mb-3">
          <div>
            <h3 className="text-lg font-bold text-gray-800 flex items-center gap-2">
              <Gift className="h-5 w-5 text-blue-500" />
              {name}
            </h3>
            <p className="text-sm text-gray-600">{description}</p>
          </div>
          <div
            className={`text-right text-sm font-semibold ${
              canRedeem
                ? "text-green-600"
                : isRedeemed
                ? "text-gray-400"
                : "text-red-400"
            }`}
          >
            {cost} XP
          </div>
        </div>
        <motion.button
          whileTap={canRedeem ? { scale: 0.95 } : {}}
          onClick={onRedeem}
          disabled={!canRedeem}
          className={`w-full py-2 mt-2 rounded-full text-sm font-semibold transition-all duration-200
            ${
              isRedeemed
                ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                : canRedeem
                ? "bg-gradient-to-r from-blue-950 to-blue-600 text-white hover:brightness-110 shadow-md shadow-orange-400/40"
                : "bg-gray-200 text-gray-400 cursor-not-allowed"
            }
          `}
        >
          {isRedeemed ? "Redeemed" : canRedeem ? "Redeem Now" : "Not Enough XP"}
        </motion.button>
        {canRedeem && (
          <motion.div
            className="absolute -inset-1 rounded-xl border-2 border-white pointer-events-none"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
        )}
      </motion.div>
    );
  }