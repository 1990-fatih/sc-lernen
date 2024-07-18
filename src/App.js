
import './App.css';

import { AppContainer } from './Components/Container.style';

import { BlueButton, Button, RedButton } from './Components/Button.style';
import { GlobalStyle } from './Components/GlobalStyle.style';

function App() {
  return (

    
    < AppContainer>
      <GlobalStyle/>
      <Button backgrounClour="blue">BlueButon</Button>

      <br/>

      <Button backgrounClour="red">RedButton</Button>



    </AppContainer>
  );
}

export default App;
