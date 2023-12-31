import './App.css'
import About from './components/About/About'
import Banner from './components/Banner/Banner'
import Creator from './components/Creator/Creator'
import Footer from './components/Footer/Footer'
import HowWorks from './components/HowWorks/HowWorks'
import Insight from './components/Insight/Insight'
import Track from './components/Track/Track'

function App() {

  return (
    <div className='text-white px-28'>
      hello
      <Banner />
      <About />
      <HowWorks />
      <Track />
      <Insight />
      <Creator/>
      <Footer/>
    </div>
  )
}

export default App
