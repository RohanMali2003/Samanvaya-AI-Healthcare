// import { AIAssistant } from "./AIAssistant";
// import { HealthMetrics } from "./HealthMetrics";
// import { QuickActions } from "./QuickActions";
"use client";
import { use } from "react";
import { AIAssistant } from "./AIAssistant";
import { HealthMetrics } from "./HealthMetrics";
import { QuickActions } from "./QuickActions";
import { UpcomingAppointments } from "./UpcomingAppointments";

export const DashboardMain = () => {
  return (
    <main className="grid grid-cols-1 gap-8 lg:grid-cols-3">
      {/* Left Column */}
      <div className="space-y-8 lg:col-span-2">
        <HealthMetrics />
        <UpcomingAppointments />
      </div>

      {/* Right Column */}
      <div className="space-y-8">
        <QuickActions />
        <AIAssistant />
      </div>
    </main>
  );
}; 