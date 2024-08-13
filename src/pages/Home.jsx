import React from 'react'

import Hero from '../components/Hero'
import Collections from '../components/Collections'
import ZomantoApp from '../components/ZomantoApp'
import PopularPlaces from '../components/PopularPlaces'

const Home = () => {
    return (
        <>
            <Hero />
            <Collections />
            <PopularPlaces/>
            <ZomantoApp />
        </>
    )
}

export default Home