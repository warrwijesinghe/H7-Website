import React from 'react';
import styles from './BlogCard.module.css';
import { Link } from 'react-router-dom';

const BlogCard = ({cardImage, title, author, date, desc}) => {
  return (
    <div>
      <div className={styles.card}>
      <div className={styles.card_logo}>
        <img
          src={cardImage}
          alt="Haven Seven Hotels"
          className={styles.card_image}
        />
      </div>
      <div className={styles.card_body}>
        <h4 className={styles.card_title}>{title}</h4>
        <h4 className={styles.card_subtitle}>{author} <span>{date}</span></h4>

        <p className={styles.card_description}>{desc}</p>

        
          <button type="button" className={styles.card_button}>
            <Link to={'/blog-post'}>Read More</Link> 
          </button>
      </div>
    </div>
    </div>
  )
}

export default BlogCard
