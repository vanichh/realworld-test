import { useMemo } from 'react';
import { useToogleArticleMutation } from 'store/RTK/articles';
import { getCountArticle } from 'store/slices/pagination';
import styles from './Pagination.module.css';

export const Pagination = () => {
  const count = getCountArticle();

  const countPage = useMemo(() => {
    if (count < 10) {
      return [];
    }
    return [...Array(Math.ceil(count / 10))].map((item, i) => i + 1);
  }, [count]);

  const [tooglePage, {}] = useToogleArticleMutation();
  const onTogglePage = async (numPage: number) => {
    await tooglePage(numPage * 10).unwrap();
  };

  return (
    <section className={styles.list}>
      {countPage.map((item) => (
        <button
          onClick={() => onTogglePage(item)}
          className={styles.btn}
          key={item}
        >
          {item}
        </button>
      ))}
    </section>
  );
};
