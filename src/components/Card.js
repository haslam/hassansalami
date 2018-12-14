import React from 'react'
import { Link } from 'gatsby'
import styles from '../styles/card.module.css'

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
