import React from "react";
import styled from "styled-components";

function ProjectTile({name, description, image, github, demo, deployed, youtubeEmbeded}){

  return(
    <StyledProjectTile className="col column-30 projectTile">
      <strong>{name}</strong><br/>
      <StyledIFrame src={youtubeEmbeded} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></StyledIFrame>
      <p className="text-start" >{description}</p>
      <div className="d-flex flex-horizontal">
        <a href={github}><img alt="Github icon" className="link-icon" src="./img/github-icon.png" /></a>
        {deployed ? <a href={deployed}>Try it</a> : null}
      </div>
    </StyledProjectTile>
  )
}

const StyledProjectTile = styled('div')`
  border-style: solid;
  border-radius: 10px;
  margin: 10px;
`
const StyledIFrame = styled('iframe')`
  width: 100%;
  min-height: 300px;
  border: none;
`

export default ProjectTile;