import '../Styles/AboutUsPageStyle.css';

import React from 'react';
import OurStorySvg from '../Assets/OurStorySvg.svg';
import OurStorySvg1 from '../Assets/OurStorySvg1.svg';
import OurStoryBgVideo from '../Assets/OurStoryBgVideo.mp4';
export const AboutUsPage = () => {
  return (
    <div className='about-us-section'>
        <div className="about-us-row1">
            <video autoPlay loop muted playsInline className="background-video">
                <source src={OurStoryBgVideo} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            {/* <img src={OurStoryBgSvg} alt="" className="background-video" /> */}
            <span className="our-story">Our Story</span>
        </div>

        <div className="about-us-row2">
            <div className="about-us-row2-col-left">
                <span className='born-to-shine'>Born to shine</span>
                <span className='since-2025'>Since 2025</span>
            </div>
            <div className="about-us-row2-col-right">
                <span className='about-us-span-text'>
                    Originally conceived to deliver cutting-edge stage lighting solutions tailored
                    for extensive tours, Zenith has since evolved into the ultimate destination
                    for companies of all sizes in search of impeccable lighting and effects
                    equipment, unparalleled design expertise, and unbeatable value.
                </span>
                <span className='about-us-span-text'>
                    Now headquartered in Orlando, our entire ethos revolves around our valued
                    clients. We’ve made substantial investments in top-notch equipment and
                    renowned brands. From stage and touring lighting setups that dazzle, to events
                    that pulse with energy, and conferences and trade shows that leave a lasting
                    impact, Zenith has it all covered. And with our cutting-edge project
                    management system, we ensure your equipment is precisely where you need it,
                    precisely when you need it.
                </span>
            </div>
        </div>
        <div className="about-us-row3">
            <div className="about-us-row3-col-left">
                <img src={OurStorySvg} className='our-story-svg' alt="Our story" />
            </div>
            <div className="about-us-row3-col-right">
                <span className='about-us-rows-title'>Our Story</span>
                <span className='about-us-span-text'>
                Now headquartered in Orlando, our entire ethos revolves around our valued
                clients. We’ve made substantial investments in top-notch equipment and
                renowned brands. From stage and touring lighting setups that dazzle, to events
                that pulse with energy, and conferences and trade shows that leave a lasting
                impact, Zenith has it all covered. And with our cutting-edge project
                management system, we ensure your equipment is precisely where you need it,
                precisely when you need it.
                </span>
                <span className='about-us-span-text'>
                    Now headquartered in Orlando, our entire ethos revolves around our valued
                    clients. We’ve made substantial investments in top-notch equipment and
                    renowned brands. From stage and touring lighting setups that dazzle, to events
                    that pulse with energy, and conferences and trade shows that leave a lasting
                    impact, Zenith has it all covered. And with our cutting-edge project
                    management system, we ensure your equipment is precisely where you need it,
                    precisely when you need it.
                </span>
            </div>
        </div>
        <div className="our-culture">
            <span className='about-us-rows-title'>Our Culture</span>
        </div>

        <div className="about-us-row4">
            <div className="about-us-row4-col-left">
                <span className='about-us-span-text'>
                    Now headquartered in Orlando, our entire ethos revolves around our valued
                    clients. We’ve made substantial investments in top-notch equipment and
                    renowned brands. From stage and touring lighting setups that dazzle, to events
                    that pulse with energy, and conferences and trade shows that leave a lasting
                    impact, Zenith has it all covered. And with our cutting-edge project
                    management system, we ensure your equipment is precisely where you need it,
                    precisely when you need it.
                </span>
                <span className='about-us-span-text'>
                    Now headquartered in Orlando, our entire ethos revolves around our valued
                    clients. We’ve made substantial investments in top-notch equipment and
                    renowned brands. From stage and touring lighting setups that dazzle, to events
                    that pulse with energy, and conferences and trade shows that leave a lasting
                    impact, Zenith has it all covered. And with our cutting-edge project
                    management system, we ensure your equipment is precisely where you need it,
                    precisely when you need it.
                </span>
            </div>
            <div className="about-us-row4-col-right">
                <img src={OurStorySvg1} alt="Our story" className='our-story-svg1' />
            </div>     
        </div>
    </div>
  )
}
