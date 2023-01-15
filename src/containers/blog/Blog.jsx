import React from "react";
import Article from "../../components/article/Article";
import "./blog.css";
import { blog01, blog02, blog03, blog04, blog05 } from "./import";

const Blog = () => {
  return (
    <div className="gpt__blog section__padding" id="blog">
      <div className="gpt__bolg-heading">
        <h1 className="gradient__text">
          A lot is happening, We are blogging about it.
        </h1>
      </div>

      <div className="gpt__blog-container">
        <div className="gpt__blog-container__groupA">
          <Article
            image={blog01}
            date="Sep 26, 2021"
            title="GPT-3 and Open  AI is the future. Let us exlore how it is?"
          />
        </div>

        <div className="gpt__blog-container__groupB">
          <Article
            image={blog02}
            date="Sep 26, 2021"
            title="GPT-3 and Open  AI is the future. Let us exlore how it is?"
          />
          <Article
            image={blog03}
            date="Sep 26, 2021"
            title="GPT-3 and Open  AI is the future. Let us exlore how it is?"
          />
          <Article
            image={blog04}
            date="Sep 26, 2021"
            title="GPT-3 and Open  AI is the future. Let us exlore how it is?"
          />
          <Article
            image={blog05}
            date="Sep 26, 2021"
            title="GPT-3 and Open  AI is the future. Let us exlore how it is?"
          />
        </div>
      </div>
    </div>
  );
};

export default Blog;
