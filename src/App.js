import logo from './logo.svg';
import './App.css';
import FirstScreen from './screens/FirstScreen';
import SecondScreen from './screens/SecondScreen';
import ThirdScreen from './screens/ThirdScreen';
import BasicAccordion from './components/Akordion';
import Countingdown from './components/CountDown';
import DetailsPage from './screens/DetailsPage';

function App() {
  const expiryTimestamp=new Date('6/2/2024').getTime()
  return <>
  <FirstScreen/>
  <ThirdScreen/>
  <SecondScreen/>
  <BasicAccordion/>
  <Countingdown expiryTimestamp={expiryTimestamp}/>
  <DetailsPage/>
  </>
}

export default App;
