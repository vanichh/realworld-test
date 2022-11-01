import { FC } from 'react';
import { useGetArticleQuery } from 'store/RTK/articles';
import styles from './Articles.module.css';
import FadeLoader from 'react-spinners/FadeLoader';

export const Articles: FC = () => {
  const { data, isLoading } = useGetArticleQuery();

  if (isLoading) {
    return (
      <div className={styles.loading}>
        <FadeLoader
          color={'black'}
          cssOverride={{ margin: '0 auto' }}
          loading={true}
          aria-label='Loading Spinner'
          data-testid='loader'
        />
      </div>
    );
  }
  console.log(data);

  return (
    <section className={styles.list}>
      {data?.articles.map((item) => (
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
