import logo from './logo.svg';
import app from './App.module.css';
import SelectCity from './component/selectCity/SelectCity';

function App() {
  return (
    <div className={app.main}>
      <SelectCity />
    </div>
  );
}

export default App;
