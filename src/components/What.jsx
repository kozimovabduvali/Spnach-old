import React from 'react'
import { Container, Row, Col } from './grid'
import shape from '../assets/img/about/shape.png'
import a_img from '../assets/img/what/a_left.png'
import b_img from '../assets/img/what/a_right.png'
import d_img from '../assets/img/what/right.png'
import c_img from '../assets/img/what/left.png'

export default function What() {
    const card = [
        {
            name: '📲  Virtual Number Bot',
        },
        {
            name: '📰  News & Announcements',
        },
        {
            name: '💬  Service Chat',
        },
        {
            name: '🛍  Proxy Shop',
        },
        {
            name: '🔐  Messenger Bot',
        },
        {
            name: '🛡  Garant Bot',
        },
        {
            name: '🛒  Promo Code Store',
        },
    ]
    const what = [
        {
            title: (
                <>
                    When you pay for a virtual number with <span className="font-semibold">$SPANCH:</span>
                </>
            ),
            list: [
                'You get a +5% bonus to your balance',
                '5% of the amount is permanently burned',
                'Payments are processed through a custom Telegram bot fully integrated with $SPANCH',
            ]
        },
    ]
    const tabBtn = [
        '🔗 Links',
        '🌐 Project Hub',
        '💬 Spanch Projects Telegram Group',
    ]
    return (
        <div className='what-area'>
            <img src={shape} className='w-full h-30 md:h-40 xl:h-62.5' alt="Img" loading='lazy' />
            <div className='What bg-[#6EE1F4] relative z-10 pt-15 md:pt-20 2xl:pt-32' id='what'>
                <Container>
                    <Row className='justify-center relative z-2'>
                        <Col xs={12} md={10} lg={10}>
                            <div className="text mb-4 md:mb-6 lg:mb-8 xl:mb-10 text-center">
                                <h2 className='text-[34px] md:text-3xl lg:text-5xl xl:text-[66px] 3xl:text-[76px] 4xl:text-[80px] font-dovens uppercase font-bold leading-[120%] mb-3 md:mb-6'>
                                    What is <span className="font-dm">$</span>SPANCH<span className="font-dm">?</span></h2>
                                <p className='text-lg lg:text-[19px] text-black font-quicksand font-semibold leading-normal mb-3 max-w-218 mx-auto'>Spanch Projects is a growing ecosystem of Telegram-based services, all united by a single currency — $SPANCH.</p>
                                <p className='text-2xl lg:text-2xl text-black font-quicksand font-bold leading-normal capitalize'>Our active services already include:</p>
                            </div>
                            <div className="flex flex-wrap items-center justify-center gap-3 md:gap-5 mb-8 md:mb-12 lg:mb-14 xl:mb-16.5">
                                {card.map((item, index) => (
                                    <div className="w-full md:w-max" key={index}>
                                        <button className='btn bg-white border border-solid border-heading text-lg md:text-xl lg:text-2xl font-bold !min-w-full'>{item.name}</button>
                                    </div>
                                ))}
                            </div>
                        </Col>
                    </Row>
                </Container>
                <img src={c_img} className='hidden md:block absolute top-[20%] left-0 -z-10 max-w-[30%]' alt="Img" loading='lazy' />
                <img src={d_img} className='hidden md:block absolute top-[20%] right-10 -z-10 max-w-[30%]' alt="Img" loading='lazy' />
                <div className='bg-[#9FD99A] py-13.5 relative z-1'>
                    <img src={a_img} className='hidden md:block absolute -top-[48%] xl:-top-[58%] 2xl:-top-[64%] left-0 -z-10' alt="Img" loading='lazy' />
                    <img src={b_img} className='hidden md:block absolute -top-[48%] xl:-top-[58%] 2xl:-top-[64%] right-0 -z-10' alt="Img" loading='lazy' />
                    <Container>
                        <Row>
                            <Col xs={12}>
                                <div className=" md:flex items-center justify-between gap-6">
                                    {what.map((item, index) => (
                                        <div className="mb-5 max-w-177 " key={index}>
                                            {item.title && (
                                                <h3 className='text-lg md:text-xl lg:text-[22px] text-center md:text-start text-black font-quicksand font-semibold !leading-norma mb-3'>
                                                    {item.title}
                                                </h3>

                                            )}
                                            {item.list && (
                                                <ul className="list-disc pl-5 mt-2 max-w-143 space-y-2.5">
                                                    {item.list.map((listitem, index) => (
                                                        <li key={index} className='text-base md:text-lg lg:text-[22px] text-black font-quicksand font-medium !leading-normal'>
                                                            {listitem}
                                                        </li>
                                                    ))}
                                                </ul>
                                            )}
                                        </div>
                                    ))}
                                    <div className="">
                                        <div className="max-w-141">
                                            <h3 className='text-lg md:text-xl lg:text-2xl text-center md:text-start text-black font-quicksand font-semibold !leading-normal mb-4'>💸 How does $SPANCH work in our ecosystem?</h3>
                                            <p className='text-base md:text-lg lg:text-xl text-black font-quicksand font-medium !leading-normal mb-5'>We currently serve over 200,000 active users — and now, our entire infrastructure is transitioning to use <span className='font-semibold'>$SPANCH</span> as the core payment token.</p>
                                        </div>
                                        <div className="flex flex-wrap items-center gap-3">
                                            {tabBtn.map((item, index) => (
                                                <button
                                                    key={index}
                                                    className={`btn grow px-5 py-2 transition-all rounded-md bg-[#3A40F0] text-white text-base md:text-lg font-semibold border border-solid border-heading shadow-[2px_2px_0px_0px_#000] !min-h-12.5 ${index == 0 ? '!bg-[#FECC00] !text-heading w-[46%] lg:w-max' : ''} hover:scale-[1.02] transition-transform`}>
                                                    {item}
                                                </button>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>

        </div>
    )
}
