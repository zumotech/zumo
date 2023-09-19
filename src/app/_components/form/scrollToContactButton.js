"use client"
import React from 'react'

const ScrollToContactButton = () => {
  const handleScrollToContact = () => {
    let contactForm = document.getElementById('contact-form')

    contactForm?.scrollIntoView({ behavior: 'smooth' });
  }

  return (
    <>
    <button
      type="button"
      onClick={handleScrollToContact}
      // className="outline-none py-4 px-5 text-xl font-bold text-main text-center rounded bg-red-500 hover:bg-red-600 sm:w-fit bg-gradient-to-br from-yellow-300 to-red-500 hover:from-red-500 hover:to-yellow-300">
      className="outline-none py-4 px-8 text-base text-main text-center bg-main-green sm:w-fit">
      {/* eslint-disable-next-line react/no-unescaped-entities */}
      Let's work together</button>
    </>

  )
}

export default ScrollToContactButton