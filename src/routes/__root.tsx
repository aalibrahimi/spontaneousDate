// src/routes/__root.tsx
import { createRootRoute, Link, Outlet } from '@tanstack/react-router'
import { Heart, Calendar, Bookmark, Settings } from 'lucide-react'

import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu } from 'lucide-react'
import { ModeToggle } from '@/MyComponents/items/mode-toggle'
import { ThemeProvider } from 'next-themes'

export const Route = createRootRoute({
  component: () => (
    <ThemeProvider defaultTheme="light">
      <div className="min-h-screen bg-gradient-to-b from-background to-muted/50">
 
        <main>
          <Outlet />
        </main>
      </div>
    </ThemeProvider>
  ),
})