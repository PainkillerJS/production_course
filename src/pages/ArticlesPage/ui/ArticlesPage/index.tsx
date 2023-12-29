import { ArticleList } from '@/entities/Article/ui/ArticleList';

const ArticlesPage = () => {
  return (
    <section>
      <ArticleList articles={[]} isLoading />
    </section>
  );
};

export default ArticlesPage;
