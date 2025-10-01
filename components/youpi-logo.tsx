"use client"

import Image from "next/image"
import Link from "next/link"

export function YoupiLogo({
  className = "",
  variant = "with-text",
}: {
  className?: string
  variant?: "logo-only" | "with-text"
}) {
  if (variant === "logo-only") {
    return (
      <Link href="/" className={`flex items-center ${className}`}>
        <Image src="/youpi-logo.png" alt="Youpi Logo" width={40} height={40} className="object-contain" priority />
      </Link>
    )
  }

  return (
    <Link href="/" className={`flex items-center gap-2 sm:gap-3 ${className}`}>
      <Image src="/youpi-logo.png" alt="Youpi Logo" width={32} height={32} className="object-contain" priority />
      <span className="font-poppins font-semibold text-lg sm:text-xl">
        <span className="text-foreground">Youp</span>
        <span className="text-[#FCD34D]">i</span>
      </span>
    </Link>
  )
}
