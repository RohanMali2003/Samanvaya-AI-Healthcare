import { Brain, HeartPulse, ShieldCheck, Stethoscope } from "lucide-react";

const features = [
  {
    name: "AI-Powered Predictive Diagnostics",
    description: "Early detection of potential health issues using AI-driven analysis of medical data.",
    icon: Brain,
  },
  {
    name: "Real-Time Health Monitoring",
    description: "Continuous tracking of vitals via smartwatches, providing instant health insights.",
    icon: HeartPulse,
  },
  {
    name: "Secure & Verified Digital Prescriptions",
    description: "Blockchain-powered prescription verification to prevent fraud and ensure authenticity.",
    icon: ShieldCheck,
  },
  {
    name: "AI-Driven Virtual Health Assistant",
    description: "An intelligent chatbot offering preliminary diagnoses and guiding patients in real-time.",
    icon: Stethoscope,
  },
];

export default function Features() {
  return (
    <section className="container space-y-16 py-24 md:py-32">
      <div className="mx-auto max-w-[58rem] text-center">
        <h2 className="font-bold text-3xl leading-[1.1] sm:text-3xl md:text-5xl">
          AI-Powered Healthcare at Your Fingertips
        </h2>
        <p className="mt-4 text-muted-foreground sm:text-lg">
          Revolutionizing healthcare with real-time monitoring, predictive diagnostics, and secure prescriptions.
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
  );
}
