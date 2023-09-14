import Image from 'next/image'
import Main from '@/app/_components/shared/main'

export default function Home() {
  return (
    <Main>
      <section className='w-full flex flex-col items-center justify-center min-h-screen'>
        <div className='w-full max-w-screen-xl mx-auto p-4'>
          <div className='w-full max-w-3xl'>
            <h1 className='font-extrabold text-6xl mb-8 text-transparent bg-clip-text bg-gradient-to-br from-yellow-300 to-red-500'>Your Partner in Web Development</h1>

            <p className='text-2xl'>Are you ready to elevate your online presence and drive business growth through exceptional web solutions?
              Look no further!
              ZUMO is your trusted web development partner, dedicated to crafting stunning, high-performing websites tailored to your unique needs.</p>
          </div>
        </div>
      </section>

      <section className='w-full'>
        <div className='w-full max-w-screen-xl mx-auto p-4'>
          <h2 className='font-extrabold text-4xl text-center mb-24 mt-24'>Why Choose ZUMO?</h2>

          <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-6'>
            <div className='p-4'>
              <h3 className='font-extrabold text-2xl mb-4'>Expertise</h3>
              {/* eslint-disable-next-line react/no-unescaped-entities */}
              <p className='text-lg mb-4'>Our team of seasoned developers brings years of experience and cutting-edge skills to the table. From front-end design to back-end functionality, we've got you covered.</p>
            </div>

            <div className='p-4'>
              <h3 className='font-extrabold text-2xl mb-4'>Custom Solutions</h3>
              {/* eslint-disable-next-line react/no-unescaped-entities */}
              <p className='text-lg mb-4'>One-size-fits-all doesn't cut it in the digital world. We specialize in creating bespoke websites that reflect your brand identity and goals.</p>
            </div>

            <div className='p-4'>
              <h3 className='font-extrabold text-2xl mb-4'>Responsive Design</h3>
              {/* eslint-disable-next-line react/no-unescaped-entities */}
              <p className='text-lg mb-4'>In today's mobile-first era, your website needs to shine on all devices. We ensure that your site is not just beautiful but fully responsive too.</p>
            </div>

            <div className='p-4'>
              <h3 className='font-extrabold text-2xl mb-4'>SEO Optimization</h3>
              {/* eslint-disable-next-line react/no-unescaped-entities */}
              <p className='text-lg mb-4'>What good is a website if it can't be found? We implement SEO best practices to boost your site's visibility and search engine ranking.</p>
            </div>

            <div className='p-4'>
              <h3 className='font-extrabold text-2xl mb-4'>E-commerce Excellence</h3>
              {/* eslint-disable-next-line react/no-unescaped-entities */}
              <p className='text-lg mb-4'>If you're looking to sell online, our e-commerce solutions will empower your business to thrive in the digital marketplace.</p>
            </div>

            <div className='p-4'>
              <h3 className='font-extrabold text-2xl mb-4'>User-Centric Approach</h3>
              <p className='text-lg mb-4'>Your users matter. We focus on creating user-friendly, intuitive interfaces that keep visitors engaged and coming back for more.</p>
            </div>

            <div className='p-4'>
              <h3 className='font-extrabold text-2xl mb-4'>Cutting-Edge Technology</h3>
              <p className='text-lg mb-4'>From the latest frameworks to innovative development techniques, we stay ahead of the curve to provide you with top-notch solutions.</p>
            </div>

            <div className='p-4'>
              <h3 className='font-extrabold text-2xl mb-4'>Client-Centric Philosophy</h3>
              <p className='text-lg mb-4'>Your success is our success. We pride ourselves on clear communication, timely delivery, and exceptional customer support.</p>
            </div>
          </div>
        </div>
      </section>

      <section className='w-full'>
        <div className='w-full max-w-screen-xl mx-auto p-4'>
          <h2 className='font-extrabold text-4xl text-center mb-24 mt-24'>Our Services</h2>

          <div className='mx-auto md:flex items-center px-6 pt-20 md:pt-36'>
            <div className='md:w-1/2 md:pr-24 pb-8'>
              <h3 className='font-extrabold text-3xl mb-4'>Web Design</h3>
              <p className='text-lg mb-4'>Our design wizards transform your vision into pixel-perfect reality, ensuring a visually stunning and engaging website.</p>
            </div>

            <div className='flex md:w-1/2'>IMAGE?</div>
          </div>

          <div className='mx-auto md:flex flex-row-reverse items-center px-6 pt-20 md:pt-36'>
            <div className='md:w-1/2 md:pl-24 pb-8'>
              <h3 className='font-extrabold text-3xl mb-4'>Web Development</h3>
              <p className='text-lg mb-4'>Our developers code with precision, creating powerful, scalable, and secure web applications.</p>
            </div>

            <div className='flex md:w-1/2'>IMAGE?</div>
          </div>

          <div className='mx-auto md:flex items-center px-6 pt-20 md:pt-36'>
            <div className='md:w-1/2 md:pr-24 pb-8'>
              <h3 className='font-extrabold text-3xl mb-4'>E-commerce Solutions</h3>
              <p className='text-lg mb-4'>We build robust online stores that maximize conversions and streamline the shopping experience.</p>
            </div>

            <div className='flex md:w-1/2'>IMAGE?</div>
          </div>

          <div className='mx-auto md:flex flex-row-reverse items-center px-6 pt-20 md:pt-36'>
            <div className='md:w-1/2 md:pl-24 pb-8'>
              <h3 className='font-extrabold text-3xl mb-4'>CMS Development</h3>
              <p className='text-lg mb-4'>Take control of your content with our custom Content Management System (CMS) solutions.</p>
            </div>

            <div className='flex md:w-1/2'>IMAGE?</div>
          </div>

          <div className='mx-auto md:flex items-center px-6 pt-20 md:pt-36'>
            <div className='md:w-1/2 md:pr-24 pb-8'>
              <h3 className='font-extrabold text-3xl mb-4'>Website Maintenance</h3>
              {/* eslint-disable-next-line react/no-unescaped-entities */}
              <p className='text-lg mb-4'>We're with you for the long haul, offering ongoing support, updates, and enhancements to keep your site in top shape.</p>
            </div>

            <div className='flex md:w-1/2'>IMAGE?</div>
          </div>
        </div>
      </section>

      <section className='w-full flex flex-col items-center justify-center min-h-screen'>
        <div className='w-full max-w-screen-xl mx-auto text-center p-4'>
          {/* eslint-disable-next-line react/no-unescaped-entities */}
          <h2 className='font-extrabold text-4xl text-center mb-24 mt-24'>Let's Get Started</h2>

          <p className='text-lg mb-8'>Ready to transform your digital presence? Contact us today for a free consultation.<br/>
            Whether you have a clear vision or need guidance, ZUMO is here to turn your web development dreams into reality.</p>

          {/* eslint-disable-next-line react/no-unescaped-entities */}
          <p className="text-lg mb-4">Join the ranks of our satisfied clients who have experienced the ZUMO difference.<br/> Let's build something incredible together!</p>

          <p>CONTACT FORM</p>
        </div>
      </section>
    </Main>
  )
}
