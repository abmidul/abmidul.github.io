import React from "react"
import { Icons } from "@/components/ui/icons"
import { Button } from "@/components/ui/button"
import { Facebook, Mail, MapPin, Phone } from "lucide-react"

interface SocialContactLink {
  id: string
  name: string
  href: string
  title: string
  isExternal: boolean
  icon: React.ReactNode
  badgeText?: string
}

const SOCIAL_CONTACTS: SocialContactLink[] = [
  {
    id: "phone",
    name: "Phone",
    href: "tel:+8801981274162",
    title: "Call +8801981274162",
    isExternal: false,
    icon: <Phone className="h-4 w-4" />,
    badgeText: "+8801981274162",
  },
  {
    id: "location",
    name: "Location",
    href: "https://www.google.com/maps/search/?api=1&query=Amzad+Market%2C+Mizmizi%2C+Shiddirganj%2C+Narayanganj",
    title: "Amzad Market, Mizmizi, Shiddirganj, Narayanganj (Open in Maps)",
    isExternal: true,
    icon: <MapPin className="h-4 w-4" />,
    badgeText: "Narayanganj",
  },
  {
    id: "gmail",
    name: "Gmail",
    href: "mailto:abdullahalmidul@gmail.com",
    title: "Email: abdullahalmidul@gmail.com",
    isExternal: false,
    icon: <Mail className="h-4 w-4" />,
    badgeText: "abdullahalmidul@gmail.com",
  },
  {
    id: "whatsapp",
    name: "WhatsApp",
    href: "https://wa.me/8801981274162",
    title: "Chat on WhatsApp (+8801981274162)",
    isExternal: true,
    icon: <Icons.whatsapp className="h-4 w-4" />,
    badgeText: "+8801981274162",
  },
  {
    id: "facebook",
    name: "Facebook",
    href: "https://www.facebook.com/Abdullah.Al.Midul",
    title: "Facebook: Abdullah Al Midul",
    isExternal: true,
    icon: <Facebook className="h-4 w-4" />,
  },
  {
    id: "telegram",
    name: "Telegram",
    href: "https://t.me/ab_midul",
    title: "Telegram: t.me/ab_midul",
    isExternal: true,
    icon: <Icons.telegram className="h-4 w-4" />,
    badgeText: "@ab_midul",
  },
  {
    id: "x",
    name: "X (Twitter)",
    href: "https://x.com/ab_midul",
    title: "X: @ab_midul",
    isExternal: true,
    icon: <Icons.twitter className="h-4 w-4" />,
    badgeText: "@ab_midul",
  },
  {
    id: "discord",
    name: "Discord",
    href: "https://discord.com/users/ab_midul",
    title: "Discord: ab_midul",
    isExternal: true,
    icon: <Icons.discord className="h-4 w-4" />,
    badgeText: "ab_midul",
  },
  {
    id: "tiktok",
    name: "TikTok",
    href: "https://www.tiktok.com/@ab_midul?_r=1&_t=ZS-99QQVligYLa",
    title: "TikTok: @ab_midul (Open in TikTok)",
    isExternal: true,
    icon: <Icons.tiktok className="h-4 w-4" />,
    badgeText: "@ab_midul",
  },
]

function StackedCircularFooter() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer className="bg-zinc-950 py-14 text-zinc-200 border-t border-zinc-800/60">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center">
          {/* Logo badge */}
          <button
            onClick={scrollToTop}
            type="button"
            className="mb-8 group relative flex items-center justify-center rounded-full bg-zinc-900 border border-zinc-700/60 p-6 transition-all duration-300 hover:border-zinc-500 hover:scale-105 hover:bg-zinc-800/90 shadow-lg shadow-black/40"
            title="Back to top"
            aria-label="Back to top"
          >
            <Icons.logo className="h-7 w-7 text-zinc-200 transition-transform duration-300 group-hover:rotate-12" />
          </button>

          {/* 9 Social & Contact Action Buttons */}
          <div
            className="mb-8 flex flex-wrap items-center justify-center gap-3 sm:gap-3.5 max-w-xl mx-auto"
            aria-label="Direct contact and social media channels"
          >
            {SOCIAL_CONTACTS.map((item) => (
              <Button
                key={item.id}
                asChild
                variant="outline"
                size="icon"
                className="h-11 w-11 rounded-full border-zinc-700/80 bg-zinc-900/90 text-zinc-300 hover:border-zinc-400 hover:bg-zinc-800 hover:text-white hover:scale-110 active:scale-95 transition-all duration-200 shadow-sm"
              >
                <a
                  href={item.href}
                  target={item.isExternal ? "_blank" : undefined}
                  rel={item.isExternal ? "noopener noreferrer" : undefined}
                  title={item.title}
                  aria-label={item.title}
                >
                  {item.icon}
                  <span className="sr-only">{item.name}</span>
                </a>
              </Button>
            ))}
          </div>

          {/* Direct Address Hint */}
          <div className="mb-8 text-center">
            <a
              href="https://www.google.com/maps/search/?api=1&query=Amzad+Market%2C+Mizmizi%2C+Shiddirganj%2C+Narayanganj"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs text-zinc-400 hover:text-zinc-200 transition-colors"
              title="Open location in Google Maps"
            >
              <MapPin className="h-3.5 w-3.5 text-red-400 shrink-0" />
              <span>Amzad Market, Mizmizi, Shiddirganj, Narayanganj</span>
            </a>
          </div>

          {/* Copyright notice */}
          <div className="text-center">
            <p className="text-xs text-zinc-500">
              © {new Date().getFullYear()} Abdullah Al Midul. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export { StackedCircularFooter }
