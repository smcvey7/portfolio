import React from "react"; 
import styled from "styled-components"; 

function Footer() {
  return (
    <StyledFooter >
      <h1>Footer</h1>
      <p>Footer content</p>
    </StyledFooter>
  );
}

const StyledFooter = styled('div')`
margin-top: 50px;
margin-bottom: 0px
bottom: 0;
width: 100%;
background-color: #293241;
color: #FFFFFF;
font-size: 20px;
text-align: center;
padding-top: 20px;
` 

export default Footer;