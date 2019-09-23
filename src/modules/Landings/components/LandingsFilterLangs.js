import React, { useEffect } from 'react'
import { navigate } from 'hookrouter'

const filterArr = ['EN', 'ES', 'IT']

const LandingsFilterLangs = ({ lang }) => {
  useEffect(() => {
    setActive(lang)
  }, [lang])

  const setActive = landingsLang => {
    const lastEl = document.getElementsByClassName(
      'category__active__landingsLang'
    )
    const el = document.getElementsByClassName(`${landingsLang}`)

    if (lastEl.length !== 0) {
      lastEl[0].classList.remove('category__active__landingsLang')
      el[0].classList.add('category__active__landingsLang')
    } else el[0].classList.add('category__active__landingsLang')
  }

  return (
    <div className="landings-filter__wrpap">
      <ul>
        {filterArr.map(category => {
          return (
            <li
              className={category}
              key={category}
              onClick={() => navigate(`/landings/${category}`)}
            >
              {category}
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default LandingsFilterLangs
