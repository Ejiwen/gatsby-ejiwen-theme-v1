import React from 'react'
import '../../styles/style.css';
import Intro from '../Intro'
import MenuLeft from '../MenuLeft'
import ContactSociaux from '../ContactSociaux'
import Footer from '../footer'


const LeftSide = () => {
    return (
        <div className='sideLeft'>
        <Intro />
        <MenuLeft />
        <ContactSociaux />
        <Footer />
        </div>
    )
}

export default LeftSide;