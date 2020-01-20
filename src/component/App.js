import React from 'react';
import './App.css';
import First from './First/First'
import Counter from './Counter/Counter'

function App() {

  let p1= 'Anik'
  return (
    <div className="App">
     
<First name="Kamrul" email="kamrulanikcse@gmail.com" address="Tangail"></First>
<First name="Hasan" email="kamrulanik@gmail.com" address="Tangail"></First>
<First name="Anik" email="beforsure@gmail.com" address="Dhaka"></First>


<Counter></Counter>


    </div>
  );
}

export default App;
