import { Col, Container, Row } from "./grid";
import Social from "../components/Social"
import img from "../assets/img/coin/footer-img.png"
import footershap from "../assets/img/footershap.png"

export default function Footer() {
  return (
    <div className="footer pt-6 pb-31 md:pb-42 lg:pb-70 xl:pb-[330px] relative z-10">
      <img className="absolute left-0 bottom-0 w-full h-[130%] -z-1" src={footershap} alt="Img" loading='lazy' />
      <Container>
        <Row className="justify-center">
          <Col xs={12} md={7} xl={6}>
            <div className="text-center ">
              <a href="/" className="block text-base md:text-lg lg:text-xl font-semibold text-black py-2 lg:py-3 px-5 lg:px-6 border rounded-lg max-w-max mx-auto bg-white mb-4 lg:mb-5 xl:mb-6 cursor-pointer border-black shadow-[1px_1px_0px_#000] hover:bg-[#FECC00] hover:text-white hover:scale-[1.05]">WHITEPAPER</a>
              <p className="text-base md:text-xl lg:text-2xl font-semibold !leading-[1.5] text-black capitalize tracking-[0.48px] mb-4 lg:mb-5 xl:mb-6">Join the movement. Buy $SPANCH. Burn the supply. Build the meme-conomy.</p>
              <div className="flex justify-center">
                <Social />
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      <img src={img} className="w-full h-[140px] md:h-[200px] lg:h-[350px] xl:h-[450px]  absolute left-0 bottom-5 lg:bottom-6 -z-[1]" alt="Img" loading='lazy' />
    </div>
  )
}
