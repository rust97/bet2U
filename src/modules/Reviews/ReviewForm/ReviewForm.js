import React, { useState } from 'react'
import Recaptcha from 'react-recaptcha'
import { DATA } from '../queries/ReviewQuery.gql'
import { useMutation } from 'react-apollo-hooks'
import Notification from '../components/Notification'

export default function ReviewForm() {
  const [text, setText] = useState('')
  const [verify, setVerify] = useState(false)
  const [name, setName] = useState('')
  const [notification, setNotification] = useState('')
  const [hide, setHide] = useState(false)

  const postReview = useMutation(DATA, {
    variables: {
      name: name,
      review: text,
    },
  })

  const onHandlerChange = (e, func) => {
    func(e.target.value)
  }

  const validation = e => {
    e.preventDefault()
    const validName = name.match(/^\S[a-zа-я0-9_]+/i)
    const validText = text.match(/^\S[a-zа-я0-9_]+/i)
    if (verify && validName && validText) {
      postReview()
        .then(res => {
          setNotification('thank you, your submition has been received')
          setText('')
          setName('')
          setHide(true)
        })
        .catch(err => console.log(err))
    } else if (!validName) {
      setNotification('"Name/Organization" field  was filed incorrect')
      setHide(true)
    } else if (!validText) {
      setNotification('"Your review" field  was filed incorrect')
      setHide(true)
    } else return null
  }

  const verifyCallback = response => {
    if (response) {
      setVerify(true)
    } else setVerify(false)
  }
  return (
    <div className="review__form-container">
      <h3 className="review__form-title">Publish Review</h3>
      {hide ? <Notification text={notification} color={'#ffdede'} /> : null}
      <form onSubmit={e => validation(e)}>
        <input
          type="text"
          placeholder="Name/Organization"
          id="inputOrg"
          required
          onChange={e => onHandlerChange(e, setName)}
          value={name}
        />
        <textarea
          placeholder="Your review"
          onChange={e => onHandlerChange(e, setText)}
          id="inputRev"
          value={text}
        />
        <div className="form-submit__container">
          <button className="mt medium diagonal" style={{ display: 'block' }}>
            Submit
          </button>
          <Recaptcha
            sitekey="6LcuIbMUAAAAAO2X7jnADfrIqvcBKYeox_u5Dvu9"
            render="explicit"
            verifyCallback={verifyCallback}
          />
        </div>
      </form>
    </div>
  )
}
