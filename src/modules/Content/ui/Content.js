import React, { useEffect } from 'react'
import { DATA } from '../graphql'
import { useQuery } from 'react-apollo-hooks'
import { $language } from '../../../store'
import { useStore } from 'effector-react'
import Spinner from '../../../components/Spinner'
import NextPageBtn from '../components/NextPageBtn'
import PrevPageBtn from '../components/PrevPageBtn'
import './Content.scss'

const Content = ({ section }) => {
  const lang = useStore($language)
  useEffect(() => {
    refetch()
  }, [lang, section, refetch])
  const { data, loading, refetch } = useQuery(DATA, {
    suspend: false,
    variables: {
      lang: lang,
      section: section,
    },
  })
  if (!loading) {
    var title = JSON.parse(data.content.title)
    var cont = JSON.parse(data.content.content)

    return (
      <div
        className="content__container"
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <div className="title__wrap">
          {title.blocks.map(item => {
            return (
              <h1 className="content__title" key={item.key}>
                {item.text}
              </h1>
            )
          })}
        </div>
        <div className="content">
          {cont.blocks.map(block => {
            if (
              block.entityRanges.length == 0 &&
              block.inlineStyleRanges.length == 0
            ) {
              if (block.type == 'unstyled') {
                return <p>{block.text}</p>
              }
              if (block.type == 'atomic') {
                return <img src={block.data.src} />
              }
              if (block.type == 'header-two') {
                return <h2>{block.text}</h2>
              }
            } else {
              if (block.entityRanges.length !== 0) {
                return (
                  <a
                    href={
                      cont.entityMap[`${block.entityRanges[0].key}`].data.url
                    }
                  >
                    {block.text}
                  </a>
                )
              } else {
                if (block.inlineStyleRanges[0].style == 'ITALIC') {
                  return <p className="italic">{block.text}</p>
                }
                if (block.inlineStyleRanges[0].style == 'BOLD') {
                  return <p className="bold">{block.text}</p>
                }
              }
            }
          })}
        </div>
        <div className="btn__wrap">
          {section === 'bonusCodes' ||
          section === 'creatingLinks' ||
          section === 'statistics' ||
          section === 'postback' ||
          section === 'dataFeed' ? (
            <PrevPageBtn section={section} />
          ) : null}
          {section === 'regestration' ||
          section === 'creatingLinks' ||
          section === 'statistics' ||
          section === 'postback' ||
          section === 'dataFeed' ? (
            <NextPageBtn section={section} />
          ) : null}
        </div>
      </div>
    )
  } else return <Spinner />
}

export default Content
