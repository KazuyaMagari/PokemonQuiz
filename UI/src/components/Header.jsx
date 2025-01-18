import React from 'react'
import styled from 'styled-components'
const HeaderWrap = styled.header`
display: flex;
justify-content: space-between;
align-items: center;
height: 8vh;
background-color:#F2EFE9;
padding: 0;
font-size: 20px;
color:#D93B48;
border-bottom: 2px solid#2B3C3D;
box-sizing: border-box;


`;

const UL = styled.ul`
display: flex;
list-style:none;
li {
  margin-right:20px;
  margin-bottom:0;
}
li a {
  text-decoration: none;
  color: #D93B48;
}
`;

const Div = styled.div`
a { 
  text-decoration: none;
  color: #D93B48;
}
`
function Header() {
 
  return (
    <HeaderWrap>
        <Div>
            <a href="/" >Home</a>
        </Div>
            <UL>
                <li><a href="/quiz">Quiz</a></li>
                <li><a href="/todo">List</a></li>
                <li><a>Zukan</a></li>
            </UL>
    </HeaderWrap>
  )
}

export default Header