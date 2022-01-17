import React from 'react'
import Footer from './Footer'
import Header from './Header'

export default function Layout({ children, active }) {
    return (
        <div >
            <div className='container mx-auto px-28 mt-10'>
                <Header active={active} />
            </div>
            {children}
            <Footer />
        </div>
    )
}


