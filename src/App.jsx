import React from 'react'
import Header from './component/header/header'
import Nav from './component/nav/nav'
import About from './component/about/about'
import Experience from './component/experience/experience'
import Contact from './component/contact/contact'
import Footer from './component/footer/footer'
// import Servicess from './component/servicess/servicess'
// import Testimonials from './component/testimonials/testimonials'
// import Portfolio from './component/portfolio/portfolio'

const App = () => {
    return (
        //<div>Working on React</div>
        <>
        <Header/>
        <Nav/>
        <About/>
        <Experience/>
        {/* <Portfolio/>
        <Servicess/>
        <Testimonials/> */}
        <Contact/>
        <Footer/>
        </>
    )
}

export default App
