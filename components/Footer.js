// Footer.js
import Link from 'next/link'
export default function Footer() {
  return (
    <footer className="text-white text-xs">
      <div className="bg-gray-900 flex-col text-center cursor-pointer">
        <Link href="/">
          <div className="h-20 flex justify-center items-center">
            Top Page
          </div>
        </Link>
        <Link href="/about">
          <div className="h-20 flex justify-center items-center border-t border-gray-500">
            About Page
          </div>
        </Link>
      </div>
      <div className="bg-black h-10 flex justify-center items-center">
        &copy;Daisuke All Rights Reserved.
      </div>
    </footer>
  )
}
