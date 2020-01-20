import React, {Component} from 'react'

class Counter extends Component {


constructor(props){
    super(props)

    this.state={
        count: 14,
       
        color: 'black'
    }
}

decrease =()=>{
    this.setState({
        count: this.state.count-1,
        
    })
    if(this.state.count<=5){
       this.setState({
           color:'red'
       })
    }else if(this.state.count>=15){
        this.setState({
            color:'green'
        })

        }  else{
            this.setState({
                color:'black'
            })
}


}
increase =()=>{
    this.setState({
        count: this.state.count+1,
      

    })

    if(this.state.count<5){
        this.setState({
            color:'red'
        })
     }else if(this.state.count>=15){
         this.setState({
             color:'green'
         })
 
         }  else{
             this.setState({
                 color:'black'
             })
 }
    
     }


render(){

    return(

<div>
   
<h1 style={{color: this.state.color}}><button onClick={this.decrease}> - </button> {this.state.count } <button onClick={this.increase}> + </button></h1>
<h3>This is me who can solve that</h3>
</div>
    ) 
}

}

export default Counter