import { useState } from "react";
import data from "../database.js";
import "../style.css";
import { NavLink, useSearchParams } from "react-router-dom";

function Home() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [title, setTitle] = useState(searchParams.get("title") || "");

  const handleSearch = (e) => {
    e.preventDefault();
    setSearchParams({ title });
  };

  const filteredArticles = data.filter((item) =>
    item.title.toLowerCase().includes(title.toLowerCase())
  );

  return (
    <div>
      <h2>Home</h2>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Enter title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>

      <ul>
        {filteredArticles.map((item) => (
          <li key={item.id}>
            <div>
              <NavLink state={{ article: item }} to={`/article/${item.id}`}>
                <h3>{item.title}</h3>
              </NavLink>
              <p>{item.description}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Home;
