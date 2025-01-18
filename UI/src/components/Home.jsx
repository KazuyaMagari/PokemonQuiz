import React from "react";
import Header from "./Header"
import Body from './Body'
import Footer from "./Footer"
import IMG from '../Assets/praimg.jpg'
import {createGlobalStyle, styled} from 'styled-components'
const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: 'Arial', sans-serif;
    background-image: url(${IMG});
    background-repeat: no-repeat;
    background-size:cover;
    
    }
`;
const Home = () =>{
    return (
        <>  
            <GlobalStyle />
            <Header/>
            <Body />
            <Footer />
            
        </>
       
    )
}

export default Home