// src/routes/__root.tsx
import { createRootRoute, Link, Outlet } from '@tanstack/react-router'
import { Heart, Calendar, Bookmark, Settings, Menu, X, Home } from 'lucide-react'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { ModeToggle } from '@/MyComponents/items/mode-toggle'
import { ThemeProvider } from 'next-themes'
import GradientText from '@/MyComponents/gradientText'

export const Route = createRootRoute({
  component: () => {
    const [isScrolled, setIsScrolled] = useState(false)
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
    
    // Handle scroll effect for header
    useEffect(() => {
      const handleScroll = () => {
        if (window.scrollY > 10) {
          setIsScrolled(true)
        } else {
          setIsScrolled(false)
        }
      }
      
      window.addEventListener('scroll', handleScroll)
      return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
      <ThemeProvider defaultTheme="light">
        <div className="min-h-screen bg-gradient-to-b from-background to-muted/50">
          {/* Desktop Header */}
          <header 
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
              isScrolled ? 'bg-background/80 backdrop-blur-md shadow-md py-2' : 'py-4'
            }`}
          >
            <div className="container mx-auto px-4 flex justify-between items-center">
              {/* Logo */}
              <Link
                to="/"
                className="flex items-center gap-2 font-bold text-lg"
              >
                <Heart className="h-5 w-5 text-rose-500" />
                <span className="hidden sm:inline-block">
                  <GradientText gradient="from-rose-500 to-purple-500">
                    Date Night
                  </GradientText>
                </span>
              </Link>
              
        
              <nav className="hidden md:flex items-center gap-6">
                <Link
                  to="/"
                  activeProps={{
                    className: "text-rose-500 font-medium"
                  }}
                  className="text-muted-foreground hover:text-rose-500 transition-colors"
                >
                  Home
                </Link>
                <Link
                  to="/results"
                  activeProps={{
                    className: "text-rose-500 font-medium"
                  }}
                  className="text-muted-foreground hover:text-rose-500 transition-colors"
                >
                  Date Ideas
                </Link>
                <Link
                  to="/about"
                  activeProps={{
                    className: "text-rose-500 font-medium"
                  }}
                  className="text-muted-foreground hover:text-rose-500 transition-colors"
                >
                  About
                </Link>
              </nav>
              
              
            </div>
          </header>
          
          {/* Main content with padding to accommodate the fixed header */}
          <main className="pt-20">
            <Outlet />
          </main>
        </div>
      </ThemeProvider>
    )
  },
})