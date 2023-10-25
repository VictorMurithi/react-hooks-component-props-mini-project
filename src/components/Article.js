import React from 'react';

function Article({ title, date, content }) {
  const formattedDate = date || "January 1, 1970";

  return (
    <article>
      <h3>{title}</h3>
      <small>{formattedDate}</small>
      <p>{content}</p>
    </article>
  );
}

export default Article;
