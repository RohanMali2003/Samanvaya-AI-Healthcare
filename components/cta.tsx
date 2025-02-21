import { Button } from "@/components/ui/button"

export default function CTA() {
  return (
    <section className="border-t">
      <div className="container flex flex-col items-center gap-4 py-24 text-center md:py-32">
        <h2 className="font-bold text-3xl leading-[1.1] sm:text-3xl md:text-5xl">
          Take Control of Your Recovery Journey
        </h2>
        <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
          Empowering individuals with AI-driven support, predictive insights, and secure prescriptions. Join ReLive
          and build a healthier, relapse-free future.
        </p>
        <Button size="lg" className="mt-4">
          Start Your Journey
        </Button>
      </div>
    </section>
  )
}