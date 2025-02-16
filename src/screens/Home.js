import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Card from '../components/Card'
import Carousal from '../components/Carousal'
import CardContainer from '../components/Card-container';

export default function Home() {
    return (
        <div>
            <div> <Navbar /> </div>
            <div><Carousal/></div>
            <CardContainer containerName="Clothes" />
            <CardContainer containerName="Grocery" />
            <CardContainer containerName="Medicines" />
            <CardContainer containerName="Pulses" />
            <CardContainer containerName="Flour" />
            <CardContainer containerName="Flowers" />
            <CardContainer containerName="Furnitures" />
            <div> <Footer /> </div>
        </div>
    )
}
