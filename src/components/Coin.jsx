import { Col, Container, Row } from "./grid";
import bg1 from "../assets/img/coin/bg4.png"
import bg2 from "../assets/img/coin/bg1.png"
import bg3 from "../assets/img/coin/bg2.png"
import bg4 from "../assets/img/coin/bg3.png"
import bg5 from "../assets/img/coin/bg5.png"
import bg6 from "../assets/img/coin/bg6.png"
import bg7 from "../assets/img/coin/bg7.png"
import bg8 from "../assets/img/coin/bg8.png"
import tokenomicsimg from "../assets/img/tokenomicsimg.png"
import tokenomicsvideo from "../assets/img/tokenomicsvideo.gif"
import bottom from "../assets/img/coin/bottom-img.png"
import top from "../assets/img/coin/top.png"
import coin_bg from "../assets/img/coin/cain-bg.png"
import bobule from "../assets/img/coin/bobule.png"
export default function Coin() {
    const CoinCards = [
        {
            title: "Supply: Hard-capped & deflationary",
            bg: bg1,
            icon: (<svg width="37" height="42" viewBox="0 0 37 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M30.3339 31.0403C32.1417 28.5064 33.1858 25.4817 33.1858 22.4573C33.1858 13.8744 29.9672 11.7287 29.9672 11.7287C28.8117 14.9473 25.6758 16.0201 25.6758 16.0201C25.6758 4.2186 18.1657 1 18.1657 1C18.1657 1 10.6556 4.2186 10.6556 16.0201C10.6556 16.0201 7.51951 14.9473 6.36411 11.7287C6.36411 11.7287 3.14551 13.8744 3.14551 22.4573C3.14551 25.4817 4.18954 28.5064 5.9973 31.0403" fill="#FE7E2E" />
                <path d="M30.3339 31.0403C32.1417 28.5064 33.1858 25.4817 33.1858 22.4573C33.1858 13.8744 29.9672 11.7287 29.9672 11.7287C28.8117 14.9473 25.6758 16.0201 25.6758 16.0201C25.6758 4.2186 18.1657 1 18.1657 1C18.1657 1 10.6556 4.2186 10.6556 16.0201C10.6556 16.0201 7.51951 14.9473 6.36411 11.7287C6.36411 11.7287 3.14551 13.8744 3.14551 22.4573C3.14551 25.4817 4.18954 28.5064 5.9973 31.0403H30.3339Z" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M33.1861 34.5625H3.14574C1.96069 34.5625 1 35.5231 1 36.7082V38.854C1 40.0391 1.96069 40.9997 3.14574 40.9997H33.1861C34.3712 40.9997 35.3318 40.0391 35.3318 38.854V36.7082C35.3318 35.5231 34.3712 34.5625 33.1861 34.5625Z" fill="#FE6E2E" stroke="black" strokeWidth="1.5" strokeLinejoin="round" />
                <path d="M23.5305 31.0402C23.5305 25.6759 18.1661 20.3115 18.1661 20.3115C18.1661 20.3115 12.8018 25.6759 12.8018 31.0402" fill="#A24003" />
                <path d="M23.5305 31.0402C23.5305 25.6759 18.1661 20.3115 18.1661 20.3115C18.1661 20.3115 12.8018 25.6759 12.8018 31.0402H23.5305Z" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            )
        },
        {
            title: "5% Burn on every payment",
            bg: bg2,
            icon: (<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                <path d="M5.2908 26.9015C2.68041 24.2912 2.68041 20.0588 5.2908 17.4485L17.4485 5.2908C20.0588 2.68041 24.2912 2.68041 26.9015 5.2908L34.7085 13.0979C37.319 15.7082 37.319 19.9405 34.7085 22.5508L22.5508 34.7085C19.9405 37.319 15.7082 37.319 13.0979 34.7085L5.2908 26.9015Z" fill="#F9FE68" stroke="#141B34" strokeWidth="1.5" />
                <path d="M5.57617 26.9958L26.9578 5.61426M31.0527 18.4258L27.3868 22.0917M24.2582 25.183L22.627 26.8142" stroke="#141B34" strokeWidth="1.5" strokeLinecap="round" />
                <path d="M6.66699 36.667H33.3337" stroke="#141B34" strokeWidth="1.5" strokeLinecap="round" />
            </svg>)
        },
        {
            title: "5% Bonus when paying with $SPANCH",
            bg: bg3,
            icon: (<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                <path d="M6.66699 18.333V24.9997C6.66699 30.4993 6.66699 33.2492 8.37554 34.9578C10.0841 36.6663 12.8339 36.6663 18.3337 36.6663H21.667C27.1667 36.6663 29.9165 36.6663 31.6252 34.9578C33.3337 33.2492 33.3337 30.4993 33.3337 24.9997V18.333" fill="#FEB868" />
                <path d="M6.66699 18.333V24.9997C6.66699 30.4993 6.66699 33.2492 8.37554 34.9578C10.0841 36.6663 12.8339 36.6663 18.3337 36.6663H21.667C27.1667 36.6663 29.9165 36.6663 31.6252 34.9578C33.3337 33.2492 33.3337 30.4993 33.3337 24.9997V18.333" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M5 15.0003C5 13.7542 5 13.1311 5.33493 12.667C5.55435 12.363 5.86995 12.1105 6.25 11.9349C6.83013 11.667 7.60897 11.667 9.16667 11.667H30.8333C32.391 11.667 33.1698 11.667 33.75 11.9349C34.13 12.1105 34.4457 12.363 34.665 12.667C35 13.1311 35 13.7542 35 15.0003C35 16.2465 35 16.8695 34.665 17.3337C34.4457 17.6377 34.13 17.8902 33.75 18.0657C33.1698 18.3337 32.391 18.3337 30.8333 18.3337H9.16667C7.60897 18.3337 6.83013 18.3337 6.25 18.0657C5.86995 17.8902 5.55435 17.6377 5.33493 17.3337C5 16.8695 5 16.2465 5 15.0003Z" fill="#FEB868" stroke="black" strokeWidth="1.5" strokeLinejoin="round" />
                <path d="M10 6.30919C10 4.66549 11.3325 3.33301 12.9762 3.33301H13.5714C17.1218 3.33301 20 6.21117 20 9.76157V11.6663H15.3571C12.3985 11.6663 10 9.26786 10 6.30919Z" fill="#FEB868" stroke="black" strokeWidth="1.5" strokeLinejoin="round" />
                <path d="M30 6.30919C30 4.66549 28.6675 3.33301 27.0238 3.33301H26.4285C22.8782 3.33301 20 6.21117 20 9.76157V11.6663H24.6428C27.6015 11.6663 30 9.26786 30 6.30919Z" fill="#FEB868" stroke="black" strokeWidth="1.5" strokeLinejoin="round" />
                <path d="M20 18.333V36.6663" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>)
        },
        {
            title: "Rewards, merch, and airdrops for loyal holders",
            bg: bg4,
            icon: (<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                <path d="M5.86365 17.176C5.21688 15.3859 4.8935 14.4909 5.0314 13.9174C5.18221 13.2901 5.62833 12.8011 6.19855 12.6379C6.71988 12.4888 7.53088 12.8492 9.15288 13.5701C10.5875 14.2078 11.3049 14.5266 11.9789 14.5089C12.7209 14.4893 13.4348 14.1917 14.0027 13.6652C14.5184 13.187 14.8643 12.4249 15.5562 10.9007L17.081 7.54176C18.3547 4.73592 18.9915 3.33301 20 3.33301C21.0085 3.33301 21.6453 4.73592 22.919 7.54176L24.4438 10.9007C25.1357 12.4249 25.4817 13.187 25.9973 13.6652C26.5652 14.1917 27.279 14.4893 28.0212 14.5089C28.6952 14.5266 29.4125 14.2078 30.8472 13.5701C32.4692 12.8492 33.2802 12.4888 33.8015 12.6379C34.3717 12.8011 34.8178 13.2901 34.9687 13.9174C35.1065 14.4909 34.7832 15.3859 34.1363 17.1758L31.3563 24.87C30.167 28.1613 29.5725 29.807 28.328 30.7367C27.0837 31.6663 25.4757 31.6663 22.2597 31.6663H17.7403C14.5243 31.6663 12.9163 31.6663 11.6719 30.7367C10.4276 29.807 9.83295 28.1613 8.6437 24.87L5.86365 17.176Z" fill="#FE7E2E" stroke="black" strokeWidth="1.5" />
                <path d="M20 23.333H20.015" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M11.667 36.667H28.3337" stroke="black" strokeWidth="1.5" strokeLinecap="round" />
            </svg>)
        },
    ]
    const TokenomicsCards = [
        {
            title: "88%",
            des: "Community",
            bg: bg5
        },
        {
            title: "4%",
            des: "Locked Team",
            bg: bg6
        },
        {
            title: "3%",
            des: "Burn Pool ",
            bg: bg7
        },
        {
            title: "5%",
            des: " Marketing",
            bg: bg8
        },
    ]
    return (
        <div style={{ backgroundImage: `url(${coin_bg})` }} className=" py-20 md:pt-[120px] lg:pt-[150px] xl:pt-[180px] pb-20 md:pb-[150px] lg:pb-[150px]  relative z-[1] bg-center bg-no-repeat bg-[length:100%_100%]" >
            <img src={top} className="h-25 md:h-[150px] lg:h-[250px] xl:h-[400px] absolute top-0 left-0 w-full -z-[2]" alt="Img" loading='lazy' />

            <div className="coin">
                <Container>
                    <Row className="justify-center">
                        <Col xs={12} xl={10}>
                            <div className="text-center">
                                <h3 className="coin-title uppercase text-3xl md:text-[45px] lg:text-[60px] xl:text-[70px] !leading-[1.2] font-bold font-dovens mb-6 md:mb-8 lg:mb-12 xl:mb-15"> A Coin That Gets Rarer Over Time</h3>
                            </div>
                        </Col>
                    </Row>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-5 md:gap-6 lg:gap-7 xl:gap-8 pb-16 lg:pb-[200px] xl:pb-[270px]">
                        {CoinCards.map((item, idx) => (<div key={idx} style={{ backgroundImage: `url(${item.bg})` }}
                            className={`${idx % 2 === 1 ? "lg:mt-31 lg:-mb-31" : ""} pt-20 lg:pt-25 xl:pt-31 pb-23 lg:pb-30 xl:pb-35 px-5 lg:px-6 xl:px-8 bg-center bg-no-repeat bg-[length:100%_100%]`}>
                            <div className="text-center px-3">
                                <span className="size-16 lg:size-20 rounded-full flex items-center justify-center mx-auto mb-2 bg-white border border-black shadow-[1px_2px_0px_#000]">{item.icon}</span>
                                <p className="text-lg lg:text-[21px] font-semibold text-black !leading-[1.5] capitalize">{item.title}</p>
                            </div>
                        </div>))}
                    </div>
                </Container>
            </div>
            <div className="tokenomics">
                <Container className="max-w-[1350px] mx-auto">
                    <Row className="justify-center mb-10 lg:mb-16 xl:mb-[120px]">
                        <Col xs={12} md={9} xl={8}>
                            <div className="text-center">
                                <h3 className="tokenomics-title uppercase text-3xl md:text-[45px] lg:text-[60px] xl:text-[80px] !leading-[1.2] font-bold font-dovens mb-4 md:mb-5 xl:mb-6">Tokenomics</h3>
                                <p className="text-xl lg:text-2xl xl:text-3xl font-bold !leading-[1.5] capitalize text-black mb-2 md:mb-3">Total Supply: 1,000,000,000 SPANCH</p>
                                <p className="text-lg lg:text-[19px] font-semibold !leading-[1.5] capitalize text-black">We keep things simple, transparent, and easy to understand. Here’s how $SPANCH is allocated:</p>
                            </div>
                        </Col>
                    </Row>
                    <div className="relative z-2">
                        <img className="max-w-100 md:max-w-150 w-full h-auto xl:-mt-25 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2  z-2 lg:hidden" src={tokenomicsimg} />
                        <img className="max-w-150 h-auto xl:-mt-25 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-2 hidden lg:block" src={tokenomicsvideo} />
                        <Row>
                            {TokenomicsCards.map((item, idx) => (<Col key={idx} xs={6} className={`${idx === 2 || idx === 3 ? "xl:mb-0" : ""} mt-15 mb-10 md:mb-20 lg:mb-35 xl:mb-20 2xl:mb-[218px] z-2`}>
                                <div className={`${idx % 2 == 1 ? "ml-auto" : ""}   size-[100px] md:size-[150px] lg:size-[200px] xl:size-[232px]  rounded-full relative z-[1] flex  justify-center items-center`}>
                                    <img src={item.bg} className="w-full h-full rounded-full  left-0 top-0 absolute z-[-1]" alt="Img" loading='lazy' />
                                    <div className="text-center">
                                        <h5 className="text-lg md:text-4xl lg:text-5xl xl:text-[55px] text-white !leading-[1.12] uppercase mb-2">{item.title}</h5>
                                        <p className="text-sm md:text-xl lg:text-2xl xl:text-3xl font-semibold !leading-[1.5] text-white">{item.des}</p>
                                    </div>
                                </div>
                            </Col>))}
                        </Row>
                    </div>
                </Container>

            </div>
            <img src={bottom} className="h-24 md:h-[150px] lg:h-[200px] xl:h-[245px] absolute bottom-0 left-0 w-full z-[2]" alt="Img" loading='lazy' />
            <img src={bobule} className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-full object-contain  -z-1" alt="Img" loading='lazy' />
        </div>
    )
}
