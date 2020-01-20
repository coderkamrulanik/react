import React, {Component} from 'react';
import './App.css';
import First from './First/First'
import Counter from './Counter/Counter'


class App extends Component {



  state={
    persons: [
      {name: 'anik', email: 'kamrul@gmail.com', address:'dhaka'},
      {name: 'hasan', email: 'hasan@gmail.com', address:'tangail'},
      {name: 'kamrul', email: 'anik@gmail.com', address:'mirzapur'}
    ]
  }

  render(){
  return (
    <div className="App">
     
{this.state.persons.map((people,index)=>{
return <First
key={index}
name={people.name}
email={people.email}
address={people.address}

/>
})}

<Counter></Counter>


    </div>
  );
}
}
export default App;
