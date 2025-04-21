"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Bell, Users, Globe, Lock, Moon, Sun, Smartphone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Switch } from "@/components/ui/switch"
import { Separator } from "@/components/ui/separator"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { useToast } from "@/components/ui/use-toast"

export default function SettingsPage() {
  const { toast } = useToast()
  const [partnerSync, setPartnerSync] = useState(false)
  const [notifications, setNotifications] = useState(true)
  const [seasonalSpecials, setSeasonalSpecials] = useState(true)
  const [locationServices, setLocationServices] = useState(false)
  const [theme, setTheme] = useState("system")

  const handleSave = () => {
    toast({
      title: "Settings saved",
      description: "Your preferences have been updated.",
    })
  }

  return (
    <div className="container mx-auto px-4 py-6 max-w-3xl">
      <header className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Settings</h1>
        <p className="text-muted-foreground">Customize your date night experience.</p>
      </header>

      <div className="space-y-6">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }}>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="h-5 w-5 text-rose-500" />
                Partner Sync
              </CardTitle>
              <CardDescription>
                Sync your preferences with your partner for better date night recommendations.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-medium">Enable Partner Sync</h4>
                  <p className="text-sm text-muted-foreground">
                    Share your saved dates and preferences with your partner.
                  </p>
                </div>
                <Switch checked={partnerSync} onCheckedChange={setPartnerSync} />
              </div>

              {partnerSync && (
                <div className="mt-4 p-4 bg-muted rounded-lg">
                  <h4 className="font-medium mb-2">Partner Code</h4>
                  <div className="flex gap-2">
                    <div className="bg-background p-2 rounded border text-center font-mono w-full">DATE-NIGHT-4582</div>
                    <Button variant="outline" size="sm">
                      Copy
                    </Button>
                  </div>
                  <p className="text-xs text-muted-foreground mt-2">
                    Share this code with your partner to sync your accounts.
                  </p>
                </div>
              )}
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.1 }}
        >
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Bell className="h-5 w-5 text-rose-500" />
                Notifications
              </CardTitle>
              <CardDescription>Manage how and when you receive notifications.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-medium">Push Notifications</h4>
                  <p className="text-sm text-muted-foreground">
                    Receive notifications about new date ideas and specials.
                  </p>
                </div>
                <Switch checked={notifications} onCheckedChange={setNotifications} />
              </div>

              <Separator />

              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-medium">Seasonal Specials</h4>
                  <p className="text-sm text-muted-foreground">Get notified about seasonal date night ideas.</p>
                </div>
                <Switch checked={seasonalSpecials} onCheckedChange={setSeasonalSpecials} />
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.2 }}
        >
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Globe className="h-5 w-5 text-rose-500" />
                Location & Privacy
              </CardTitle>
              <CardDescription>Control your location data and privacy settings.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-medium">Location Services</h4>
                  <p className="text-sm text-muted-foreground">
                    Allow access to your location for better local recommendations.
                  </p>
                </div>
                <Switch checked={locationServices} onCheckedChange={setLocationServices} />
              </div>

              <Separator />

              <div>
                <h4 className="font-medium mb-2">Data Privacy</h4>
                <p className="text-sm text-muted-foreground mb-4">Manage how your data is used within the app.</p>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="analytics" className="text-sm">
                      Share anonymous usage data
                    </Label>
                    <Switch id="analytics" defaultChecked />
                  </div>
                  <div className="flex items-center justify-between">
                    <Label htmlFor="personalization" className="text-sm">
                      Personalized recommendations
                    </Label>
                    <Switch id="personalization" defaultChecked />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.3 }}
        >
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Smartphone className="h-5 w-5 text-rose-500" />
                Appearance
              </CardTitle>
              <CardDescription>Customize how the app looks and feels.</CardDescription>
            </CardHeader>
            <CardContent>
              <div>
                <h4 className="font-medium mb-4">Theme</h4>
                <RadioGroup value={theme} onValueChange={setTheme} className="flex flex-col space-y-3">
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="light" id="light" />
                    <Label htmlFor="light" className="flex items-center gap-2">
                      <Sun className="h-4 w-4" />
                      Light
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="dark" id="dark" />
                    <Label htmlFor="dark" className="flex items-center gap-2">
                      <Moon className="h-4 w-4" />
                      Dark
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="system" id="system" />
                    <Label htmlFor="system" className="flex items-center gap-2">
                      <Lock className="h-4 w-4" />
                      System
                    </Label>
                  </div>
                </RadioGroup>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      <div className="mt-8 flex justify-end gap-4">
        <Button variant="outline">Cancel</Button>
        <Button onClick={handleSave}>Save Changes</Button>
      </div>
    </div>
  )
}
