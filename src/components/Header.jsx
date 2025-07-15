import React, { useEffect, useState } from 'react';
import { Container } from '../components/grid'
import { Link } from 'react-scroll';
import Logo from '../components/Logo';
import { buy_now } from '../components/PageLinks';

export default function Header() {
  const navLinks = [
    {
      btn_title: 'home',
      to: 'banner',
      offset: -80,
    },
    {
      btn_title: 'About Spanch',
      to: 'about',
      offset: -100,
    },
    {
      btn_title: 'Spanch Projects',
      to: 'what',
      offset: -150,
    },
    {
      btn_title: 'Roadmap',
      to: 'roadmap',
      offset: -100,
    },
    {
      btn_title: 'Tokenomics',
      to: 'tokenomics',
      offset: -160,
    },
    {
      btn_title: 'How to Buy',
      to: 'howto',
      offset: -80,
    },
  ];
  const [isMenu, setIsMenu] = useState(false);
  const handleTouchStart = () => {
    setIsMenu(!isMenu);
  };

  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const isScroll = window.scrollY > 200;
      setScrolled(isScroll);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [scrolled, setScrolled]);



  useEffect(() => {
    if (isMenu) {
      document.body.classList.add('overflow-hidden')
    } else {
      document.body.classList.remove('overflow-hidden')
    }
  }, [isMenu])

  return (
    <>
      <header className={`heading ${scrolled ? 'position-fixed' : ''}`}>
        <Container>
          <div className='heading-wrap flex items-center justify-between'>
            <Logo />
            <nav className={`heading-menu ${isMenu ? 'show-menu' : ''}`}>
              <div className="title flex items-center justify-between lg:hidden mb-4 md:mb-6">
                <Logo />
                <button className="heading-toggler" onClick={() => setIsMenu(!isMenu)}>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-8 md:size-10">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <ul className="lg:flex items-center">
                {navLinks.map((link, index) => (
                  <li key={index} className='block'>
                    <Link className="heading-link capitalize text-base xl:text-lg font-semibold text-black" to={link.to} spy={true} smooth={true} duration={600} offset={link.offset} onClick={() => window.innerWidth <= 991 && handleTouchStart(link.to)}>{link.btn_title}</Link>
                  </li>
                ))}
              </ul>
            </nav>
            <div className="heading-actions flex items-center flex-wrap gap-3">
              <a href={buy_now} target='_blank' className='btn btn_white text-sm md:text-[19px] font-semibold leading-normal'>WHITEPAPER</a>
              <button className="heading-toggler lg:!hidden" onClick={() => setIsMenu(!isMenu)}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-8 md:size-10">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
              </button>
            </div>
          </div>
        </Container>
      </header>
    </>
  )
}
