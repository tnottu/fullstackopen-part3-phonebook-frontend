import React from 'react'

const Notification = ({ message, type = 'success' }) => {
  if (!message) {
    return null
  }

  return (
    <div className={`notification notification--${type}`}>
      {message}
    </div>
  )
}

export default Notification

