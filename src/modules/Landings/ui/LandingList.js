import React, { useState, useEffect } from 'react'
import { useStore } from 'effector-react'
import { LANDINGS_DATA } from '../graphql/landings.gql'
import { useQuery } from 'react-apollo-hooks'
import { refetchData, timeToUpdate } from '../graphql/landings.query'
import Landing from '../components/Landing'
import LandingsFilter from '../components/LandingsFilter'
import Spinner from '../../../components/Spinner'
import { $category, $landingsLang } from '../model/store.landings'
import LandingsFilterLangs from '../components/LandingsFilterLangs'
import './Landings.scss'

const LandingList = ({ lang }) => {
  const [load, loadMore] = useState(true)
  const [loadLandings, setLoadlandings] = useState(false)
  const category = useStore($category)
  const landingsLang = useStore($landingsLang)

  useEffect(() => {
    window.addEventListener('scroll', updateRes)
    return () => window.removeEventListener('scroll', updateRes)
  })

  const { data, loading, fetchMore, refetch } = useQuery(LANDINGS_DATA, {
    variables: {
      lang: lang,
      first: 7,
      after: 100000,
      category: category,
    },
    suspend: false,
    partialRefetch: false,
  })

  const updateRes = () => {
    if (!loading) {
      if (timeToUpdate <= 350 && load) {
        loadMore(false)
        if (data.landings.nextPage) {
          refetchData(data, fetchMore, setLoadlandings, loadMore)
        } else return null
      }
    }
  }

  const changeCategory = () => {
    refetchData(data, fetchMore, setLoadlandings, loadMore)
  }

  if (!loading) {
    const landingList = data.landings.list.map((item, i) => {
      return <Landing key={item.id} item={item} i={i} />
    })
    return (
      <div style={{ width: '100%', maxWidth: '960px' }}>
        {' '}
        <div className="title__wrap">
          <h1 className="content__title">Landings</h1>
        </div>
        <LandingsFilterLangs lang={lang} />
        <LandingsFilter loading={loading} changeCategory={changeCategory} />
        {landingList}
        {loadLandings ? <Spinner /> : null}
      </div>
    )
  } else {
    return <Spinner />
  }
}

export default LandingList
