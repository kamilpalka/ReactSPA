import React from "react";

import Article from "../components/Article";

const articles = [
  {
    id: 1,
    title: "Wiewiórki uciekają z lasów",
    author: "Tomasz Dzik",
    text:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero nisi ipsum ad excepturi magni dolores quam quo, quae veritatis aspernatur facilis ipsam ut molestiae vero quidem quas nemo, a minus."
  },
  {
    id: 2,
    title: "Koty nie chodzą po ścianach",
    author: "Anna Pingwin",
    text:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero nisi ipsum ad excepturi magni dolores quam quo, quae veritatis aspernatur facilis ipsam ut molestiae vero quidem quas nemo, a minus."
  },
  {
    id: 3,
    title: "Mój pies nie je mięsa",
    author: "Roman Kloczkowski",
    text:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero nisi ipsum ad excepturi magni dolores quam quo, quae veritatis aspernatur facilis ipsam ut molestiae vero quidem quas nemo, a minus."
  }
];

const HomePage = () => {
  const artList = articles.map(article => (
    <Article key={article.id} {...article} />
  ));
  return <div className="home">{artList}</div>;
};

export default HomePage;
