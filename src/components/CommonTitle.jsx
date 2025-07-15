import React from 'react'

export default function CommonTitle({ subTitle, title, des, className = '' }) {
  return (
    <div className={`${className}`}>
      {subTitle &&
        <span className='block'>{subTitle}</span>}
      <h2>{title}</h2>
      {des &&
        <p>{des}</p>
      }
    </div>
  )
}
