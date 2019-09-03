import React from 'react'
import arrow from '../../../../public/assets/img/down-arrow.svg'

export default function PreliminaryCpa({ title, showList }) {
  return (
    <div
      className="county-list__container"
      id={title}
      onClick={() => showList(title)}
    >
      <h3>{title}</h3>
      <span className="open-btn" style={{ background: `url(${arrow})` }} />
    </div>
  )
}
