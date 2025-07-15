import React from 'react'
import { Container, Row, Col } from './grid'
import img from '../assets/img/earn-img.png'
import img2 from '../assets/img/earn-img-2.png'
import shape1 from '../assets/img/earn-shpae.png'
import shape2 from '../assets/img/earn-shpae-2.png'

export default function Earn() {

    const list = [
        '✨  Enjoy 5% bonus',
        '🔥 Trigger 5% automatic burn',
        `💎 Increase the coin's scarcity`,
    ]

    return (
        <div className='earn relative z-1 pt-20 md:pt-24 xl:pt-[173px] pb-12 md:pb-20 xl:pb-30'>
            <Container>
                <Row>
                    <Col xs={12}>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-8 lg:gap-20 text-center lg:text-start">
                            <div className="">
                                <h2 className='text-3xl md:text-6xl xl:text-7xl 2xl:text-[80px] font-bold uppercase !leading-[1.2] mb-4 md:mb-6 xl:mb-10 font-dovens'>Use<span className='font-dm'>.</span> <span className='text-[#FED868]'>Burn<span className='font-dm'>.</span></span> Earn<span className='font-dm'>.</span></h2>
                                <div className="text-start rounded-2xl border border-[rgba(255,255,255,0.24)] bg-[#86EEFF] px-5 xl:px-10 py-5 md:max-w-max mx-auto lg:mx-0">
                                    <h4 className='mb-4 md:mb-5 xl:mb-6 text-[#FED868] [text-shadow:0px_1.8px_0px_#000] font-quicksand text-[22px] md:text-3xl xl:text-[36px] font-semibold leading-[140%]'>Pay with $SPANCH and you:</h4>
                                    <ul className='flex flex-col gap-3'>
                                        {list.map((item, index) => (
                                            <li key={index} className='text-xl md:text-2xl xl:text-3xl text-white font-semibold !leading-[1.4'>
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <img src={img2} className='pointer-events-none mt-8 lg:mt-[65px] relative xl:-left-[195px] xl:max-w-[800px] 2xl:max-w-[927px] animiupdown' alt="Img" />
                            </div>
                            <div className="">
                                <p className=' max-w-[529px] mx-auto lg:ml-auto capitalize font-semibold !leading-normal text-base lg:text-lg xl:text-[20px] mb-5 xl:mb-8 2xl:mb-12'><strong className='text-[22px]'>$SPANCH</strong> is the engine behind many of our Telegram bots — including virtual numbers, payment processing, bonus systems, and other innovative features.</p>
                                <img src={img} className='pointer-events-none' alt="Img" />
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
            <img src={shape1} className='pointer-events-none absolute bottom-0 left-0 w-full max-h-[174px]' alt="Img" />
            <img src={shape2} className='pointer-events-none  -z-1 absolute top-1/2 left-1/2 -translate-1/2' alt="Img" />
        </div>
    )
}
