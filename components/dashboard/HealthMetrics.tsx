import Image from "next/image";

const metrics = [
  {
    label: "Heart Rate",
    value: "72",
    unit: "bpm",
    icon: "/assets/icons/heart-rate.svg",
    trend: "up",
    change: "2.1%",
  },
  {
    label: "Blood Pressure",
    value: "120/80",
    unit: "mmHg",
    icon: "/assets/icons/blood-pressure.svg",
    trend: "stable",
    change: "0.0%",
  },
  {
    label: "Blood Glucose",
    value: "98",
    unit: "mg/dL",
    icon: "/assets/icons/glucose.svg",
    trend: "down",
    change: "1.3%",
  },
  {
    label: "Weight",
    value: "68",
    unit: "kg",
    icon: "/assets/icons/weight.svg",
    trend: "stable",
    change: "0.0%",
  },
];

export const HealthMetrics = () => {
  return (
    <div className="rounded-xl border border-dark-500/50 bg-dark-300 p-8">
      <h2 className="mb-8 text-18-semibold">Health Metrics</h2>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {metrics.map((metric) => (
          <div
            key={metric.label}
            className="flex flex-col gap-2 rounded-lg border border-dark-500/30 p-4"
          >
            <div className="flex items-center justify-between">
              <p className="text-14-medium text-dark-600">{metric.label}</p>
              <Image
                src={metric.icon}
                alt={metric.label}
                width={24}
                height={24}
              />
            </div>

            <div className="flex items-end justify-between">
              <div className="flex items-baseline gap-1">
                <p className="text-24-semibold">{metric.value}</p>
                <span className="text-14-regular text-dark-600">{metric.unit}</span>
              </div>

              <div className="flex items-center gap-1">
                <Image
                  src={`/assets/icons/trend-${metric.trend}.svg`}
                  alt="trend"
                  width={16}
                  height={16}
                  className={
                    metric.trend === "up"
                      ? "text-green-500"
                      : metric.trend === "down"
                      ? "text-red-500"
                      : "text-dark-600"
                  }
                />
                <span
                  className={`text-12-medium ${
                    metric.trend === "up"
                      ? "text-green-500"
                      : metric.trend === "down"
                      ? "text-red-500"
                      : "text-dark-600"
                  }`}
                >
                  {metric.change}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}; 