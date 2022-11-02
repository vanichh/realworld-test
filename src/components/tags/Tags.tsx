import { useGetTagsQuery } from 'store/RTK/tags';
import styles from './Tags.module.css';

export const Tags = () => {
  const { data = [], isLoading } = useGetTagsQuery();

  if (isLoading) {
    return <></>;
  }

  return (
    <article className={styles.tags}>
      <p className={styles.description}>Tags:</p>
      <section>
        {data.map((item) => (
          <button key={item} className={styles.btn}>
            {item}
          </button>
        ))}
      </section>
    </article>
  );
};
