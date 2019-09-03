import React, { useEffect } from 'react'
import { useQuery } from 'react-apollo-hooks'
import { $language } from '../../../store'
import { useStore } from 'effector-react'
import { FAQ_DATA } from '../graphql/faq.graphql'
import './FAQ.scss'
import Spinner from '../../../components/Spinner'

const FAQ = () => {
  const lang = useStore($language)
  useEffect(() => {
    refetch()
  }, [lang, refetch])

  const { loading, data, refetch } = useQuery(FAQ_DATA, {
    suspend: false,
    variables: {
      lang: lang,
      section: 'faq',
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
                return <p className="faq__text">{block.text}</p>
              }
              if (block.type == 'atomic') {
                return <img src={block.data.src} />
              }
              if (block.type == 'header-two') {
                return <h2 className="faq__question">{block.text}</h2>
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
                  return <p className="faq__text italic">{block.text}</p>
                }
                if (block.inlineStyleRanges[0].style == 'BOLD') {
                  return <p className="faq__text bold">{block.text}</p>
                }
              }
            }
          })}
        </div>
      </div>
    )
  } else return <Spinner />
}

export default FAQ
