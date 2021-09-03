import React, {useState} from 'react'

const PersonCard2 = (props)=> {

    const [birthDay, setbirthDay] = useState(props.age)

    const doSomething = ()=>{
        setbirthDay(birthDay+1)
        alert(`Happy Birthday ${props.nameOfPerson} !!!`)
    }

    return <>
    <div className="person">
        <h1>{props.nameOfPerson}</h1>
        <p>Age: {birthDay}</p>
        <p>Hair Style: {props.children}</p>
        <p><button onClick = {doSomething}>Birthday Button for {props.nameOfPerson}</button></p>
    </div>
    </>
}
export default PersonCard2