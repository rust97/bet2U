import React, { useState } from 'react'
import { navigate } from 'hookrouter'

const PrevPageBtn = ({ section }) => {
  let url = ''
  if (section === 'bonusCodes') {
    url = '/data-feed'
  } else if (section === 'dataFeed') {
    url = '/postback'
  } else if (section === 'postback') {
    url = '/statistics'
  } else if (section === 'statistics') {
    url = '/creating-links'
  } else if (section === 'creatingLinks') {
    url = '/registration'
  }
  console.log(section, url)
  return (
    <button className="mt medium diagonal" onClick={() => navigate(url)}>
      {' '}
      Prev Step
    </button>
  )
}

export default PrevPageBtn
