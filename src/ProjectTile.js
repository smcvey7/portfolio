import React, {useState} from "react";

function ProjectTile({name, description, image, github, demo, deployed, youtubeEmbeded}){
  const [show, setShow] = useState(false)

  return(
    <div className="col column-30 projectTile">
      <strong>{name}</strong><br/>
      <iframe src={youtubeEmbeded} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      <p className="text-start" >{description}</p>
      <div className="d-flex flex-horizontal">
        <a href={github}><img alt="Github icon" className="link-icon" src="./img/github-icon.png" /></a>
        {deployed ? <a href={deployed}>Try it</a> : null}
      </div>
      
    </div>
  )
}

export default ProjectTile;