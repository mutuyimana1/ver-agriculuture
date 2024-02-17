import About from "../copmponents/about"
import Footer from "../copmponents/footer"
import Gallery from "../copmponents/gallery"
import Header from "../copmponents/header"
import NavBar from "../copmponents/navBar"
import AboutUs from "./aboutUs"
import ContactUs from "./contactUs"

const HomePage = () => {
  return (
    <div className="h-full w-full text-black bg-[#edefef]">
        <NavBar/>
        <Header/>
        <About/>
        <Gallery/> 
        <Footer/>
        </div>
  )
}

export default HomePage