import React, { useEffect } from 'react'
import { useStore } from 'effector-react'
import { setCategory, $category } from '../model/store.landings'

const filterArr = ['sport', 'casino', 'site page']

const LandingsFilter = ({ loading, refetch, changeCategory }) => {
  const category = useStore($category)
  useEffect(() => {
    if (!loading) {
      setActive(category)
      changeCategory()
    }
  }, [loading, category])

  const setActive = category => {
    const lastEl = document.getElementsByClassName('category__active')
    const el = document.getElementsByClassName(`${category}`)

    if (lastEl.length !== 0) {
      lastEl[0].classList.remove('category__active')
      el[0].classList.add('category__active')
    } else el[0].classList.add('category__active')
  }

  return (
    <div className="landings-filter__wrpap">
      <ul>
        {filterArr.map(category => {
          return (
            <li
              className={category}
              key={category}
              onClick={() => setCategory(category)}
            >
              {category}
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default LandingsFilter
