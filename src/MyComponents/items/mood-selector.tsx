"use client"

import { motion } from "framer-motion"
import { Check } from "lucide-react"

interface MoodSelectorProps {
  selectedMood: string | null
  setSelectedMood: (mood: string) => void
}

const moods = [
  {
    id: "energetic",
    name: "Energetic",
    icon: "⚡",
    description: "Full of energy",
  },
  {
    id: "cozy",
    name: "Cozy",
    icon: "🧸",
    description: "Warm and comfortable",
  },
  {
    id: "playful",
    name: "Playful",
    icon: "🎮",
    description: "Fun and lighthearted",
  },
  {
    id: "intimate",
    name: "Intimate",
    icon: "🕯️",
    description: "Close and personal",
  },
  {
    id: "spontaneous",
    name: "Spontaneous",
    icon: "🎲",
    description: "Unplanned and exciting",
  },
  {
    id: "celebratory",
    name: "Celebratory",
    icon: "🎉",
    description: "Special occasion",
  },
]

export function MoodSelector({ selectedMood, setSelectedMood }: MoodSelectorProps) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
      {moods.map((mood) => (
        <motion.div
          key={mood.id}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          onClick={() => setSelectedMood(mood.id)}
          className={`
            relative cursor-pointer rounded-xl p-4 border-2 transition-all
            ${
              selectedMood === mood.id
                ? "border-purple-500 bg-purple-50 dark:bg-purple-950/20"
                : "border-border hover:border-purple-200 dark:hover:border-purple-800"
            }
          `}
        >
          {selectedMood === mood.id && (
            <div className="absolute top-2 right-2 bg-purple-500 text-white rounded-full p-1">
              <Check className="h-3 w-3" />
            </div>
          )}
          <div className="text-3xl mb-2">{mood.icon}</div>
          <h4 className="font-medium">{mood.name}</h4>
          <p className="text-xs text-muted-foreground">{mood.description}</p>
        </motion.div>
      ))}
    </div>
  )
}
