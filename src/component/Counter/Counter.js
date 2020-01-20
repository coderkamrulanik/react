import React, {Component} from 'react'

class Counter extends Component {


constructor(props){
    super(props)

    this.state={
        count: 10
    }
}

decrease =()=>{
    this.setState({
        count: this.state.count-1
    })
}

increase =()=>{
    this.setState({
        count: this.state.count+1
    })
}



render(){

    return(

<div>
   
<h1><button onClick={this.decrease}> - </button> {this.state.count} <button onClick={this.increase}> + </button></h1>
<h3>This is me</h3>
</div>
    ) 
}

}

export default Counter