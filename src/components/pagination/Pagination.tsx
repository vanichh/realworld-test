import { useMemo } from 'react';
import { useAppDispatch } from 'store/hooks';
import { getCountArticle } from 'store/slices/paginationSlices';
import { setCurrentPage, getCurrentPage } from 'store/slices/filterSlices';


import styles from './Pagination.module.css';

export const Pagination = () => {
  const count = getCountArticle();
  const cuppentPage = getCurrentPage() || 1;
  console.log('cuppentPage', cuppentPage)
  const dispatch = useAppDispatch();

  const countPage = useMemo(() => {
    if (count < 10) {
      return [];
    }
    return [...Array(Math.floor(count / 10))].map((_, i) => ++i);
  }, [count]);

  const onTogglePage = (numPage: number) => {
    dispatch(setCurrentPage(numPage));
  };

  return (
    <section className={styles.list}>
      {countPage.map((numberBtn) => (
        <button
          onClick={() => onTogglePage(numberBtn)}
          className={`${styles.btn} ${numberBtn === cuppentPage ? styles.active : ''
            }`}
          key={numberBtn}
        >
          {numberBtn}
        </button>
      ))}
    </section>
  );
};
