import { Greet } from './components/Greet.component';
import { Person } from './components/Person.component';
import { PersonList } from './components/PersonList.component';
import { Status } from './components/Status';

import './App.css';

function App() {
  const personName = {
    firstName: 'Bruce',
    lastName: 'Wayne'
  }

  const nameList = [
    {
      firstName: 'Bruce',
      lastName: 'Wayne'
    },
    {
      firstName: 'Clark',
      lastName: 'Kent'
    },
    {
      firstName: 'Princess',
      lastName: 'Diana'
    }
  ]

  return (
    <div className="App">
      <Greet name='Bruce' messageCount={20} isLoggedIn={true} />
      <Person name={personName} />
      <PersonList names={nameList} />
      <Status status='loading' /> 
    </div>
  );
}

export default App;
