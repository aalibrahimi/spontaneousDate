"use client"

import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { motion } from "framer-motion"
import { ArrowLeft, Heart, Share2, Clock, MapPin, DollarSign, Calendar, Bookmark } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
// import { useToast } from "@/components/ui/use-toast"

// Sample data - in a real app this would come from your generator
const itinerary = {
  title: "Cozy Cultural Evening",
  description: "A perfect blend of art, cuisine, and intimate moments",
  activities: [
    {
      id: 1,
      time: "6:00 PM",
      title: "Art Gallery Exhibition",
      location: "Downtown Art Gallery",
      description: "Explore the new contemporary art exhibition featuring local artists.",
      priceRange: "$",
      image: "/placeholder.svg?height=120&width=200",
    },
    {
      id: 2,
      time: "8:00 PM",
      title: "Dinner at Bella Notte",
      location: "Italian Restaurant",
      description: "Enjoy authentic Italian cuisine in a romantic setting with live music.",
      priceRange: "$$$",
      image: "/placeholder.svg?height=120&width=200",
    },
    {
      id: 3,
      time: "10:00 PM",
      title: "Rooftop Cocktails",
      location: "Sky Lounge",
      description: "End the night with craft cocktails and city views from a rooftop bar.",
      priceRange: "$$",
      image: "/placeholder.svg?height=120&width=200",
    },
  ],
  totalBudget: "$150",
  vibe: "Cultural",
  mood: "Cozy",
}

export default function ResultsPage() {
  const navigate = useNavigate()
  const { toast } = useToast()
  const [saved, setSaved] = useState(false)

  const handleSave = () => {
    setSaved(true)
    toast({
      title: "Itinerary saved!",
      description: "You can find this in your favorites.",
    })
  }

  const handleShare = () => {
    toast({
      title: "Share link copied!",
      description: "Link has been copied to clipboard.",
    })
  }

  return (
    <div className="container mx-auto px-4 py-6 max-w-4xl">
      <Button variant="ghost" onClick={() => navigate("/")} className="mb-6">
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back to Generator
      </Button>

      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
          <div>
            <h1 className="text-3xl font-bold">{itinerary.title}</h1>
            <p className="text-muted-foreground">{itinerary.description}</p>
          </div>

          <div className="flex gap-2">
            <Button variant="outline" onClick={handleShare} className="flex items-center gap-2">
              <Share2 className="h-4 w-4" />
              Share
            </Button>

            <Button variant={saved ? "secondary" : "default"} onClick={handleSave} className="flex items-center gap-2">
              <Bookmark className={`h-4 w-4 ${saved ? "fill-current" : ""}`} />
              {saved ? "Saved" : "Save"}
            </Button>
          </div>
        </div>

        <div className="flex flex-wrap gap-3 mb-8">
          <Badge variant="secondary" className="flex items-center gap-1">
            <Heart className="h-3 w-3 text-rose-500" />
            {itinerary.vibe}
          </Badge>
          <Badge variant="secondary" className="flex items-center gap-1">
            <Calendar className="h-3 w-3" />
            {itinerary.mood}
          </Badge>
          <Badge variant="secondary" className="flex items-center gap-1">
            <DollarSign className="h-3 w-3" />
            {itinerary.totalBudget}
          </Badge>
        </div>

        <div className="space-y-6">
          {itinerary.activities.map((activity, index) => (
            <motion.div
              key={activity.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="overflow-hidden">
                <div className="md:flex">
                  <div className="md:w-1/3 h-48 md:h-auto bg-muted">
                    <img
                      src={activity.image || "/placeholder.svg"}
                      alt={activity.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardContent className="p-6 md:w-2/3">
                    <div className="flex justify-between items-start mb-2">
                      <Badge variant="outline" className="flex items-center gap-1 mb-2">
                        <Clock className="h-3 w-3" />
                        {activity.time}
                      </Badge>
                      <Badge>{activity.priceRange}</Badge>
                    </div>

                    <h3 className="text-xl font-semibold mb-1">{activity.title}</h3>

                    <div className="flex items-center text-muted-foreground mb-3">
                      <MapPin className="h-3 w-3 mr-1" />
                      <span className="text-sm">{activity.location}</span>
                    </div>

                    <p className="text-muted-foreground">{activity.description}</p>
                  </CardContent>
                </div>
              </Card>

              {index < itinerary.activities.length - 1 && (
                <div className="flex justify-center my-4">
                  <div className="h-8 border-l-2 border-dashed border-muted-foreground/30"></div>
                </div>
              )}
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <h3 className="text-xl font-medium mb-4">Not quite what you're looking for?</h3>
          <Button onClick={() => navigate("/")} className="bg-gradient-to-r from-rose-500 to-purple-600 text-white">
            Generate Another Date
          </Button>
        </div>
      </motion.div>
    </div>
  )
}
