import React, { useState, useEffect } from 'react'
import { LANDINGS_DATA } from '../graphql/landings.gql'
import { useQuery } from 'react-apollo-hooks'
import { refetchData, timeToUpdate } from '../graphql/landings.query'
import Landing from '../components/Landing'
import LandingsFilter from '../components/LandingsFilter'
import Spinner from '../../../components/Spinner'
import './Landings.scss'

const LandingList = () => {
  const [load, loadMore] = useState(true)
  const [loadLandings, setLoadlandings] = useState(false)
  const [category, setCategory] = useState('sport')

  useEffect(() => {
    window.addEventListener('scroll', updateRes)
    return () => window.removeEventListener('scroll', updateRes)
  })

  const { data, loading, fetchMore, refetch } = useQuery(LANDINGS_DATA, {
    variables: {
      lang: 'EN',
      first: 7,
      after: 0,
      category: category,
    },
    suspend: false,
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
        <LandingsFilter
          category={category}
          setCategory={setCategory}
          loading={loading}
          refetch={refetch}
        />
        {landingList}
        {loadLandings ? <Spinner /> : null}
      </div>
    )
  } else {
    return <Spinner />
  }
}

export default LandingList
