import React, { useState } from 'react'
import { A } from 'hookrouter'

function Landing({ item, i }) {
  const [fullHeight, setHeight] = useState(265)
  return (
    <div
      className={
        i % 2 === 0 ? 'landing__container' : 'landing__container reverse'
      }
    >
      <div className="landing-preview__image">
        <img
          src={item.url}
          style={{ top: `-${fullHeight - 265}px`, width: '450px' }}
          onMouseEnter={e => setHeight(e.target.clientHeight)}
          onMouseLeave={() => setHeight(265)}
        />
      </div>
      <div className="landing__info">
        <div className="landing__title">
          <strong>{item.title}</strong>
        </div>
        <p>
          In order to generate a personal link to this landing page, please
          visit the section TOOLS/LINK CREATOR/ +Add.
        </p>

        <p>In this section, you will need to choose:</p>
        <div style={{ marginTop: '5px' }}>
          <strong>Domain:</strong>
          <p>{item.domain}</p>
        </div>
        <div style={{ marginBottom: '5px' }}>
          {' '}
          <strong>Landing page:</strong>
          <p>{item.landingPage}</p>
        </div>
        <p>
          {' '}
          For detailed information and instructions on how to generate personal
          links, please <A href="/creating-links">click here.</A>
        </p>
        <a
          className={
            window.innerWidth < 700 ? 'content__next-btn' : 'mt medium diagonal'
          }
          style={{ textAlign: 'center', textDecoration: 'none' }}
          href={item.link}
          target="_blank"
          rel="noopener noreferrer"
        >
          Demo
        </a>
      </div>
    </div>
  )
}

export default Landing
