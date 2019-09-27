import React, { useState } from 'react'
import PropTypes from 'prop-types'
import open from '../../../../../public/assets/img/open.svg'
import close from '../../../../../public/assets/img/close.svg'

const Banner = ({ banner, i }) => {
  const url = banner.pictures.filter(item => {
    return item.name == '336x280'
  })

  const picList = banner.pictures.map(item => {
    return (
      <a
        className="banner__link"
        target="_blanck"
        rel="noopener noreferrer"
        key={item.id}
        href={item.url}
      >
        {item.name}
      </a>
    )
  })

  return (
    <div
      className={i % 2 === 0 ? 'banner__wrap' : 'banner__wrap reverse-banner'}
    >
      <div className="banner" style={{ background: `url(${url[0].url})` }} />
      <div className="links__container">
        <div className="links__wrap">{picList}</div>
      </div>
    </div>
  )
}

export default Banner

Banner.propTypes = {
  banner: PropTypes.any.isRequired,
}
