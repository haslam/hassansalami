import React from 'react'
import { Link } from 'gatsby'
import styles from '../styles/card.module.css'

const path = require('path')
export default class Card extends React.Component {
  render () {
    const { tag, excerpt, title, date, author, slug  } = this.props;
    return (
      <Link style={{ boxShadow: 'none' }} to={slug} className={[styles.card, styles.card__layer, styles[`${tag.toLowerCase()}`]].join(' ')}>
        <div className={styles.body__top}>
          <p className={styles.post__tag}>{tag}</p>
          <h4 className={styles.post__title}>
              {title}
          </h4>
          <p className={styles.post__excerpt} dangerouslySetInnerHTML={{ __html: excerpt }} />
        </div>
        <div className={styles.body__bottom}>
          <p className={styles.post__date}>{date}</p>
          <small className={styles.post__author}>By {author}</small>
        </div>
      </Link>
    )
  }
}

const GaplessCard = ({ extUrl, extScreen, extText }) => {
  const assetPath = path.join(__dirname, '..', 'assets/screens', extScreen)
  const sreenPics = require(`../assets/screens/${extScreen}`)
  console.log('screen path is ', assetPath)
  return (
    <a 
      href={extUrl}
      className={styles.gaplessCard}
      target='__blank'
      rel='noreferrer noopener'
      >
      <div className={styles.gaplessImg}>
        <img src={sreenPics} />
      </div> 
      <div className={styles.gaplessText} dangerouslySetInnerHTML={{__html: extText}} />
    </a>
  )
  
}

export { GaplessCard }