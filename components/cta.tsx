'use client'
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function CTA() {
  return (
    <section className="border-t">
      <div className="container flex flex-col items-center gap-4 py-24 text-center md:py-32">
        <h2 className="font-bold text-3xl leading-[1.1] sm:text-3xl md:text-5xl">
          Smarter Healthcare, Powered by AI
        </h2>
        <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
          Experience the future of remote health monitoring and AI-driven diagnostics.
          Stay ahead of potential health risks with real-time insights and smart alerts.
        </p>
        <Link href="/onboarding" className="mt-4">
          <Button size="lg" aria-label="Get Started with AI-powered healthcare">
            Get Started
          </Button>
        </Link>
      </div>
    </section>
  )
}
