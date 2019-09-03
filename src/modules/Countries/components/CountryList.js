import React from 'react'
import arrow from '../../../../public/assets/img/down-arrow.svg'

const CountryList = ({ title, countries }) => {
  // const classTitle = title.split(' ')

  return (
    <div className={`country-list__wrap ${title.split(' ')}`}>
      {countries.map(item => {
        return (
          <p key={item.id} style={{ whiteSpace: 'nowrap' }}>
            {item.country}
          </p>
        )
      })}
    </div>
  )
}

export default CountryList

// <div
// className="county-list__container"
// onClick={() => showList(classTitle)}
// >
// <h3>{title}</h3>
// <span className="open-btn" style={{ background: `url(${arrow})` }} /> </div>
