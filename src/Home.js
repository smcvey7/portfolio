import React from 'react';
import styled from 'styled-components';
function Home(){
  return(
    <StyledHome className='d-flex flex-horizontal justify-content-between'>
      <img alt='profile image' style={{minWidth: "20%", maxWidth: "40%", width: "auto", height: "auto"}} src="./img/profile-photo.JPG"/>
      <StyledHomeContent>
        <em>My favorite things...</em><br/>
        <strong>Technology</strong><br/>
        <p>something</p>
        <strong>Language</strong><br/>
        <p>something</p>
        <strong>Education</strong>
        <p>something</p>


      </StyledHomeContent>
    </StyledHome>
  )
}

const StyledHome = styled('div')`
  margin: 10px;
  min-width: 400px;
  padding: 15px;
  background-color: #FFFFFF;
  padding-top: 50px;
`
const StyledHomeContent = styled('div')`
  width: 50%;
  min-height: 300px;
  border: none;
`

export default Home;