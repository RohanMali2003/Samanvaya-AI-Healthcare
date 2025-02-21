import { Brain, HeartPulse, Lock, Users } from "lucide-react";

const features = [
  {
    name: "AI-Powered Relapse Prevention",
    description: "Predict relapse risks in real time using wearable data and behavioral analysis.",
    icon: Brain,
  },
  {
    name: "24/7 Mental Health Support",
    description: "An empathetic AI chatbot providing continuous guidance and crisis intervention.",
    icon: Users,
  },
  {
    name: "Blockchain-Powered Prescription Security",
    description: "Tamper-proof digital prescriptions ensuring medication safety and preventing misuse.",
    icon: Lock,
  },
  {
    name: "Real-Time Health Monitoring",
    description: "Seamless integration with smartwatches to track stress levels, sleep patterns, and heart rate variability.",
    icon: HeartPulse,
  },
]

export default function Features() {
  return (
    <section className="container space-y-16 py-24 md:py-32">
      <div className="mx-auto max-w-[58rem] text-center">
        <h2 className="font-bold text-3xl leading-[1.1] sm:text-3xl md:text-5xl">          ReLive: Transforming Addiction Recovery with AI
        </h2>
        <p className="mt-4 text-muted-foreground sm:text-lg">
          Discover how ReLive empowers individuals with cutting-edge technology for relapse prevention and mental well-being.
        </p>
      </div>
      <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-2">
        {features.map((feature) => (
          <div key={feature.name} className="relative overflow-hidden rounded-lg border bg-background p-8">
            <div className="flex items-center gap-4">
              <feature.icon className="h-8 w-8" />
              <h3 className="font-bold">{feature.name}</h3>
            </div>
            <p className="mt-2 text-muted-foreground">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

