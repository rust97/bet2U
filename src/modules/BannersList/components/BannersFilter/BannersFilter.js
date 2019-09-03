import React from 'react'

import { setLang } from '../../model/store'

const langArr = ['EN', 'ES', 'RU', 'IT', 'CZ', 'GR', 'PT', 'SE', 'TH', 'VI']

const BannersFilter = () => {
  return (
    <div className="banners-filter__wrpap">
      <ul>
        {langArr.map(lang => {
          return (
            <li className={lang} key={lang} onClick={() => setLang(lang)}>
              {lang}
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default BannersFilter
