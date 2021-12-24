import './App.scss';
import AppContainer from './components/container/app-container';
import YourCurrentAddress from './components/your-current-address/your-current-address';

function App() {
  return (
    <div>
      <header className='app-header'>My Community Finance - Address component test</header>

      <div className='main-container'>
        <AppContainer>
          <YourCurrentAddress></YourCurrentAddress>
        </AppContainer>
      </div>
    </div>
  );
}

export default App;
