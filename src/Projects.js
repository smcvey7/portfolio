import React from "react";
import ProjectTile from "./ProjectTile";

function Projects() {

  const projectList = [
    {
      name: "Chinese Character Test",
      description: "Created using React and Rails, this test allows Chinese teachers and researchers to assess students' character recognition ability and to track information across classes over time.",
      image: "https://via.placeholder.com/150",
      github: "https://github.com/smcvey7/chinese-character-app",
      demo: "https://www.youtube.com/watch?v=rQH2PUf91zA",
      deployed: "https://www.chinesecharactertest.com/"
    },
    {
      name: "Scamps",
      description: "An application created with React and Rails to help parents sign their children up for local Summer camps",
      image: "https://via.placeholder.com/150",
      github: "https://github.com/smcvey7/scamps",
      demo: "https://www.youtube.com/watch?v=uwol7GE5Ffo",
      deployed: ""
    },
    {
      name: "Flashcards",
      description: "My first ever coding project; this app was primarily created using JavaScript. In this application, users create an account and then are able to create custom study lists simply by submitting a list of chinese characters. The app finds the pinyin romanization for the characters and creates flashcards with multiple choice options to test the user's knowledge. It keeps track of points earned by the user and displays top users in a leaderboard.",
      image: "https://via.placeholder.com/150",
      github: "https://github.com/smcvey7/phase-1-project-final",
      demo: "https://www.youtube.com/watch?v=UEvHHccliTI",
      deployed: ""
    }
  
  ]

  const projectTiles = projectList.map((project) => {
    return <ProjectTile key={project.name} name={project.name} description={project.description} image={project.image} github={project.github} demo={project.demo} deployed={project.deployed} />
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
      <div className="row align-items-start" >
        {projectTiles}
      </div>
    </div>
  );
}

export default Projects;