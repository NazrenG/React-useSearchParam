import { useLocation } from "react-router";

function Article() {
  const location = useLocation();
  const article = location.state.article;

  return (
    <div>
      <h2>Article</h2>
      <ul>
        <li key={article.id}>
          <div>
            <h3>
              {article.id}.{article.title}
            </h3>
            <p>{article.description}</p>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default Article;
