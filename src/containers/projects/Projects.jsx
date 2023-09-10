import React from 'react';
import Project from '../../components/project/Project';
import { cs, html, javascript, java, python, react, figma, git, github, sql, nodejs, tailwind, UxProject, AdsProject, vscode, WebProject } from './imports';
import './projects.css';

const Projects = () => (
  <div className="proj section__padding" id="projects">
    <div className="proj-heading">
      <h1> My Projects</h1>
    </div>
    <div className="proj-container">
      <div className="proj-container_groupB">
        <Project
          imgUrl={UxProject}
          title="UI/UX Design"
          text=" In this group project, I designed a prototype for a mental health app, integrating usability theories and UI/UX design principles. The aim was to create an intuitive and user-friendly interface that promotes mental well-being."
          tools={[figma]}
        />
      </div>
      <div className="proj-container_groupB">
        <Project
          imgUrl={AdsProject}
          title="Algorithm & Data Structure"
          text="I've applied data structures and algorithms effectively in this project, creating a road graph with adjacency matrices and optimizing paths using DFS. These hands-on experiences highlight my capabilities in algorithmic problem-solving"
          tools={[python]}
        />
      </div>
      <div className="proj-container_groupB">
        <Project
          imgUrl={WebProject}
          title="Web Development"
          text="I created a dynamic portfolio website using ReactJS. Leveraging the power of React's component-based architecture, I designed a visually appealing and responsive website that showcases my skills, education, and projects. "
          tools={[html,cs,javascript,react,vscode]}
        />
      </div>
    </div>
  </div>
);

export default Projects;

