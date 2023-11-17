import { Inter } from 'next/font/google'
import './globals.css'
import Sidebar from './components/Sidebar'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'User Dashboard',
  description: 'A user dashboard build using next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} flex flex-col lg:flex-row gap-2 w-full h-[100vh]`}>
      <div className="w-full lg:w-[22%] px-2 py-2">
        <Sidebar/>
      </div>
      <div className="w-full lg:w-[78%] px-2 py-2">
        {children}
      </div>
      </body>
    </html>
  )
}
