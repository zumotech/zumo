"use client"
import Link from 'next/link'
import Image from 'next/image'
import useScroll from '@/lib/hooks/use-scroll'

const Header = () => {
  const scrolled = useScroll(100)

  return (
    <header className={`sticky top-0 z-40 transition-colors duration-300 ${scrolled ? 'backdrop-blur-sm bg-main/30' : ''} `}>
      <div className='flex max-w-screen-xl mx-auto p-4'>
        <Link href='/'>
          <Image
            src="/zumo-logo.svg"
            alt="ZUMO Logo"
            width={70}
            height={70}
            priority
          />
        </Link>
      </div>
    </header>
  )
}

export default Header