import React from "react";
import ProjectTile from "./ProjectTile";

function Projects() {

  const projectList = [
    {
      name: "Test",
      description: "This is the first project",
      image: "https://via.placeholder.com/150"
    },
    {
      name: "Scamps",
      description: "This is the second project",
      image: "https://via.placeholder.com/150"
    },
    {
      name: "Flashcards",
      description: "This is the third project",
      image: "https://via.placeholder.com/150"
    }
  
  ]

  const projectTiles = projectList.map((project) => {
    return <ProjectTile key={project.name} name={project.name} description={project.description} image={project.image} />
  })

console.log(projectTiles)

  return (
    <div className="container text-center">
      <div className="row">
        <div className="col">
          <h1>Projects</h1>
          <p>Projects page body content</p>
        </div>
      </div>
      <div className="row" >
        {projectTiles}
      </div>
    </div>
  );
}

export default Projects;