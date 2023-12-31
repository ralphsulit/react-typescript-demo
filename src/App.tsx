import { Greet } from './components/Greet.component';
import { Person } from './components/Person/Person.component';
import { PersonList } from './components/PersonList.component';
import { Status } from './components/Status';
import { Heading } from './components/Heading.component';
import { Oscar } from './components/Oscar.component';
import { Button } from './components/Button.component';
import { Input } from './components/Input.component';
import { Container } from './components/Container.component';

import { User } from './components/states/User';
import { Counter } from './components/states/Counter';

import { ThemeContextProvider } from './components/context/ThemeContext';
import { Box } from './components/context/Box';

import { UserContextProvider } from './components/context/UserContext';
import { UserCont } from './components/context/UserCont';

import { DomRef } from './components/ref/DomRef'; 
import { MutableRef } from './components/ref/MutableRef';

import { ClassCounter } from './components/class/ClassCounter';

import { AuthPrivate } from './components/auth/AuthPrivate';
import { AuthProfile } from './components/auth/AuthProfile';

import { List } from './components/generics/List';

import { RandomNumber } from './components/restriction/RandomNumber';

import { Toast } from './components/templateliterals/Toast';

import { CustomButton } from './components/html/ButtonHtml';

import { Text } from './components/polymorphic/Text';

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
      <Input value='' handleChange={event => console.log(event)} />
      <Container styles={{ border: '1px solid black', padding: '1rem' }} />
      
      <User />
      <Counter />

      <ThemeContextProvider>
        <Box />
      </ThemeContextProvider>

      <UserContextProvider>
        <UserCont />
      </UserContextProvider>

      <DomRef />
      <MutableRef />

      <ClassCounter message='The count value is ' />

      <AuthPrivate isLoggedIn={true} component={AuthProfile} />

      {/* <List
        items={['Batman', 'Superman', 'Flash']}
        onClick={(item) => console.log(item)}
      />
      <List
        items={[1, 2, 3]}
        onClick={(item) => console.log(item)}
      /> */}
      <List
        items={[
          {
            id: 1,
            first: 'Bruce',
            last: 'Wayne'
          },
          {
            id: 2,
            first: 'Clark',
            last: 'Kent'
          },
          {
            id: 3,
            first: 'Princess',
            last: 'Dianna'
          }
        ]}
        onClick={(item) => console.log(item)}
      />

      <RandomNumber value={10} isPositive />

      <Toast position='center' />

      <CustomButton variant='primary' onClick={() => console.log('Clicked')}>
        Primary Button
      </CustomButton>

      <Text as='h1' size='lg'>Heading</Text>
      <Text as='p' size='md'>Paragraph</Text>
      <Text as='label' htmlFor='someId' size='sm' color='secondary'>
        Label
      </Text>
    </div>
  );
}

export default App;
