import './globals.css'
import '@fortawesome/fontawesome-svg-core/styles.css'
import { Inter } from 'next/font/google'
import Header from '@/app/_components/shared/header'
import Footer from '@/app/_components/shared/footer'
import Head from 'next/head'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'ZUMO - Your Partner in Web Development',
  description: 'Are you ready to elevate your online presence and drive business growth through exceptional web solutions? Look no further! ZUMO is your trusted web development partner, dedicated to crafting stunning, high-performing websites tailored to your unique needs.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
    <Head>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
        <link rel="manifest" href="/site.webmanifest"/>
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#020917"/>
        <meta name="msapplication-TileColor" content="#020917"/>
        <meta name="theme-color" content="#020917"/>
    </Head>

      <body className={`${inter.className} bg-main text-main-text`}>
        <Header/>

        {children}

        <Footer/>
      </body>
    </html>
  )
}
