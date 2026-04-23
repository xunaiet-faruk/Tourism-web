
import './App.css'
import Banner from './component/Banner'
import Popular from './component/Popular'
import TourismInfo from './component/TourismInfo'
import Heading from './shared/Heading'

function App() {
  return (
   <>
      <div className='max-w-[1920px] mx-auto'>
        <Heading />
        <Banner/>
        <TourismInfo/>
        <Popular/>
      </div>
   
   </>
  )
}

export default App
