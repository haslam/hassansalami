import React from 'react'
import { rhythm, scale } from '../utils/typography'
import { container } from '../styles/layout.module.css'

export default class Footer extends React.Component {
  render () {
    return (
      <div className={container} style={{marginTop: rhythm(1), marginBottom: rhythm(1)}}>
        <div style={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center"
        }}
        >
        <h3 style={{
          ...scale(1/5),
          }}
        >Made with 🧡 and GatsbyJS</h3>
        <p style={{color: "hsl(0,0%,50%)"}}>Copyright &copy; 2018 H3ree. All Rights Reserved.</p>
        </div>
      </div>
    )
  }
}
