import React from "react"; 
import styled from "styled-components"; 

function Footer() {
  return (
    <StyledFooter >
      <a href="mailto:steven@stevenmcvey.com" >steven@stevenmcvey.com</a>
    </StyledFooter>
  );
}

const StyledFooter = styled('div')`
margin-top: 50px;
margin-bottom: 0px;
bottom: 0;
width: 100%;
background-color: #293241;
color: #FFFFFF;
font-size: 20px;
text-align: left;
padding-top: 20px;
min-height: calc(100% - 20px);
` 

export default Footer;