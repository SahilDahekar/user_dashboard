"use client"
import Link from 'next/link';
import { usePathname } from 'next/navigation'

const Sidebar = () => {
  const pathname = usePathname();

  const isCurrentPage = (path) => {
    return pathname === path;
  };

  return (
    <div className="w-full bg-background text-foreground h-full rounded-lg">
      {/* Desktop Sidebar */}
      <div className="hidden lg:block">
        <Link href="/">
            <h2 className="text-xl font-bold px-6 pt-6 py-4 underline underline-offset-4">Dashboard</h2>
        </Link>
        <ul className="py-2">
          <li className={`${isCurrentPage('/account') ? 'bg-neutral-800' : 'bg-background'} hover:bg-neutral-900 transition rounded-lg mx-2 my-1`}>
            <Link href="/account">
              <span className="block px-6 py-3">Account</span>
            </Link>
          </li>
          <li className={`${isCurrentPage('/userdetails') ? 'bg-neutral-800' : 'bg-background'} hover:bg-neutral-900 transition rounded-lg mx-2 my-1`}>
            <Link href="/userdetails">
              <span className="block px-6 py-3">User Details</span>
            </Link>
          </li>
        </ul>
      </div>

      {/* Mobile Sidebar */}
      <div className="flex justify-between items-center lg:hidden">
        <Link href="/">
            <h2 className="lg:text-xl font-bold px-4 py-2 lg:px-6 lg:py-4 underline underline-offset-2 lg:underline-offset-4">Dashboard</h2>
        </Link>
        <ul className="py-2 px-1 flex items-center justify-evenly">
          <li className={`${isCurrentPage('/account') ? 'bg-neutral-800' : 'bg-background'} hover:bg-neutral-900 transition rounded-lg mx-1 my-1`}>
            <Link href="/account">
              <span className="block text-sm px-4 py-2 lg:px-6 lg:py-3">Account</span>
            </Link>
          </li>
          <li className={`${isCurrentPage('/userdetails') ? 'bg-neutral-800' : 'bg-background'} hover:bg-neutral-900 transition rounded-lg mx-1 my-1`}>
            <Link href="/userdetails">
              <span className="block text-sm px-4 py-2 lg:px-6 lg:py-3">User Details</span>
            </Link>
          </li>
        </ul>
      </div>
    
    </div>
  );
};

export default Sidebar;