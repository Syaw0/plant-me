import React from 'react';
import Flex from './Styles/styledComponent/Flex';
import globalStyle from './Styles/globalCss';
import Nav from './components/nav';
import Main from './components/main';

function App() {

  globalStyle()

  return (
    <Flex  id='wrapper' data-testid="app"  css={{
      position:"relative",
      padding:" $2 $10",
      "@bp1":{
        padding:" $2 $3",
      },
      "@bp2":{
        padding:" $2 $5",
      },
      "@bp5":{
        padding:" $2 $3",
      }
    }}>
      <Flex css={{"imgBg":""}}></Flex>
      <Flex css={{"meshBg":""}}></Flex>


      <Nav/>
      <Main/>

    </Flex>
  );
}

export default App;
