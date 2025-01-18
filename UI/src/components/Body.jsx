import React from 'react'
import styled from 'styled-components'
const BodyStyle = styled.div`
height: 50vh;
width: 40%;
background-color: #0D0D0D;
text-align: left;
display:flex;
margin: 0 auto;
margin-top: 5vh;
border-radius: 1em;
`;
const Div1 = styled.div`
width: 50%;
color:white;
margin: 0 auto;
p {
line-height: 3em;
}

`

const Div2 = styled.div`
    width: 50%;
    padding-bottom: 50vh;
    margin: 0 auto;
    color:red;
    img {
        height:40vh;
        width: 100%;
    }
    p {
        margin-bottom:0;
        color:white;
        text-align: center;
    }

`
function Body() {
  return (
    <BodyStyle>
        <Div1>
            <p>This is the online learning tools using Pokemon. It mainly help
                me memorize Pokemon name. It is also heplful for kids to memorize something interestingly that their brain activate. </p>
        </Div1>
        <Div2>hello</Div2>
    </BodyStyle>

  )
}

export default Body