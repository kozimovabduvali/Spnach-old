import React, { useEffect, useState } from 'react';
// import ReactPlayer from 'react-player'
import { Container, Row, Col } from './grid';
import videoMp4  from "../assets/img/howto/video.mp4"
import videoWebm  from "../assets/img/howto/video.webm"
import bg1 from "../assets/img/howto/bg1.png"
import bg2 from "../assets/img/howto/bg2.png"
import bg3 from "../assets/img/howto/bg3.png"
export default function Howto() {

    const [isIOS, setIsIOS] = useState(false);

    useEffect(() => {
        const ua = navigator.userAgent;
        const isIOSDevice = /iPad|iPhone|iPod/.test(ua) && !window.MSStream;
        setIsIOS(isIOSDevice);
    }, []);

    const videoSrc = isIOS ? videoMp4 : videoWebm;
    const videoType = isIOS ? "video/mp4" : "video/webm";


    const CoinCards = [
        {
            title: "Set Up Your Solana Wallet",
            desc: "Download Phantom or your wallet of choice from the app store or google play store (free). Desktop users, download the google chrome extension.",
            bg: bg1,
        },
        {
            title: "How to Get SOL for Your Wallet",
            desc: "If you don't have any SOL, you can buy directly on Phantom, transfer from another wallet, or buy on another exchange and send it to your wallet.",
            bg: bg2,

        },
        {
            title: "Swap on Raydium",
            desc: "Go to raydium.io/swap and paste the $SPANCH. We have zero taxes so you don't need to worry about buying with a specific slippage.",
            bg: bg3,
        },
    ]
    return (
        <div className="howto py-140 relative z-1  md:-mb-32 xl:mt-0 xl:mb-0 h-full lg:aspect-[1/1.55]">
            <div className="absolute left-0 top-0 w-full h-full z-1">
                <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full h-full object-fill"
                >
                    {/* Load video source based on device */}
                    <source src={videoSrc} type={videoType} />
                </video>

            </div>

            <Container className='lg:absolute lg:h-auto lg:top-1/2 lg:left-1/2 lg:-translate-1/2 z-10'>
                <Row>
                    <Col xl={12}>
                        <div className="services z-3">
                            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 md:gap-6 lg:gap-7 xl:gap-8 relative z-5">
                                {CoinCards.map((item, idx) => (
                                    <div key={idx} style={{ backgroundImage: `url(${item.bg})` }} className={`pt-20 xl:pt-35 pb-32 md:pb-23 lg:pb-30 xl:pb-55 px-5 lg:px-6 xl:px-8 bg-center bg-no-repeat bg-[length:100%_100%]`}>
                                        <div className="text-center px-3">
                                            <span className="size-16 xl:size-20 font-dela text-3xl xl:text-[45px] uppercase font-normal text-[#EB9226] rounded-full flex items-center justify-center mx-auto mb-3 xl:mb-7 bg-white border border-black shadow-[1px_2px_0px_#000]">{idx + 1}</span>
                                            <h4 className='text-xl xl:text-[25px] text-black leading-normal capitalize font-bold mb-2 xl:mb-4 font-quicksand'>{item.title}</h4>
                                            <p className="text-xs xl:text-sm lg:text-lg font-semibold text-black !leading-[1.5] capitalize font-quicksand">{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>

        </div>
    );
}
