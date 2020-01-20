import React, { Component } from 'react'
import First from '../First/First'

export default class State extends Component {

    state={
        persons: [
          {name: 'anik', email: 'kamrul@gmail.com', address:'dhaka'},
          {name: 'hasan', email: 'hasan@gmail.com', address:'tangail'},
          {name: 'kamrul', email: 'anik@gmail.com', address:'mirzapur'}
        ]
      }
    



    render() {
        return (
            <div>

                        {this.state.persons.map((people,index)=>{
                        return <First
                        key={index}
                        name={people.name}
                        email={people.email}
                        address={people.address}

                        />
                    })}
                
            </div>
        )
    }
}
