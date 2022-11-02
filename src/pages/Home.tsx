import { Articles } from 'components/articles';
import { Tags } from 'components/tags';

export const Home = () => {
  return (
    <main className={'content'}>
      <Tags />
      <Articles />
    </main>
  );
};
