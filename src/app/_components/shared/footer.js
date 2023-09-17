import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import { faTwitter, faFontAwesome, faInstagram } from '@fortawesome/free-brands-svg-icons'
import Image from 'next/image'

const Footer = () => {
  return (
    <footer>
      <div className='flex flex-col max-w-screen-xl mx-auto p-4'>
        <div className="mx-auto mb-4">
          <Image
            src="/zumo-logo.svg"
            alt="ZUMO Logo"
            width={50}
            height={50}
            priority
          />
        </div>

        <p className='text-center text-sm leading-6'>© { new Date().getFullYear() } ZUMO. All rights reserved.</p>
      </div>
      {/*<p><FontAwesomeIcon icon={faCoffee} /></p>*/}
      {/*<p><FontAwesomeIcon icon={faTwitter} /></p>*/}
      {/*<p><FontAwesomeIcon icon={faFontAwesome} /></p>*/}
      {/*<p><FontAwesomeIcon icon={faInstagram} /></p>*/}
    </footer>
  )
}

export default Footer