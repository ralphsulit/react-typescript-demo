import { Greet } from './components/Greet.component';
import './App.css';

function App() {
  return (
    <div className="App">
      <Greet name='Ralph' messageCount={20} isLoggedIn={true} />
    </div>
  );
}

export default App;
