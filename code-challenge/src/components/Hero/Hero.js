import React from 'react';
import { Image } from 'react-bootstrap';
import heroimg from '../../assets/heroimg.PNG'
import './Hero.css'

const hero = () => {
    return(

        <Image className ="heroimg" src={heroimg} responsive />
    )
}

export default hero;