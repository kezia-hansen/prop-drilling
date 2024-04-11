import Article from "./Article";
function ArticleList({ articles }) {
  return (
    <div>
      <h2>Vores artikler</h2>
      <div className="grid">
        {articles.map((ting) => {
          return <Article header={ting.header} content={ting.content} />;
        })}
      </div>
    </div>
  );
}

export default ArticleList;
