import React from "react";

function ProjectTile({name, description, image, github, demo, deployed}){
  return(
    <div className="col column-30">
      <strong>{name}</strong><br/>
      <div className="d-flex justify-content-around">
        <a href={github}>Github</a>
        <a href={demo}>Demo</a>
        {deployed ? <a href={deployed}>Deployed</a> : null}

      </div>
      <img src={image} alt={name} />
      <p>{description}</p>
    </div>
  )
}

export default ProjectTile;