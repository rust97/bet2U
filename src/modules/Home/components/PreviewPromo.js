import React from 'react'
import { A, navigate } from 'hookrouter'

export default function PreviewPromo({ title, img1, img2, link, id }) {
  return (
    <div className="home__landings-container">
      <h2 id={id}>{title}</h2>
      <div className="home__landings-preview-wrap">
        <div
          className="home__landing-preview landing-first"
          style={{ background: `url(${img1})` }}
          onClick={() => navigate(link)}
        ></div>
        <div
          className="home__landing-preview landing-second"
          style={{ background: `url(${img2})` }}
          onClick={() => navigate(link)}
        ></div>
      </div>
      <A href={link} className="home__see-all">
        View all
      </A>
    </div>
  )
}
