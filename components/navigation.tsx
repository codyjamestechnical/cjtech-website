import Image from 'next/image'

export default function Navigation() {
  return (
    <nav className='sticky top-4 flex flex-row justify-center '>
        <ul className='flex flex-row max-w-fit rounded-full  bg-zinc-800/80 ring-1 ring-white/10 text-zinc-200 text-sm shadow-zinc-800/5 shadow-lg pl-4 pr-4  backdrop-blur-md'>
            <li className='hover:text-purple-300 text-purple-400 transition'>
                <a className=' relative block px-3 py-2' href="/">Home
                <span className="absolute inset-x-1 -bottom-px h-px bg-gradient-to-r from-purple-400/0 via-purple-400/40 to-purple-400/0"></span>
                </a>
                
            </li>
            <li>
                <a className=' relative block px-3 py-2' href="/about">About</a>
            </li>
        </ul>
    </nav>
  )
}

export async function getStaticProps() {
    const res = await fetch(
    "https://api.cjtech.io/api/v1/navigation"
    )
    const nav = await res.json()
    return {
        props: {
            nav,
        },
    }
}