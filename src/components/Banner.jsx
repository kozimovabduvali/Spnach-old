import { Container, Row, Col } from './grid'
import ReactPlayer from 'react-player'
import bg from "../assets/img/banner/bannerbg.jpg"
import LogoSpanch from "../assets/img/banner/LogoSpanch.png"
import bannershap from "../assets/img/banner/bannershap.png"
import bannervideo from "../assets/img/bannervideo.gif"
import bannervideo2 from "../assets/img/banner/SpanchAnimated.mp4"
import star1 from "../assets/img/banner/star1.png"
import star2 from "../assets/img/banner/star2.png"
import star3 from "../assets/img/banner/star3.png"
import star4 from "../assets/img/banner/star4.png"
import TimeLimit from './TimeLimit'
export default function Banner() {
  return (
    <div className='banner relative z-10 w-full md:h-screen flex items-center'>
      <img className='absolute top-0 left-0 w-full h-full -z-1 object-cover' src={bg} alt="" />
      <img className='absolute top-[25%] xl:top-[20%] left-0 md:left-[1%] xl:left-[5%] max-w-20 md:max-w-25 xl:max-w-30 rotateanimi -z-1' src={star1} alt="" />
      <img className='absolute top-[20%] right-0 md:right-[1%] xl:right-[5%]  max-w-15 md:max-w-25 xl:max-w-40 -z-1 rotateanimi4' src={star4} alt="" />
      <Container className='h-full'>
        <div className='relative md:absolute top-25 md:top-28 lg:top-35 left-1/2 -translate-x-1/2'>
          <div className='justify-center flex relative w-max mx-auto z-1'>
            <img className='absolute -top-10 md:top-0 -left-10 -z-1 md:left-[-165px]  max-w-15 lg:max-w-20 xl:max-w-35 rotateanimi2' src={star2} alt="" />
            <img className='absolute -top-10 md:top-0 -right-10 md:right-[-155px]  max-w-15 lg:max-w-20 xl:max-w-30 -z-1 rotateanimi3' src={star3} alt="" />
            <div className='space-y-2.5 relative z-4'>
              <div className='lg:w-70 xl:w-110 flex justify-center items-center mx-auto h-12 md:h-15 bg-black/20 text-base md:text-xl lg:text-2xl font-bold text-[#F6C20D] leading-normal uppercase tracking-tighter rounded-lg text-center font-montserrat'>Total Burned</div>
              <div className='bg-[#FFCC12] rounded-lg px-11 py-2 md:py-4 w-full  xl:max-w-125 block mx-auto'>
                <TimeLimit />
              </div>
            </div>
          </div>
        </div>
        <Row className='items-center md:h-full'>
          <Col xs={12} md={7} className='h-full flex items-center'>
            <div className="banner-content text-center md:text-start relative z-5 mt-28 md:mt-0">
              <img className='w-full max-w-60 mx-auto md:ms-0 md:max-w-80 xl:max-w-100 4xl:max-w-150 mb-4 ' src={LogoSpanch} alt="" />
              <h1 className='text-3xl md:text-4xl  2xl:text-5xl uppercase text-white leading-tight font-bold font-dovens max-w-[668px]'>The Meme With Real Utility </h1>
              <div className='mt-5 xl:mt-10 gap-3 md:gap-4 grid grid-cols-1 lg:grid-cols-2 max-w-60 md:max-w-130 xl:max-w-135 mx-auto md:ms-0'>
                <a href="" className='btn bg-[#FECC00] h-10 md:h-14 xl:h-[66px] rounded-md md:rounded-xl border-[0.508px] border-solid shadow-[2.541px_2.541px_0px_0px_#000] text-base md:text-lg xl:text-xl font-semibold leading-normal'>View on Dexscreener</a>
                <a href="" className='btn  bg-white h-10 md:h-14 xl:h-[66px] rounded-md md:rounded-xl border-[0.508px] border-solid shadow-[2.541px_2.541px_0px_0px_#000] text-base md:text-lg xl:text-xl font-semibold leading-normal'>Join the Telegram</a>
              </div>
            </div>
          </Col>
          <Col xs={12} md={5} className='flex items-end justify-center'>
            <div className="banner-right relative z-1">
              <div className="w-full max-w-50 md:max-w-120 lg:max-w-160 xl:max-w-193 z-2 md:mt-60">
                <img className='' src={bannervideo} alt="" />
                {/* <div className="">
                  <ReactPlayer
                    src={bannervideo2}
                    playing
                    muted
                    loop
                    playsinline
                    width="100%"
                    height="100%"
                    className="absolute -bottom-25 scale-[3.2] right-60"
                  />
                </div> */}
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      <img className='absolute -bottom-40 left-0 w-full h-80 object-cover xl:object-fill' src={bannershap} alt="" />
    </div>
  )
}
