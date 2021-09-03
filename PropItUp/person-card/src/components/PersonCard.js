import React, { Component } from 'react';

class PersonCard extends Component{

    constructor(props) {
        super(props);
        this.state = {
            birthDay: this.props.age
        };
    }
    render(){

        const doSomething = ()=>{
            console.log(`you clicked on ${this.props.nameOfPerson}`)
            alert(`Happy Birthday ${this.props.nameOfPerson}!!!!!!`)
            this.setState({birthDay: this.state.birthDay+1})
        }


        return <>
        <div className="person">
            <h1>{this.props.nameOfPerson}</h1>
            <p>Age: {this.state.birthDay}</p>
            <p>Hair Style: {this.props.children}</p>
            <p><button onClick = {doSomething}>Birthday Button for {this.props.nameOfPerson}</button></p>
        </div>
        </>
        
    }
}

export default PersonCard