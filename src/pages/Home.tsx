import { Articles } from 'components/articles';
import { Pagination } from 'components/pagination';
import { Tags } from 'components/tags';

export const Home = () => {
  return (
    <main className={'content'}>
      <Tags />
      <Articles />
      <Pagination />
    </main>
  );
};
