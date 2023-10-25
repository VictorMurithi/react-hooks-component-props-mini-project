import React from 'react';
import Header from './Header';
import About from './About';
import ArticleList from "./ArticleList";

function App() {
  const blogName = "Victor's blog";
  const aboutText = "Welcome to my blog. Here, I share my thoughts and experiences on my learning process in Moringa school.";
  
  const posts = [
    {
      title: "The phase 1 process",
      date: "October 25, 2023",
      content: "This is the phase 1 process content",
    },
    {
      title: "Moringa school phase 2",
      date: "October 25, 2023", 
      content: "This is the content of phase 2.",
    },
  ];

  return (
    <div className="App">
      <Header blogName={blogName} />
      <About text={aboutText} />
      <ArticleList posts={posts} />
    </div>
  );
}

export default App;
