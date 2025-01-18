import React from 'react';
import styled from 'styled-components';

const FooterStyle = styled.footer`
  position: fixed;
  bottom: 0;
  margin-top: auto;
  width: 100%;
  height: 9vh;
  background: #44aa33;
}
`;

function Footer() {
  return (
    <FooterStyle>
      <p>This website is not created for profit reasons.</p>
      <p>Contact:&nbsp;&nbsp;<a href="mailto:kazuyamagarifuchi1211@gmail.com" rel="noopener noreferrer">kazuyamagarifuchi1211@gmail.com</a></p>
    </FooterStyle>
  );
}

export default Footer;
