import React, { useState } from 'react'
import { navigate } from 'hookrouter'

const NextPageBtn = ({ section }) => {
  let url = ''
  if (section === 'regestration') {
    url = '/creating-links'
  } else if (section === 'creatingLinks') {
    url = '/statistics'
  } else if (section === 'statistics') {
    url = '/postback'
  } else if (section === 'postback') {
    url = '/data-feed'
  } else if (section === 'dataFeed') {
    url = '/bonus-codes'
  }

  return (
    <button className="mt medium diagonal" onClick={() => navigate(url)}>
      {' '}
      Next Step
    </button>
  )
}

export default NextPageBtn
// content__next-btn
