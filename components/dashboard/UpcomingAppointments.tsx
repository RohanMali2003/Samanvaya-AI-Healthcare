import Image from "next/image";
import Link from "next/link";

import { StatusBadge } from "@/components/StatusBadge";
import { Doctors } from "@/constants";
import { formatDateTime } from "@/lib/utils";

export const UpcomingAppointments = () => {
  return (
    <div className="rounded-xl border border-dark-500/50 bg-dark-300 p-8">
  <div className="mb-8 flex items-center justify-between">
        <h2 className="text-18-semibold">Upcoming Appointments</h2>
        <Link 
          href="/appointments" 
          className="text-14-medium text-green-500 hover:text-green-600"
        >
          View All
        </Link>
      </div>

      <div className="space-y-4">
        {/* We'll replace this with real data later */}
        {[1, 2].map((_, index) => (
          <div 
            key={index}
            className="flex items-center justify-between rounded-lg border border-dark-500/30 p-4"
          >
            <div className="flex items-center gap-4">
              <Image
                src={Doctors[0].image}
                alt="doctor"
                width={48}
                height={48}
                className="rounded-full"
              />
              <div>
                <p className="text-16-medium">Dr. {Doctors[0].name}</p>
                <p className="text-14-regular text-dark-600">
                  {formatDateTime(new Date()).dateTime}
                </p>
              </div>
            </div>
            <StatusBadge status="scheduled" />
          </div>
        ))}
      </div>
    </div>
  );
}; 