"use client"

import { motion } from "framer-motion"
import { Check } from "lucide-react"

interface VibeSelectorProps {
  selectedVibe: string | null
  setSelectedVibe: (vibe: string) => void
}

const vibes = [
  {
    id: "romantic",
    name: "Romantic",
    icon: "💖",
    description: "Intimate and affectionate",
  },
  {
    id: "adventurous",
    name: "Adventurous",
    icon: "🧗",
    description: "Exciting and daring",
  },
  {
    id: "relaxed",
    name: "Relaxed",
    icon: "🧘",
    description: "Chill and laid-back",
  },
  {
    id: "cultural",
    name: "Cultural",
    icon: "🎭",
    description: "Arts and experiences",
  },
  {
    id: "foodie",
    name: "Foodie",
    icon: "🍽️",
    description: "Culinary delights",
  },
  {
    id: "nostalgic",
    name: "Nostalgic",
    icon: "🎡",
    description: "Retro and playful",
  },
]

export function VibeSelector({ selectedVibe, setSelectedVibe }: VibeSelectorProps) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
      {vibes.map((vibe) => (
        <motion.div
          key={vibe.id}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          onClick={() => setSelectedVibe(vibe.id)}
          className={`
            relative cursor-pointer rounded-xl p-4 border-2 transition-all
            ${
              selectedVibe === vibe.id
                ? "border-rose-500 bg-rose-50 dark:bg-rose-950/20"
                : "border-border hover:border-rose-200 dark:hover:border-rose-800"
            }
          `}
        >
          {selectedVibe === vibe.id && (
            <div className="absolute top-2 right-2 bg-rose-500 text-white rounded-full p-1">
              <Check className="h-3 w-3" />
            </div>
          )}
          <div className="text-3xl mb-2">{vibe.icon}</div>
          <h4 className="font-medium">{vibe.name}</h4>
          <p className="text-xs text-muted-foreground">{vibe.description}</p>
        </motion.div>
      ))}
    </div>
  )
}
