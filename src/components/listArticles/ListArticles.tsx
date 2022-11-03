import { IArticle } from 'lib/types/articleList';
import styles from './ListArticles.module.css';
import { FC } from 'react';

export interface IProps {
  articles: IArticle[];
}

export const ListArticles: FC<IProps> = ({ articles }) => {
  return (
    <section className={styles.list}>
      {articles.map((item) => (
        <article key={item.title} className={styles.post}>
          <header className={styles.header}>
            <img
              alt={'profile icon'}
              className={styles.icon}
              src={item.author.image}
            />
            <h2 className={styles.title}>{item.title}</h2>
            <p>{item.author.username}</p>
            <time className={styles.time}>
              {new Date(item.createdAt).toLocaleDateString()}
            </time>
          </header>
          <p className={styles.description}>{item.body}</p>
          <footer className={styles.footer}>
            <p className={styles.description}>Tags</p>
            <ul className={styles.listTeg}>
              {item.tagList.map((nameTag) => (
                <li key={nameTag} className={styles.teg}>
                  {nameTag}
                </li>
              ))}
            </ul>
          </footer>
        </article>
      ))}
    </section>
  );
};
