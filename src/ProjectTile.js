import React from "react";

function ProjectTile({name, description, image}){
  console.log(name, description, image)
  return(
    <div className="col">
      <h2>{name}</h2>
      <img src={image} alt={name} />
      <p>{description}</p>
    </div>
  )
}

export default ProjectTile;