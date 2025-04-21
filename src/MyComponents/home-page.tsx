"use client"

import { useState } from "react"
import { useNavigate } from "@tanstack/react-router"
import { motion } from "framer-motion"
import { Heart, Sparkles, Calendar, Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Slider } from "@/components/ui/slider"
import { Badge } from "@/components/ui/badge"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

import { MoodSelector } from "./items/mood-selector"
import { VibeSelector } from "./items/vibe-selector"


export default function HomePage() {
  const navigate = useNavigate()
  const [budget, setBudget] = useState(100)
  const [selectedVibe, setSelectedVibe] = useState<string | null>(null)
  const [selectedMood, setSelectedMood] = useState<string | null>(null)

  const handleGenerateClick = () => {
    // In a real app, we neeeda pass these values to generate the itinerary
    navigate("/results")
  }

  return (
    <div className="container mx-auto px-4 py-6 max-w-6xl">
    
      <main>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-3 bg-gradient-to-r from-rose-500 to-rose-400 text-transparent bg-clip-text">
            Spontaneous Date Night
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Pick your vibe, mood, and budget — we'll create the perfect date night itinerary for you and your special
            someone.
          </p>
        </motion.div>

        <Card className="mb-8 border-none shadow-lg bg-card/80 backdrop-blur-sm">
          <CardContent className="p-6">
            <Tabs defaultValue="vibe" className="w-full">
              <TabsList className="grid grid-cols-3 mb-8">
                <TabsTrigger value="vibe">Vibe</TabsTrigger>
                <TabsTrigger value="mood">Mood</TabsTrigger>
                <TabsTrigger value="budget">Budget</TabsTrigger>
              </TabsList>

              <TabsContent value="vibe" className="space-y-4">
                <h3 className="text-xl font-medium mb-4">What's your vibe tonight?</h3>
                <VibeSelector selectedVibe={selectedVibe} setSelectedVibe={setSelectedVibe} />
              </TabsContent>

              <TabsContent value="mood" className="space-y-4">
                <h3 className="text-xl font-medium mb-4">How are you feeling?</h3>
                <MoodSelector selectedMood={selectedMood} setSelectedMood={setSelectedMood} />
              </TabsContent>

              <TabsContent value="budget" className="space-y-4">
                <h3 className="text-xl font-medium mb-4">What's your budget?</h3>
                <div className="space-y-6">
                  <Slider
                    defaultValue={[budget]}
                    max={300}
                    step={10}
                    onValueChange={(value) => setBudget(value[0])}
                    className="my-6"
                  />
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">$0</span>
                    <Badge variant="secondary" className="text-lg px-4 py-1 font-semibold">
                      ${budget}
                    </Badge>
                    <span className="text-muted-foreground">$300+</span>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>

        <div className="flex flex-col items-center">
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              size="lg"
              onClick={handleGenerateClick}
              className="bg-gradient-to-r from-rose-500 to-rose-400 text-white px-8 py-6 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition-all"
            >
              <Heart className="mr-2 h-5 w-5" />
              Generate Date Night
            </Button>
          </motion.div>

          <div className="mt-8 flex items-center gap-2 text-muted-foreground">
            <Calendar className="h-4 w-4" />
            <span>Seasonal specials available!</span>
          </div>
        </div>
      </main>
    </div>
  )
}
