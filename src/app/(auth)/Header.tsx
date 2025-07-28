'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="bg-gray-900 text-white p-4">
      <h1 className="text-xl font-bold mb-2">🌐 My Website Header</h1>
      <nav>
        <ul className="flex gap-6">
          <li>
            <Link
              href="/login"
              className={`hover:text-blue-900 ${pathname === '/login' ? 'text-blue-500 font-bold' : ''}`}
            >
              Login
            </Link>
          </li>
          <li>
            <Link
              href="/register"
              className={`hover:text-blue-400 ${pathname === '/register' ? 'text-blue-500 font-bold' : ''}`}
            >
              Register
            </Link>
          </li>
          <li>
            <Link
              href="/forgotpassword"
              className={`hover:text-blue-400 ${pathname === '/forgotpassword' ? 'text-blue-500 font-bold' : ''}`}
            >
              Forget Password
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
