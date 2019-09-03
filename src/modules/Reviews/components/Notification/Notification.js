import React from 'react'

export default function Notification({ text, color }) {
  return (
    <div className="noticification__wrap" style={{ background: `${color}` }}>
      <h3>{text}</h3>
    </div>
  )
}
