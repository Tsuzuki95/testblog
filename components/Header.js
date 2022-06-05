// Header.js
import Link from 'next/link'
export default function Header() {
  return (
    <header className="bg-black text-white sticky top-0">
      <nav className="mb-20 flex items-center h-20">
        <Link href="/">
          <a className="pl-8 md:pl-20 lg:pl-40 xl:pl-64 2xl:pl-80">My Blog</a>
        </Link>
        <Link href="/about">
          <a className="pl-20">About</a>
        </Link>
      </nav>
    </header>
  )
}
