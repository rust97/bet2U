import React from 'react'

const RecommendCountries = ({ title, countries }) => {
  return (
    <div>
      <h3 className="countries__title">{title}</h3>
      <div className="country-list__wrap-recommended">
        {countries.map(item => {
          return (
            <p key={item.id} style={{ whiteSpace: 'nowrap' }}>
              {item.country}
            </p>
          )
        })}
      </div>
    </div>
  )
}

export default RecommendCountries
