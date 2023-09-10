import React from 'react';
import './project.css';

const Project = ({ imgUrl, title, text, tools }) => (
  <div className="proj-container_article">
    <div className="proj-container_article-image">
      <img src={imgUrl} alt="blog_image" />
    </div>
    <div className="proj-container_article-content">
      <div>
        <p>{title}</p>
        <h3>{text}</h3>
      </div>
      <div className="proj-container_article-tools">
        <p>Made with:</p>
        <div className="tools-images">
          {tools.map((tool, index) => (
            <img key={index} src={tool} alt={`tool_${index}`} />
          ))}
        </div>
      </div>
    </div>
  </div>
);

export default Project;
