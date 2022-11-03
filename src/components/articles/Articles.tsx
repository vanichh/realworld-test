import { FC } from 'react';
import { useGetArticleQuery } from 'store/RTK/articlesApi';
import styles from './Articles.module.css';
import FadeLoader from 'react-spinners/FadeLoader';
import { getParams } from 'store/slices/filterSlices';
import { ListArticles } from '../listArticles/ListArticles';

export const Articles: FC = () => {
  const params = getParams();
  const { data, isLoading } = useGetArticleQuery(params);

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

  return <ListArticles articles={data!.articles} />;
};
