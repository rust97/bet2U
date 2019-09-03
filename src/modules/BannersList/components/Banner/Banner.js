import React, { useState } from 'react'
import PropTypes from 'prop-types'
import open from '../../../../../public/assets/img/open.svg'
import close from '../../../../../public/assets/img/close.svg'

const Banner = ({ banner, i }) => {
  const [visibility, setVisibility] = useState(false)
  const [focus, setFocus] = useState(false)
  console.log(banner)

  const url = banner.pictures.filter(item => {
    return item.name == '336x280'
  })

  return (
    <div
      className={i % 2 === 0 ? 'banner__wrap' : 'banner__wrap reverse-banner'}
    >
      <div
        className="banner"
        style={
          focus
            ? {
                background: `linear-gradient( rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7) ), url(${url[0].url}) `,
              }
            : { background: `url(${url[0].url})` }
        }
      />
      <div className="links__container">
        <div className="links__wrap">
          {banner.pictures.map(item => {
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
          })}
        </div>
      </div>
    </div>
  )
}

export default Banner

Banner.propTypes = {
  banner: PropTypes.any.isRequired,
}
