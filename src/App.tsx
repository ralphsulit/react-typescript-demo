import { Greet } from './components/Greet.component';
import { Person } from './components/Person.component';

import './App.css';

function App() {
  const personName = {
    firstName: 'Bruce',
    lastName: 'Wayne'
  }

  return (
    <div className="App">
      <Greet name='Bruce' messageCount={20} isLoggedIn={true} />
      <Person name={personName} />
    </div>
  );
}

export default App;
