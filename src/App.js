import './App.css';
import Home from './Components/Home/Home';
import Button from './Components/Buttons/Button';

function App() {
  
  return (
    <div className="App container-fluid">
      <h1>hello this is my first react test app</h1>
      <Home />
      <Button /><br /><br />
      <Button color="danger"/>
      <Button color="primary"/>
      <Button color="secondary"/>
    </div>
  );
}

export default  App; 
