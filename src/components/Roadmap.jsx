import { Container, Row, Col } from '../components/grid'
import countBg from '../assets/img/roadmap-counter-bg.png'
import cardBg from '../assets/img/roadmap-card-bg.png'
import cardBg2 from '../assets/img/roadmap-card-bg-2.png'
import cardBg3 from '../assets/img/roadmap-card-bg-3.png'
import cardBg4 from '../assets/img/roadmap-card-bg-4.png'
import bg from '../assets/img/roadmap-bg.png'
import img1 from '../assets/img/roadmap-img-1.png'
import img2 from '../assets/img/roadmap-img-2.png'

export default function Roadmap() {

    const card = [
        {
            title: 'Launch:',
            bg: cardBg,
            list: [
                `Born on Pump.fun`,
                `Get 5% bonus + 5% tokens burned forever on every payment via our bots.`,
                `Team coins Lock 4% for 1 year `,
            ],
        },
        {
            title: 'Token Burn:',
            bg: cardBg2,
            list: [
                `3% of total supply reserved for burning`,
                `Every milestone triggers a new burn`,
                `Live tracker keeps it 100% transparent`,
            ],
        },
        {
            title: 'Growth & Marketing',
            bg: cardBg3,
            list: [
                `$SPANCH becomes the default currency across all bots`,
                `Marketing push: influencers, crypto collabs, and spicy memes`,
                `5% on marketing`,
            ],
        },
        {
            title: 'Ecosystem Expansion',
            bg: cardBg4,
            list: [
                `Integrations with external platforms`,
                `Play-to-earn games, more Telegram bots`,
                `Holder rewards, real-life merch, and early access to new drops`,
            ],
        },
    ]

    return (
        <div className='roadmap pt-15 md:pt-28 lg:pt-34 2xl:pt-[220px] relative z-1'>
            <Container>
                <Row>
                    <Col xs={12}>
                        <div className="max-w-[733px] mx-auto text-center 3xl:text-left 3xl:ml-auto relative z-2 3xl:mr-[170px]">
                            <h2 className='text-4xl md:text-6xl xl:text-[90px] font-bold uppercase !leading-[1.2] mb-2 md:mb-3 font-dovens'>Roadmap</h2>
                            <p className='capitalize font-semibold !leading-normal text-base lg:text-lg xl:text-[19px]'>Our roadmap is laser-focused: build, burn, and grow. From bot launches to exchange listings, <strong>$SPANCH</strong> evolves with every milestone.</p>
                        </div>
                        <div className="flex flex-col gap-5 lg:gap-0 items-center lg:items-start mt-15 3xl:-mt-35 relative z-1 max-w-[1532px] pb-[200px] md:pb-[240px]">
                            {card.map((item, index) => (
                                <div key={index} className={`roadmap-card min-h-[400px] md:min-h-[518px] max-w-[488px] w-full pt-[60px] ps-9 md:pl-12 pe-15 md:pr-20 bg-100 relative z-1 lg:rotate-[-9.821deg] ${index % 2 != 0 ? "ml-auto" : ""}`} style={{ backgroundImage: `url(${item.bg})` }}>
                                    <div className={`h-[100px] md:h-[124px] w-[220px] md:w-[290px] flex items-center justify-center bg-100 absolute -right-2 lg:rotate-[9.821deg] ${index === 2 ? "-top-5 lg:-top-0" : "-top-5 "}`} style={{ backgroundImage: `url(${countBg})` }}>
                                        <span className='text-4xl md:text-[40px] text-black font-londrina'>{index < 9 && "0"}{index + 1}</span>
                                    </div>
                                    <h5 className='text-[22px] 2xl:text-[28px] font-bold !leading-[1.4] mb-4 font-quicksand text-black'>{item.title}</h5>
                                    <ul className='flex flex-col gap-1.5 max-w-[341px]'>
                                        {item.list.map((item, index) => (
                                            <li key={index} className='flex gap-4 items-start'>
                                                <div className="size-1.5 bg-black rounded-full flex-[0_0_auto] mt-4" />
                                                <span className='text-lg md:text-2xl 2xl:text-[26px] font-semibold !leading-[1.4] font-quicksand'>{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                            <svg className='hidden md:block absolute top-[44%] left-[45%] -translate-1/2' width="526" height="1078" viewBox="0 0 526 1078" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M22.15 12.6913C60.7152 0.547818 159.182 -9.94412 244.526 45.2357C351.206 114.21 372.242 199.215 493.447 212.815C614.652 226.416 142.854 325.021 290.604 416.339C438.354 507.658 36.1737 554.289 6.12296 717.983C-23.9278 881.676 169.399 700.496 306.631 747.127C443.863 793.758 295.612 993.396 525 1075" stroke="black" stroke-width="5" />
                            </svg>
                            <img src={img1} className='max-w-[120px] md:max-w-[200px] lg:max-w-max absolute bottom-0 left-0 3xl:-left-34 z-1' alt="Img" />
                            <img src={img2} className='max-w-[120px] md:max-w-[200px] lg:max-w-max absolute bottom-0 right-0 3xl:-right-24  z-1' alt="Img" />
                        </div>
                    </Col>
                </Row>
            </Container>
            <img src={bg} className='absolute top-0 left-0 w-full -z-1' alt="Img" />
        </div >
    )
}
