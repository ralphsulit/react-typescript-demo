import { Greet } from './components/Greet.component';
import { Person } from './components/Person.component';
import { PersonList } from './components/PersonList.component';
import { Status } from './components/Status';
import { Heading } from './components/Heading.component';
import { Oscar } from './components/Oscar.component';
import { Button } from './components/Button.component'

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
      <Greet name='Bruce' isLoggedIn={true} />
      <Person name={personName} />
      <PersonList names={nameList} />
      <Status status='loading' /> 
      <Heading>Sample Heading</Heading>
      <Oscar>
        <Heading>Oscar goes to Johnny Depp</Heading>
      </Oscar>
      <Button handleClick={(event, id) => {
        console.log('Button Clicked!', event, id)
      }} />
    </div>
  );
}

export default App;
