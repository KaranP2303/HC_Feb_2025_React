import React from 'react'
import HeroSection from './HeroSection'
import { AboutOurService } from './AboutOurService'
import Counters from './Counter'
import { WhyHCAcademy } from './WhyHcAcademy'
import { CyberSecurityModules } from './CyberSecurityModule'
import { Testimonials } from './Testimonial'
import { ContactForm } from './ContactForm'

export const HomePageContainer = () => {
  return (
    <>
        <HeroSection/>
        <AboutOurService/>
        <Counters/>
        <WhyHCAcademy/>
        <CyberSecurityModules/>
        <Testimonials />
        <ContactForm />
    </>
  )
}
