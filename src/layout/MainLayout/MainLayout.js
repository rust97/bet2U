import React from 'react'
import PropTypes from 'prop-types'
import domain from '../../../public/assets/img/domain.svg'

import Header from '../../components/Header'
import './MainLayout.scss'

const MainLayout = props => {
  return (
    <React.Fragment>
      <Header />
      <div className="content__wrap">{props.children}</div>
      <div className="main__link">
        <a
          href="https://bet2affiliates.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span
            style={{ background: `url(${domain})` }}
            className="content__domain"
          />
          <p>affiliates.bet2u.com</p>
        </a>
      </div>
    </React.Fragment>
  )
}
export default MainLayout

MainLayout.propTypes = {
  children: PropTypes.any.isRequired,
}
