import Image from "next/image";
import Link from "next/link";

import { DashboardHeader } from "@/components/dashboard/DashboardHeader";
import { DashboardMain } from "@/components/dashboard/DashboardMain";

const DashboardPage = () => {
  return (
    <div className="min-h-screen bg-dark-300 p-6">
      <div className="mx-auto flex max-w-7xl flex-col space-y-8 rounded-xl bg-dark-400 p-8">
        <DashboardHeader />
        <DashboardMain />
      </div>
    </div>
  );
};

export default DashboardPage; 