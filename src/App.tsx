import './App.css';
import { Greet } from './components/Greet';
import { Person } from './components/Person';
import { PersonList } from './components/PersonList';
import { Status } from './components/Status';

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
    </div>
  );
}

export default App;
