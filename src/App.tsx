import React from 'react';
import Flex from './Styles/styledComponent/Flex';
import globalStyle from './Styles/globalCss';


function App() {

  globalStyle()

  return (
    <Flex  id='wrapper' data-testid="app"  css={{
      position:"relative"
    }}>
      <Flex css={{"imgBg":""}}></Flex>
      <Flex css={{"meshBg":""}}></Flex>

    </Flex>
  );
}

export default App;
