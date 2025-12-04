import type { Metadata } from "next"
import { Geist, Geist_Mono, Poppins, Montserrat } from "next/font/google"
import "./globals.css"
import MaintenanceTxt from "@/components/MaintenanceTxt"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

const popppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
})

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
})

export const metadata: Metadata = {
  title: "Adeel Arafat",
  description: "Video Editor",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${popppins.variable} ${montserrat.variable} antialiased`}
      >
        <MaintenanceTxt />
        {children}
      </body>
    </html>
  )
}
