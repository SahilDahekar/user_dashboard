//Defining client side component
"use client"
import Link from 'next/link';
import { usePathname } from 'next/navigation'

// Sidebar component for navigation
const Sidebar = () => {
  // Get the current pathname using the 'usePathname' hook
  const pathname = usePathname();

  // Function to check if the given path is the current page
  const isCurrentPage = (path) => {
    return pathname === path;
  };

  // Render the sidebar with navigation links. Responsive component is implemented to work on both mobile and desktop layout.
  return (
    <div className="w-full bg-background text-foreground h-full rounded-lg">
      <div className="flex justify-between items-center lg:block">
        <Link href="/">
            <h2 className="lg:text-xl font-bold px-4 py-2 lg:px-6 lg:py-4 underline underline-offset-2 lg:underline-offset-4">Dashboard</h2>
        </Link>
        <ul className="py-2 px-1 flex items-center justify-evenly lg:block">
          <li className={`${isCurrentPage('/account') ? 'bg-neutral-800' : 'bg-background'} hover:bg-neutral-900 transition rounded-lg mx-1 my-1`}>
            <Link href="/account">
              <span className="block text-sm lg:text-base px-4 py-2 lg:px-6 lg:py-3">Account</span>
            </Link>
          </li>
          <li className={`${isCurrentPage('/userdetails') ? 'bg-neutral-800' : 'bg-background'} hover:bg-neutral-900 transition rounded-lg mx-1 my-1`}>
            <Link href="/userdetails">
              <span className="block text-sm lg:text-base px-4 py-2 lg:px-6 lg:py-3">User Details</span>
            </Link>
          </li>
        </ul>
      </div>
    
    </div>
  );
};

export default Sidebar;