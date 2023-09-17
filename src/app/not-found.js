import Link from 'next/link'
import Main from '@/app/_components/shared/main'

export default function NotFound() {
  return (
    <Main>
      <div className='flex flex-col items-center justify-center flex-1'>
        <h2 className='font-extrabold text-9xl text-transparent bg-clip-text bg-gradient-to-br from-yellow-300 to-red-500'>404</h2>
        <h3>Not Found</h3>
        <Link href="/" className='hover:underline'>Return Home</Link>
      </div>
    </Main>
  )
}
