import './App.css';
import { Greet } from './components/Greet';
import { Person } from './components/Person';
import { PersonList } from './components/PersonList';
import { Status } from './components/Status';
import { Heading } from './components/Heading';
import { Oscar } from './components/Oscar';
import { Button } from './components/Button';
import { Input } from './components/Input';


const personName  = {
  fname: 'Fenel',
  lname: 'Hyacinthe',
}

const nameList =[
  {
    fname: 'Sony',
    lname: 'Hyacinthe',
  },
  {
    fname: 'Edna',
    lname: 'Hyacinthe',
  },
  {
    fname: 'Finley',
    lname: 'Hyacinthe',
  },
  {
    fname: 'Mayalinda',
    lname: 'Hyacinthe',
  },
]

function App() {
  return (
    <div className="App">
      <Greet name= ' HFENEL SOFT LLC' msgCount={10} isLoggedIn={true} />
      < Person name={personName} />
      <PersonList names={nameList} />
      <Status status = 'error' />
      <Heading>Placeholder text</Heading>
      <Oscar>
        <Heading> Oscar goes to Leonardo Dicaprio</Heading>
      </Oscar>

      <Input value='' handleChange={event =>{
        console.log('Text Changed', event.preventDefault())
      }} />
      <Button handleClick={(event) =>{
        console.log('Button Clicked', event.preventDefault())
      }} />


    </div>
  );
}

export default App;
