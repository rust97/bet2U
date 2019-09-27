import React from 'react'
import { useQuery } from 'react-apollo-hooks'
import { COUNTRIES } from '../graphql/countries.gql'
import CountryList from '../components/CountryList'
import './Countries.scss'
import RecommendCountries from '../components/RecommendCountries'
import PreliminaryCpa from '../components/PreliminaryCpa'
import MobileCountryList from '../components/MobileCountryList'
import Spinner from '../../../components/Spinner'

const Countries = () => {
  const { data, loading } = useQuery(COUNTRIES, {
    suspend: false,
  })

  function setActive(title) {
    const lastEl = document.getElementsByClassName(
      'countries-list-title__active'
    )
    const el = document.getElementById(`${title}`)
    if (lastEl.length !== 0) {
      if (lastEl.length == 1) {
        el.classList.add('countries-list-title__active')
        if (lastEl.length === 2) {
          if (lastEl[0].classList == el.classList) {
            lastEl[1].classList.remove('countries-list-title__active')
          } else lastEl[0].classList.remove('countries-list-title__active')
        } else lastEl[0].classList.remove('countries-list-title__active')
      }
    } else el.classList.add('countries-list-title__active')
  }

  const showList = classTitle => {
    setActive(classTitle)

    const lastEl = document.getElementsByClassName('countries-list__active')
    const el = document.getElementsByClassName(`${classTitle.split(' ')}`)

    if (lastEl.length !== 0) {
      if (lastEl.length == 1) {
        el[0].classList.add('countries-list__active')
        if (lastEl.length === 2) {
          if (lastEl[0].classList == el[0].classList) {
            lastEl[1].classList.remove('countries-list__active')
          } else lastEl[0].classList.remove('countries-list__active')
        } else lastEl[0].classList.remove('countries-list__active')
      }
    } else el[0].classList.add('countries-list__active')
  }

  if (!loading) {
    const recommended = data.countries.filter(item => {
      if (item.title === 'Recomended countries') {
        return item
      }
    })
    const countriesCpa = data.countries.filter(item => {
      if (
        item.title !== 'Recomended countries' &&
        item.title !== 'List of restricted countries' &&
        item.title !== 'Countries that require additional prior approval'
      ) {
        return item
      }
    })

    countriesCpa.sort((a, b) => {
      var titleA = a.title.match(/[\d]/g).join('')
      var titleB = b.title.match(/[\d]/g).join('')

      if (parseFloat(titleA) > parseFloat(titleB)) {
        return -1
      }
      if (parseFloat(titleA) < parseFloat(titleB)) {
        return 1
      }

      return 0
    })

    const countries = data.countries.filter(item => {
      if (
        item.title === 'List of restricted countries' ||
        item.title === 'Countries that require additional prior approval'
      ) {
        return item
      }
    })

    return (
      <div className="countries__container">
        <div className="title__wrap">
          <h1 className="content__title">Countries</h1>
        </div>
        <div className="recomended-countries">
          <RecommendCountries
            title={recommended[0].title}
            countries={recommended[0].countries}
          />
        </div>
        <div className="countriesCpa__countainer">
          <h3 className="countries__title">Preliminary CPA rate</h3>
          <div className="countriesCpa__wrap">
            {countriesCpa.map(item => {
              if (window.innerWidth < 700) {
                return (
                  <MobileCountryList
                    key={item.title}
                    title={item.title}
                    showList={showList}
                    countries={item.countries}
                  />
                )
              } else {
                return (
                  <PreliminaryCpa
                    key={item.title}
                    title={item.title}
                    showList={showList}
                  />
                )
              }
            })}
          </div>
        </div>
        {window.innerWidth < 700 ? null : (
          <div className="countriesCpaList__wrap">
            {countriesCpa.map(item => {
              return (
                <CountryList
                  key={item.title}
                  countries={item.countries}
                  title={item.title}
                />
              )
            })}
          </div>
        )}
        <div className="other-countries__wrap">
          {countries.map(item => {
            if (window.innerWidth < 700) {
              return (
                <MobileCountryList
                  key={item.title}
                  title={item.title}
                  showList={showList}
                  countries={item.countries}
                />
              )
            } else {
              return (
                <PreliminaryCpa
                  key={item.title}
                  title={item.title}
                  showList={showList}
                />
              )
            }
          })}
        </div>
        {window.innerWidth < 700 ? null : (
          <div className="countriesCpaList__wrap">
            {countries.map(item => {
              return (
                <CountryList
                  key={item.title}
                  countries={item.countries}
                  title={item.title}
                />
              )
            })}
          </div>
        )}
      </div>
    )
  } else return <Spinner />
}

export default Countries
