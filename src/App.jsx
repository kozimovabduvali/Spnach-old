import Header from './components/Header'
import Banner from './components/Banner'
import About from './components/About'
import Footer from './components/Footer'
import Coin from './components/Coin'
import Howto from './components/Howto'
import What from './components/What'
import Roadmap from './components/Roadmap'
import Earn from './components/Earn'
import Video from './components/Video'

export default function Home() {
  return (
    <>
      <Header />
      <Banner />
      <About />
      <What />
      <Video />
      <Roadmap />
      <Earn />
      <Coin />
      <Howto />
      <Footer />
    </>
  )
}
