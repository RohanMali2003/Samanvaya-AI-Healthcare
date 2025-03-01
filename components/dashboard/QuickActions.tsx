import Image from "next/image";
import Link from "next/link";

const actions = [
  {
    label: "Book Appointment",
    icon: "/assets/icons/calendar-plus.svg",
    href: "/appointments/new",
    color: "bg-green-500/10",
  },
  {
    label: "Message Doctor",
    icon: "/assets/icons/message.svg",
    href: "/messages",
    color: "bg-blue-500/10",
  },
  {
    label: "View Records",
    icon: "/assets/icons/folder.svg",
    href: "/records",
    color: "bg-orange-500/10",
  },
  {
    label: "Get Help",
    icon: "/assets/icons/help.svg",
    href: "/help",
    color: "bg-purple-500/10",
  },
];

export const QuickActions = () => {
  return (
    <div className="rounded-xl border border-dark-500/50 bg-dark-300 p-8">
  <h2 className="mb-8 text-18-semibold">Quick Actions</h2>

      <div className="grid grid-cols-2 gap-4">
        {actions.map((action) => (
          <Link
            key={action.label}
            href={action.href}
            className={`flex flex-col items-center gap-3 rounded-lg ${action.color} p-4 transition-colors hover:opacity-80`}
          >
            <Image
              src={action.icon}
              alt={action.label}
              width={24}
              height={24}
            />
            <p className="text-14-medium text-center">{action.label}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}; 