import './globals.css'
import Navigation  from '../components/navigation'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'CJTech',
  description: 'A blog about arduino, pcb development, 3D printing, smart home and home automation',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      
      <body className={inter.className}>
        <Navigation />
        <div className=" text-zinc-100">
          {children}
        </div>
      </body>
    </html>
  )
}
