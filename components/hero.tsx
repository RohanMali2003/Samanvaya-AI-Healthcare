import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="container flex min-h-[calc(100vh-3.5rem)] max-w-screen-2xl flex-col items-center justify-center space-y-8 py-24 text-center md:py-32">
      <div className="space-y-4">
        <h2 className="bg-gradient-to-br from-foreground from-30% via-foreground/90 to-foreground/70 bg-clip-text text-4xl font-bold tracking-tight text-transparent sm:text-5xl md:text-6xl lg:text-7xl">
          AI-Powered Healthcare, <br />
          Predictive Diagnostics, and Secure Prescriptions
          <br />
          <strong>AI Health Companion</strong><br />
        </h2>
        <p className="mx-auto max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
          Transforming healthcare with real-time vitals monitoring, AI-driven early disease detection, and blockchain-secured prescriptions. Our intelligent assistant provides instant medical insights, connects patients with doctors, and ensures proactive health management for a safer future.
        </p>
      </div>
      <div className="flex gap-4">
        <Button size="lg">
          <Link href="/chatbot" className="transition-colors hover:text-primary">
            Consult AI Health Assistant
          </Link>
        </Button>
        <Button variant="outline" size="lg">
          <Link href="/dashboard" className="transition-colors hover:text-primary">
            View Health Dashboard
          </Link>
        </Button>
      </div>
    </section>
  );
}
