/* eslint-disable react/display-name */
import React from 'react'
import BannerList from '../modules/BannersList'
import LandingList from '../modules/Landings'
import Content from '../modules/Content'
import Countries from '../modules/Countries'
import FAQ from '../modules/FAQ/index'
import Reviews from '../modules/Reviews'
import Home from '../modules/Home'

const Routes = {
  '/': () => <Home />,
  '/registration': () => <Content section="regestration" />,
  '/creating-links': () => <Content section="creatingLinks" />,
  '/statistics': () => <Content section="statistics" />,
  '/postback': () => <Content section="postback" />,
  '/banners': () => <BannerList />,
  '/faq': () => <FAQ />,
  '/t&c': () => <Content section="t&c" />,
  '/landings/:lang': ({ lang }) => <LandingList lang={lang} />,
  '/revenue-share': () => <Content section="revenue-share" />,
  '/cpa': () => <Content section="cpa" />,
  '/hybrid': () => <Content section="hybrid" />,
  '/data-feed': () => <Content section="dataFeed" />,
  '/countries': () => <Countries />,
  '/promotions': () => <Content section="promotions" />,
  '/bonus-codes': () => <Content section="bonusCodes" />,
  '/reviews': () => <Reviews />,
}

export default Routes
