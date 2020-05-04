import React, { Component } from 'react';
import styled from 'styled-components';
import './App.css';
// import Radium, {StyleRoot} from 'radium';
import Person from './Person/Person';


const StyledButton = styled.button`
  background-color: ${props => props.alt? 'red' : 'green'};
  color: white;
  font: inherit;
  border: 1px solid blue;
  padding: 8px;
  cursor: pointer;

  &:hover {
    background-color: ${props => props.alt? 'salmon' : 'lightgreen'};
    color: black;
  }
`;


class App extends Component {
  state = {
    persons: [
      {id: '1522001', name: 'Preeti', age:22 },
      {id: '1522002', name: 'Lame', age:22 },
      {id: '1522003', name: 'Chugs', age:22 },
    ],
    otherState: 'some other value',
    showPersons: false
  }


  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };

    // const person = Object.assign({}, this.state.persons[personIndex])

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState( {persons: persons} );
  }


  deletePersonHandler = (personIndex) => {
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState( {showPersons: !doesShow} );
  }

  render() {
    const style = {
      backgroundColor: 'green',
      color: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',
      ':hover': {
        backgroundColor: 'lightgreen',
        color: 'black'
      }
    };

    let persons = null;

    if(this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person,index) => {
            return <Person
              click={() => this.deletePersonHandler(index)}
              name={person.name}
              age={person.age}
              key={person.id}
              changed={(event) => this.nameChangedHandler(event, person.id)}></Person>
          })}
        </div>
      );

      // style.backgroundColor = 'red';
      // style[':hover'] = {
      //   backgroundColor: 'salmon',
      //   color: 'black'
      // };
    }

    const classes = [];
    if(this.state.persons.length <= 2) {
      classes.push('red'); // classes = ['red' ]
    }
    if(this.state.persons.length <=1) {
      classes.push('bold'); //classes = ['red', 'bold']
    }

    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p className={classes.join(' ')}>This is really working!</p>
        <StyledButton
          // style={style}
          alt={this.state.showPersons}
          onClick={this.togglePersonsHandler}>Toggle Persons </StyledButton>
        {persons}
      </div>

    );
  }
}


export default App;



// function App() {
//   return (
//     <div className="App">
//       <h1>Hi, I'm a React App</h1>
//       <p>This is really working!</p>
//       <Person name='Preeti' age='22' />
//       <Person name='Wali' age='23'> My hobbies: Dancing</Person>
//     </div>
//     // React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'))
//   );
// }



// state = {
//   persons: [
//     { name: 'Preeti', age: '22' },
//     { name: 'Wali', age: '23' }
//   ],
//   otherState: 'some value'
// }

// switchNameHandler = () => {
//   // console.log('Was clicked!');
//   // DON'T DO THIS this.state.persons[0].name = 'Preety';
//   this.setState(  {
//     persons: [
//       { name: 'Pretty', age: '22' },
//       { name: 'Preeti ', age: '23' }
//     ]
//   } )
// }

// const App = props => {
  //   const [personState, setPersonsState] = useState({
  //     persons: [
  //       { name: 'Preeti', age: '22' },
  //       { name: 'Wali', age: '23' }
  //     ],
  //     otherState: 'some value'
  //   });
  
  //   const switchNameHandler = () => {
  //     // console.log('Was clicked!');
  //     // DON'T DO THIS this.state.persons[0].name = 'Preety';
  //     setPersonsState(  {
  //       persons: [
  //         { name: 'Pretty', age: '22' },
  //         { name: 'Preeti ', age: '23' }
  //       ]
  //     } );
  //   };

  {/* <button onClick={switchNameHandler}>SwitchName</button>
        <Person name={personState.persons[0].name} age={personState.persons[0].age} />
        <Person name={personState.persons[1].name} age={personState.persons[1].age}> My hobbies: Dancing</Person> */}