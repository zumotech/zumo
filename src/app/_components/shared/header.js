import Link from 'next/link'
import Image from 'next/image'

const Header = () => {
  return (
    <header className='sticky top-0 z-40 backdrop-blur-sm bg-main/30'>
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