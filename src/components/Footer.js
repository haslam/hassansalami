import React from 'react'
import { rhythm, scale } from '../utils/typography'
import { container, bright__link } from '../styles/layout.module.css'

export default class Footer extends React.Component {
  render () {
   
    return (
      <div className={container} style={{marginTop: rhythm(3), marginBottom: rhythm(1)}}>
        <div style={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center"
        }}
        >
        <p style={{fontSize: "90%", marginBottom: "1rem"}}>&copy; 2018 Copyright Hassan Salami. All rights reserved.</p>
        <small style={{color: "hsl(0,0%,50%)"}}>
          This site is built with 🧡 and 
          <a className={bright__link} href="https://www.gatsbyjs.org" target="_blank" rel="noopener noreferrer"> Gatsby </a> 
          and hosted on <a className={bright__link} href="https://www.netlify.com/" target="_blank" rel="noopener noreferrer">Netlify</a>. 
          Source code can be found on <a className={bright__link} href="https://github.com/haslam/hassansalami" target="_blank" rel="noopener noreferrer">GitHub</a>.
        </small>
        </div>
      </div>
    )
  }
}
