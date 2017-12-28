import React from 'react'
import colors from '../../../theme/colors'

export default () => {
  return (
    <div style={{ borderBottom: `1px solid ${colors.divider}`, textAlign: 'center' }}>
      <a href="https://www.republik.ch/">
        <img
          height="79"
          src="https://assets.project-r.construction/images/logo_republik_newsletter.png"
          style={{
            border: 0,
            width: '180px !important',
            height: '79px !important',
            margin: 0,
            maxWidth: '100% !important'
          }}
          width="180"
          alt="REPUBLIK"
        />
      </a>
    </div>
  )
}