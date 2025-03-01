import Image from "next/image";
import Link from "next/link";

export const DashboardHeader = () => {
  return (
    <header className="flex items-center justify-between border-b border-dark-500/50 pb-6">
      <Link href="/" className="cursor-pointer">
        <Image
          src="/assets/icons/logo-full.svg"
          height={32}
          width={162}
          alt="logo"
          className="h-8 w-fit"
        />
      </Link>

      <div className="flex items-center gap-4">
        <button className="text-14-medium text-dark-600 hover:text-dark-700">
          Help
        </button>
        <button className="text-14-medium text-dark-600 hover:text-dark-700">
          Settings
        </button>
      </div>
    </header>
  );
}; 