import React from 'react'
import PreviewPromo from '../components/PreviewPromo'
import banner1 from '../../../../public/assets/img/banner1.jpg'
import banner2 from '../../../../public/assets/img/banner2.jpg'
import landing1 from '../../../../public/assets/img/landing1.jpg'
import landing2 from '../../../../public/assets/img/landing2.jpg'
import './Home.scss'
import video from '../../../../public/assets/img/main.mov'

export default function Home() {
  function handlerScroll(e) {
    e.preventDefault()
    var animationTime = 400
    var framesCount = 20
    let coordY = document
      .getElementById(e.currentTarget.getAttribute('href'))
      .getBoundingClientRect().top

    let scroller = setInterval(() => {
      let scrollBy = coordY / framesCount

      if (
        scrollBy > window.pageYOffset - coordY &&
        window.innerHeight + window.pageYOffset < document.body.offsetHeight
      ) {
        window.scrollBy(0, scrollBy)
        console.log('scrollBy', scrollBy, coordY)
      } else {
        if (coordY < 1300) {
          coordY = 1100
          window.scrollTo(0, coordY)
          clearInterval(scroller)
        } else if (coordY > 1300) {
          coordY = 2008
          window.scrollTo(0, coordY)
          clearInterval(scroller)
        } else {
          window.scrollTo(0, coordY)
          console.log('coordY', coordY)
          clearInterval(scroller)
        }
      }
    }, animationTime / framesCount)
  }

  return (
    <div className="home__container">
      <div className="home__main-wrap">
        <div className="home__video-wrap">
          <video autoPlay muted loop id="myVideo">
            <source src={video} />
          </video>
        </div>
        <a
          href="#previewLandings"
          className="home__main-text text-landings"
          onClick={e => handlerScroll(e)}
        >
          Landing pages
        </a>
        <a
          href="#previewBanners"
          className="home__main-text text-bannners"
          onClick={e => handlerScroll(e)}
        >
          banners
        </a>
        <h1>Bet2U Affiliates Help</h1>
      </div>
      <div className="home__heading">
        <h1>Welcome!</h1>
        <p>
          You have reached Bet2U`s affiliate help desk. Here, you can find
          information on almost all aspects of the Bet2U affiliation program,
          ranging from technical know-how of the platform to descriptions of our
          various commission plans. If you do not find what you are looking for,
          please contact your affiliate manager and they shall be more than
          happy to assist you.
        </p>
      </div>
      <PreviewPromo
        title="Landing pages"
        img1={landing1}
        img2={landing2}
        link="/landings"
        id="#previewLandings"
      />
      <PreviewPromo
        title="Banners"
        img1={banner1}
        img2={banner2}
        link="/banners"
        id="#previewBanners"
      />
    </div>
  )
}
