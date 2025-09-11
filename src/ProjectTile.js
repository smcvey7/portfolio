import React, {useState} from "react";
import styled from "styled-components";

function ProjectTile({name, description, image, github, demo, deployed, youtubeEmbeded}){

  const [clicked, setClicked] = useState(false)

  const descriptionSummary = description.slice(0, 100) + "..."

  return(
    <StyledProjectTile className="col column-30 projectTile">
      <strong>{name}</strong><br/>
      <StyledIFrame src={youtubeEmbeded} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></StyledIFrame>
      <p onClick={()=>setClicked(!clicked)} className="text-start" > {clicked ? description : descriptionSummary} </p>
      <div className="d-flex flex-horizontal">
        <a href={github}><img alt="Github icon" className="link-icon" src="/img/github-icon.png" /></a>
        {deployed ? <a href={deployed}>Try it</a> : null}
      </div>
    </StyledProjectTile>
  )
}

const StyledProjectTile = styled('div')`
  border-style: solid;
  border-radius: 10px;
  margin: 10px;
  min-width: 400px;
  padding: 15px;
  background-color: #FFFFFF;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 5s;
`
const StyledIFrame = styled('iframe')`
  width: 100%;
  min-height: 300px;
  border: none;
`

export default ProjectTile;
