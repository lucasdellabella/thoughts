// @flow
import React from 'react';
import { withPrefix, Link } from 'gatsby';
import styles from './Author.module.scss';

type Props = {
  author: {
    name: string,
    bio: string,
    photo: string
  },
  isIndex: ?boolean
};

const Nametag = () => {
  return (
    <span className={styles['author__title-nametag']}>
      lucas della bella 
      <br />
      /
    </span>
  )
}

const Author = ({ author, isIndex }: Props) => (
  <div className={styles['author']}>
    <Link to="/">
      <img
        src={withPrefix(author.photo)}
        className={styles['author__photo']}
        width="125"
        height="125"
        alt={author.name}
      />
    </Link>

    { isIndex ? (
      <h1 className={styles['author__title']}>
        <Link className={styles['author__title-link']} to="/">
          Thoughts
          <Nametag />
        </Link>
      </h1>
    ) : (
      <h2 className={styles['author__title']}>
        <Link className={styles['author__title-link']} to="/">
          Thoughts
          <Nametag />
        </Link>
      </h2>
    )}
    <p className={styles['author__subtitle']}>{author.bio}<br/>😤😤</p>
  </div>
);

export default Author;
