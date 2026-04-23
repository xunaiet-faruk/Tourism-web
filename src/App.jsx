
import './App.css'
import Banner from './component/Banner'
import FeaturesTour from './component/FeaturesTour'
import Popular from './component/Popular'
import TourismInfo from './component/TourismInfo'
import TravelCarousel from './component/TravelCarousel'
import Footer from './shared/Footer'
import Heading from './shared/Heading'

function Home() {
  return (
   <>
      <div className='max-w-[1920px] mx-auto'>
        <Heading />
        <Banner/>
        <TourismInfo/>
        <Popular/>
        <FeaturesTour/>
        <TravelCarousel/>
        <Footer/>
      </div>
   
   </>
  )
}

export default Home
