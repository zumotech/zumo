"use client"
import React, { useState } from 'react'
import process from 'next/dist/build/webpack/loaders/resolve-url-loader/lib/postcss'

const ContactForm = () => {
  const [email, setEmail] = useState("")
  const [subject, setSubject] = useState("")
  const [message, setMessage] = useState("")
  const [errors, setErrors] = useState({})

  const handleValidation = () => {
    let tempErrors = {}
    let isValid = true

    if (email.trim().length <= 0) {
      tempErrors["email"] = true
      isValid = false
    }

    if (subject.trim().length <= 0) {
      tempErrors["subject"] = true
      isValid = false
    }

    if (message.trim().length <= 0) {
      tempErrors["message"] = true
      isValid = false
    }

    setErrors({ ...tempErrors })

    return isValid
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    let isValid = handleValidation()

    if (isValid) {
      const apiEndpoint = '/api/contact';

      await fetch(apiEndpoint, {
          method: 'POST',
          body: JSON.stringify({
            email: email,
            subject: subject,
            message: message,
          })
        })
        .then(res => {
          setEmail('')
          setSubject('')
          setMessage('')
        })
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-8 text-left" noValidate autoComplete='off'>
      <div>
        <label htmlFor="email" className="block mb-2 text-sm font-bold">Email</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          className={`bg-main-light text-base rounded block w-full p-4 ${errors && errors.email ? 'bg-red-600' : ''}`}
          placeholder="happy@client.com"
          autoComplete='new-password'
          required/>
      </div>
      <div>
        <label htmlFor="subject" className="block mb-2 text-sm font-bold">Subject</label>
        <input
          type="text"
          id="subject"
          value={subject}
          onChange={(e) => {
            setSubject(e.target.value);
          }}
          className={`bg-main-light text-base rounded block w-full p-4 ${errors && errors.subject ? 'bg-red-600' : ''}`}
          placeholder="How can we help you?"
          required/>
      </div>
      <div className="sm:col-span-2">
        <label htmlFor="message" className="block mb-2 text-sm font-bold">Message</label>
        <textarea
          id="message"
          rows="6"
          value={message}
          onChange={(e) => {
            setMessage(e.target.value);
          }}
          className={`bg-main-light text-base rounded block w-full p-4 ${errors && errors.message ? 'bg-red-600' : ''}`}
          placeholder="Tell us more..."></textarea>
      </div>
      <button type="submit" className="py-4 px-5 text-base text-main font-medium text-center rounded bg-red-500 sm:w-fit hover:bg-red-600 bg-gradient-to-br from-yellow-300 to-red-500 hover:from-red-500 hover:to-yellow-300">
        Send message</button>
    </form>
  )
}

export default ContactForm