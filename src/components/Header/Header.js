import React, { useState } from 'react'
import { A, navigate } from 'hookrouter'
import logo from '../../../public/assets/img/logo.svg'
import burger from '../../../public/assets/img/menu.svg'

const Header = () => {
  const [instr, setInstr] = useState(false)
  const [reg, setReg] = useState(false)
  const [terms, setTerms] = useState(false)
  const [promo, setPromo] = useState(false)

  function hideOut() {
    const el = document.getElementsByClassName('mobile__menu')
    if (el.length === 0) {
      document.getElementById('menu').classList.add('mobile__menu')
    } else el[0].classList.remove('mobile__menu')
  }

  function onLogoClick() {
    const el = document.getElementsByClassName('mobile__menu')
    if (el.length !== 0) {
      navigate('/')
      el[0].classList.remove('mobile__menu')
    } else navigate('/')
  }

  function mobileClick() {
    if (window.innerWidth < 700) {
      hideOut()
    } else return null
  }

  return (
    <header className="header">
      <div className="header__wrap">
        <div className="header__menu">
          <div className="menu-burger__wrap">
            <div
              className="menu__logo"
              style={{ background: `url(${logo})` }}
              onClick={() => onLogoClick()}
            />
            {window.innerWidth < 700 ? (
              <div
                style={{ background: `url(${burger})` }}
                className="burger"
                id="burger"
                onClick={() => hideOut()}
              />
            ) : null}
          </div>
          <ul id="menu" className="menu">
            <li>
              <input id="check01" type="checkbox" name="menu" checked={instr} />
              <label
                htmlFor="check01"
                onMouseEnter={() => setInstr(true)}
                onMouseLeave={() => setInstr(false)}
              >
                Instructions
              </label>
              <ul
                className="submenu"
                onMouseEnter={() => setInstr(true)}
                onMouseLeave={() => setInstr(false)}
              >
                <li>
                  <A onClick={() => mobileClick()} href="/registration">
                    Registartion
                  </A>
                </li>
                <li>
                  <A onClick={() => mobileClick()} href="/creating-links">
                    Creating Links
                  </A>
                </li>
                <li>
                  <A onClick={() => mobileClick()} href="/statistics">
                    Statistics
                  </A>
                </li>
                <li>
                  <A onClick={() => mobileClick()} href="/postback">
                    Postback
                  </A>
                </li>
                <li>
                  <A onClick={() => mobileClick()} href="/data-feed">
                    Data Feed
                  </A>
                </li>
                <li>
                  <A onClick={() => mobileClick()} href="/bonus-codes">
                    Bonus Codes
                  </A>
                </li>
              </ul>
            </li>
            <li>
              <input id="check02" type="checkbox" name="menu" checked={reg} />
              <label
                htmlFor="check02"
                onMouseEnter={() => setReg(true)}
                onMouseLeave={() => setReg(false)}
              >
                Regulations & FAQ
              </label>
              <ul
                className="submenu"
                onMouseEnter={() => setReg(true)}
                onMouseLeave={() => setReg(false)}
              >
                <li>
                  <A onClick={() => mobileClick()} href="/faq">
                    FAQ
                  </A>
                </li>
                <li>
                  {' '}
                  <A onClick={() => mobileClick()} href="/t&c">
                    T&C
                  </A>{' '}
                </li>
              </ul>
            </li>
            <li>
              <input id="check03" type="checkbox" name="menu" checked={terms} />
              <label
                htmlFor="check03"
                onMouseEnter={() => setTerms(true)}
                onMouseLeave={() => setTerms(false)}
              >
                Terms Of Cooperation
              </label>
              <ul
                className="submenu"
                onMouseEnter={() => setTerms(true)}
                onMouseLeave={() => setTerms(false)}
              >
                <li>
                  <A onClick={() => mobileClick()} href="/revenue-share">
                    Revenue share
                  </A>{' '}
                </li>
                <li>
                  <A onClick={() => mobileClick()} href="/cpa">
                    CPA
                  </A>{' '}
                </li>
                <li>
                  <A onClick={() => mobileClick()} href="/hybrid">
                    Hybrid
                  </A>{' '}
                </li>
                <li>
                  <A onClick={() => mobileClick()} href="/countries">
                    Countries
                  </A>{' '}
                </li>
              </ul>
            </li>
            <li>
              <input id="check04" type="checkbox" name="menu" checked={promo} />
              <label
                htmlFor="check04"
                onMouseEnter={() => setPromo(true)}
                onMouseLeave={() => setPromo(false)}
              >
                Promo
              </label>
              <ul
                className="submenu"
                onMouseEnter={() => setPromo(true)}
                onMouseLeave={() => setPromo(false)}
              >
                <li>
                  {' '}
                  <A onClick={() => mobileClick()} href="/banners">
                    Banners
                  </A>{' '}
                </li>
                <li>
                  <A onClick={() => mobileClick()} href="/landings">
                    Landings
                  </A>{' '}
                </li>
              </ul>
            </li>
            <li>
              <input id="check05" type="checkbox" name="menu" checked={false} />
              <label htmlFor="check05">
                <A
                  onClick={() => mobileClick()}
                  className="reviews-link"
                  href="/reviews"
                >
                  Reviews
                </A>
              </label>
            </li>
          </ul>
        </div>
      </div>
    </header>
  )
}

export default Header

// <li>
//                   <A onClick={()=> mobileClick()} href="/banners">Texts</A>{' '}
//                 </li>
//                 <li>
//                   <A onClick={()=> mobileClick()} href="/banners">Key Words</A>{' '}
//                 </li>
