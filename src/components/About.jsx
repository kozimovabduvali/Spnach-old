
import { Container, Row, Col } from './grid'
import video from '../assets/img/aboutvideo.gif'
import videoWebm from '../assets/img/videoWebm.webm'
import shape_1 from '../assets/img/about/shape_1.png'
import shape_2 from '../assets/img/about/shape_2.png'
import shape_3 from '../assets/img/about/shape_3.png'
export default function About() {
  const about = [
    {
      title: 'But this isn’t just a meme for likes.',
      des: 'This is a real utility token, already live and functioning inside Telegram bots and services used daily by hundreds of thousands of active users.',
    },
    {
      title: 'Why are we doing this?',
      des: 'Because we’re tired of tokens that only promise “something in the future.” We’re building a token that:',
      list: [
        `Works right now — <span class="text-xl">inside real, live services</span>`,
        'Rewards users with bonuses on payments',
        'Burns a portion of every transaction',
        'Is deeply integrated into Telegram infrastructure we’ve been building for years',
      ]
    },
    {
      title: 'Why Solana?',
      des: 'Because Solana means speed, low fees, and true freedom. We’re not pretending to be “integrated” into Telegram Wallet. We’re building our own network — where $SPANCH is the native currency.',
    },
  ]
  return (
    <div className='about bg-[#6EE1F4] relative z-2 '>
      <Container className='relative'>
        <Row>
          <Col xs={12} xl={7} className='z-10 relative'>
            <div className="md:mb-0 xl:mb-30 pt-30 4xl:pt-35">
              <div className="mb-2 lg:mb-5 text-center xl:text-start">
                <h2 className='text-[34px] font-dovens lg:text-5xl xl:text-[66px] 3xl:text-[76px] 4xl:text-[80px] uppercase font-bold leading-[120%] mb-3 md:mb-6 lg:mb-7.5 xl:w-[110%]'>About  <span className='font-dm'>$</span>SPANCH</h2>
                <p className='text-lg lg:text-xl text-black font-quicksand font-medium leading-normal capitalize'>We’re the team and community movement behind Spanch Coin <span className='font-semibold'>($SPANCH)</span> a meme token on Solana, inspired by the internet legend: SpongeBob. we provide our best services more then 3 years</p>
              </div>
              {about.map((item, index) => (
                <div className="mb-5 max-w-177 mx-auto xl:m-0 relative z-10" key={index}>
                  {item.title && (
                    <h3 className='text-xl md:text-2xl lg:text-[26px] text-center xl:text-start text-black font-quicksand font-semibold !leading-normal'>
                      {item.title}
                    </h3>
                  )}
                  {item.des && (
                    <p className='text-base md:text-lg text-center xl:text-start text-black font-quicksand font-medium !leading-normal mb-3'>
                      {item.des}
                    </p>
                  )}
                  {item.list && (
                    <ul className="list-disc pl-5 my-2 max-w-143 mx-auto xl:ms-0 space-y-2">
                      {item.list.map((listitem, index) => (
                        <li key={index} className='text-base md:text-lg lg:text-2xl text-black font-quicksand font-semibold !leading-normal' dangerouslySetInnerHTML={{ __html: listitem }} />
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </Col>
          <Col xl={5}>
            <div className="image w-full px-10 lg:px-0 hidden 3xl:block">
              <img src={video} className="xl:absolute -right-20 bottom-0 w-full max-w-100 mx-auto  xl:max-w-150  3xl:max-w-175" alt="Img" loading='lazy' />
            </div>
          </Col>
        </Row>
      </Container>

      <div className="image w-full px-10 lg:px-0 3xl:hidden">
        <img src={video} className="block md:hidden xl:absolute right-0 bottom-0 w-full max-w-100 mx-auto  xl:max-w-150  3xl:max-w-180" alt="Img" loading='lazy' />

        <video
          className="max-h-150 hidden md:block xl:absolute right-0 bottom-0 w-full max-w-100 mx-auto  xl:max-w-150  3xl:max-w-180"
          src={videoWebm}
          autoPlay
          muted
          loop
          playsInline
        >

        </video>
      </div>
      <img src={shape_3} className='absolute right-0 bottom-0 -z-1 md:w-[48%] lg:w-[44%] 2xl:w-[40%] object-contain' alt="Img" loading='lazy' />
      <img src={shape_1} className='absolute right-[82%] md:right-[44%] xl:right-[40%] 2xl:right-[40%] 4xl:right-[42%] bottom-26 md:bottom-50 lg:bottom-64 xl:bottom-[28%] 4xl:bottom-[40%] -z-1 ' alt="Img" loading='lazy' />
      <img src={shape_2} className='absolute right-0 xl:right-9 4xl:right-50 bottom-[24%] md:bottom-[34%] xl:bottom-[50%] 4xl:bottom-[60%] -z-1' alt="Img" loading='lazy' />
    </div>
  )
}
