import React from 'react'
import arrow from '../../../../public/assets/img/down-arrow.svg'

export default function MobileCountryList({ title, showList, countries }) {
  return (
    <React.Fragment>
      <div
        className="county-list__container"
        id={title}
        onClick={() => showList(title)}
      >
        <h3>{title}</h3>
        <span className="open-btn" style={{ background: `url(${arrow})` }} />
      </div>
      <div className={`country-list__wrap ${title.split(' ')}`}>
        {countries.map(item => {
          return (
            <p key={item.id} style={{ whiteSpace: 'nowrap' }}>
              {item.country}
            </p>
          )
        })}
      </div>
    </React.Fragment>
  )
}
