import React from 'react'
import logo from '../assets/img/logo.png'
import { Link } from 'react-scroll'

export default function Logo() {
  return (
    <Link className="logo block cursor-pointer w-full max-w-35 md:max-w-40 xl:max-w-50" to="banner" spy={true} smooth={true} duration={600} offset={0}>
      <img src={logo} alt="site-logo" />
    </Link>
  )
}
