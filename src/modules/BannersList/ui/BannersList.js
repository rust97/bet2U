import React, { useEffect } from 'react'
import { useQuery } from 'react-apollo-hooks'
import Banner from '../components/Banner'
import { BANNER_DATA } from '../graphql/banners.gql'
import './BannersList.scss'
import { useStore } from 'effector-react'
import { $subLang } from '../model/store'
import Spinner from '../../../components/Spinner'
import BannersFilter from '../components/BannersFilter/BannersFilter'

const BannersList = () => {
  const subLang = useStore($subLang)
  const { data, loading } = useQuery(BANNER_DATA, {
    suspend: false,
    variables: { lang: subLang },
  })

  useEffect(() => {
    if (!loading) {
      setActive(subLang)
    }
  }, [loading, subLang])

  const setActive = subLang => {
    const lastEl = document.getElementsByClassName('sub-lang__active')
    const el = document.getElementsByClassName(`${subLang}`)

    if (lastEl.length !== 0) {
      lastEl[0].classList.remove('sub-lang__active')
      el[0].classList.add('sub-lang__active')
    } else el[0].classList.add('sub-lang__active')
  }

  if (!loading) {
    return (
      <div className="banners__wrap">
        <div className="title__wrap">
          <h1 className="content__title">Banners</h1>
        </div>
        <BannersFilter setActive={setActive} />
        <div className="banners__container">
          {data.banners.map((banner, i) => {
            return <Banner banner={banner} key={banner.id} i={i} />
          })}
        </div>
      </div>
    )
  } else return <Spinner />
}

export default BannersList
